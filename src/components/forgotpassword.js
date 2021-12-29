import React from "react";

export default function forgotpw(){
    return(
        <form>
            <h3>Forgot Password</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sent Mail</button>
            <p className="forgot-password text-right">
                Back to <a href="/login">Login?</a>
            </p>
        </form>
    )
}
