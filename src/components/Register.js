import React from "react";
import {validateEmail} from "./validate";

export default function register(){
    return(
        <form onfocusout="inputvalidation()">
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" required id="firstname" placeholder="First name" />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" required placeholder="Last name" />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control"  required placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Role</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Admin</option>
                </select>
            </div>

            <div className="form-group">
                <label>Security Question</label>
                <input type="email" required className="form-control" placeholder="Enter question" />
            </div>

            <div className="form-group">
                <label>Security Answer</label>
                <input type="email" required className="form-control" placeholder="Enter answer" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="/login">sign in?</a>
            </p>
        </form>
    )
}
