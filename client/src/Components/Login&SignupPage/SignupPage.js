import React, { useState, useEffect } from "react";
import SignUpForm from './SignUpForm.js'
import LogInForm from './LogInForm.js'


export default function SignUp(){
    return (
      <div className="signup-window">
        <h1>Welcome to Meowy!</h1>
        <div className="btn-group">
          <button
            className="signup"
            onClick={() => (
              (document.getElementById("customer-signup").style.display =
                "block"),
              (document.getElementById("customer-login").style.display = "none")
            )}
          >
            Sign Up
          </button>
          <button
            className="login"
            onClick={() => (
              (document.getElementById("customer-signup").style.display =
                "none"),
              (document.getElementById("customer-login").style.display = "block")
            )}
          >
            Log In
          </button>
        </div>
        <div className="forms">
          <SignUpForm />
          <LogInForm />
        </div>
      </div>
    );
}