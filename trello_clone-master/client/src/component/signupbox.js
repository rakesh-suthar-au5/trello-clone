import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import BasicTextFields from "./signup_form";

const SignUpBox = (props) => {
  return (
    <div className="signupbox">
      <div className="signup_div">
        <h4 className="text-center my-4" style={{ color: "black" }}>
          Welcome to Trello
        </h4>
        <div>
          <BasicTextFields></BasicTextFields>
          <h6 className="text-center mt-2" style={{ color: "red" }}>
            Already a member?<Link to="/login"> Sign In</Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SignUpBox;
