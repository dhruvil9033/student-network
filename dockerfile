# FROM ubuntu:18.04
# RUN apt-get update && \
#     apt-get install -y curl

# RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
#     apt-get install -y nodejs

# RUN npm install -g @angular/cli && \
#     npm i \
#     npm start

# EXPOSE 4200



# # stage 1
# FROM node:alpine AS my-app-build

# WORKDIR /app
# COPY . .
# RUN npm ci && npm run build

# # stage 2

# FROM nginx:alpine
# COPY --from=my-app-build /app/dist/demo12 /usr/share/nginx/html
# EXPOSE 80



# FROM nginx:alpine
# COPY /dist/StudentNetwork /usr/share/nginx/html
# EXPOSE 80





# get the base node image
FROM node:alpine as builder

# set the working dir for container
WORKDIR /student-network

# copy the json file first
COPY ./package.json /student-network

# install npm dependencies
RUN npm install

# copy other project files
COPY . .

# build the folder
CMD [ "npm", "run", "start" ]





# # pull the official base image
# FROM node:alpine
# # set working direction
# WORKDIR /client
# # add `/app/node_modules/.bin` to $PATH
# ENV PATH PATH="./node_modules/.bin:$PATH"
# # install application dependencies
# # COPY package.json ./
# # COPY package-lock.json ./

# # add app
# COPY . .
# RUN npm run build
# # start app
# CMD ["npm", "start"]









# FROM python:3.6
# EXPOSE 5000
# WORKDIR /app
# COPY requirements.txt /app
# RUN python -m pip install --upgrade pip
# RUN pip install --trusted-host pypi.org --trusted-host pypi.python.org --trusted-host=files.pythonhosted.org --no-cache-dir -r requirements.txt
# COPY app.py /app
# COPY database.py /app
# CMD python app.py
