import React, {useState} from "react";
import validator from "validator/es";

export function inputvalidation(){
    let fn=document.getElementById('firstname').value;
    if(fn=""){
        document.getElementById('firstname').style.borderColor = "red";
    }else{
        document.getElementById('firstname').style.borderColor = "green";

    }
}
//
// export const validateEmail = (e) => {
//     const [emailError, setEmailError] = useState('')
//     let email = e.target.value
//
//         if (validator.isEmail(email)) {
//             setEmailError('Valid Email :)')
//         } else {
//             setEmailError('Enter valid Email!')
//         }
//
// }
