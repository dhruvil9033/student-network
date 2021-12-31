import React from "react";

export default function login() {
    return(
        <div className="auth-wrapper">
            <div className="auth-inner">
        <form action="http://localhost:5000/users/login" method="POST">
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" name="email" className="form-control" required placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" name="pwd" className="form-control" required placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="/forgotpass">password?</a>
            </p>
        </form>
            </div>
        </div>
    )
}

