<<<<<<< HEAD
import Navbar from "../components/Header/Navbar";
import Credentials from "../components/Footer/Credentials";
import React from "react";

import "./css_Files/SignUp.css";

function SignUp() {
  return (
    <>
    <Navbar />
      <div className="FormMate">
        <div className="wrapper">
          <div className="fancy-input">
            <input
              id="email"
              className="fancy-input--input"
              type="email"
              placeholder="Username"
              autocomplete="off"
              required
            />
            <label className="fancy-input--label" for="email">
              <span>Username</span>
            </label>
          </div>

          <div className="fancy-input">
            <input
              id="password"
              className="fancy-input--input"
              type="password"
              placeholder="Password"
              autocomplete="off"
              required
            />
            <label className="fancy-input--label" for="email">
              <span>Password</span>
            </label>
          </div>
        </div>
        
        <span>Dont Have Account? <a href="">click Here</a></span>
        
        <div className="savekar">
          <button className="uk-button uk-button-secondary uk-width-1-1">Login</button>
        </div>
      </div>
      
    </>
  );
}

export default SignUp;
=======
import Navbar from "../components/Header/Navbar";
import Credentials from "../components/Footer/Credentials";
import React from "react";

import "./css_Files/SignUp.css";

function SignUp() {
  return (
    <>
    <Navbar />
      <div className="FormMate">
        <div className="wrapper">
          <div className="fancy-input">
            <input
              id="email"
              className="fancy-input--input"
              type="email"
              placeholder="Username"
              autocomplete="off"
              required
            />
            <label className="fancy-input--label" for="email">
              <span>Username</span>
            </label>
          </div>

          <div className="fancy-input">
            <input
              id="password"
              className="fancy-input--input"
              type="password"
              placeholder="Password"
              autocomplete="off"
              required
            />
            <label className="fancy-input--label" for="email">
              <span>Password</span>
            </label>
          </div>
        </div>
        
        <span>Dont Have Account? <a href="">click Here</a></span>
        
        <div className="savekar">
          <button className="uk-button uk-button-secondary uk-width-1-1">Login</button>
        </div>
      </div>
      
    </>
  );
}

export default SignUp;
>>>>>>> ef4daf8f38df261364c3abb4e10557cf665ae882
