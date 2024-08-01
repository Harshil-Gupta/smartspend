import "./Signup.css";
import React from "react";
import AppleSVG from "../SVG/AppleSVG";
import GoogleSVG from "../SVG/GoogleSVG";
import FacebookSVG from "../SVG/FacebookSVG";
import SignupForm from "../SignupForm/SignupForm";
import logo from '../Content/Investments/Pictures/logo.jpg';
import logo3 from '../Content/Investments/Pictures/logo.png';


const Signup = () => {
  return (
    <div className="signup-from">
      <div className="signup-froml">
        <div>
      <img src={logo3} alt="Logo" style={{ width: '500px', height: 'auto' }} />

      </div>
      </div>
      <div className="signup-fromr">
        <div className="form-header">
          <p>Create Account</p>
        </div>
        <div className="form">
          <SignupForm />
        </div>
        <div className="form-footer">
          <p className="text-legend">- OR -</p>
          <div className="social-icons">
            <span className="social-icon">
              <GoogleSVG />
            </span>
            <span className="social-icon">
              <FacebookSVG />
            </span>
            <span className="social-icon">
              <AppleSVG />
            </span>
          </div>
          <p className="text-footer">
            Already have an account? <span className="text-olive">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
