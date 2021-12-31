import React from "react";
// import {validateEmail} from "./validate";

export default function register(){




    // const handleSubmit = (event) => {
    //     alert('A form was submitted: ' + this.state);
    //
    //     fetch('http://localhost:5000/users/register', {
    //         method: 'POST',
    //         // We convert the React state to JSON and send it as the POST body
    //         body: JSON.stringify(this.state)
    //     }).then(function(response) {
    //         console.log(response)
    //         return response.json();
    //     });
    //
    //     event.preventDefault();
    // }

    return(
        <form action="http://localhost:5000/users/register" method="POST">
        {/*// <form onSubmit={handleSubmit()} >*/}
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" required name="fname" placeholder="First name" />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" required name="lname" placeholder="Last name" />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control"  required name="email" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Role</label>
                <select className="form-select" name="role" aria-label="Default select example">
                    <option selected value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Admin</option>
                </select>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" required name="pwd" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="/login">sign in?</a>
            </p>
        </form>
    )
}
