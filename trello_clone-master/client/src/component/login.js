import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import BasicTextFields from "./login_form";
import { useQueryParam, StringParam } from "use-query-params";

const LoginBox = (props) => {
  const [wrong_details] = useQueryParam("wrong_details", StringParam);
  const [signup] = useQueryParam("signup", StringParam);
  console.log(wrong_details);

  const islogin = useSelector((state) => state.isLogin);

  return (
    <div className="loginbox">
      <div className="login_div">
        <h4 className="text-center my-4" style={{ color: "black" }}>
          Welcome to Trello
        </h4>
        {signup ? (
          <h6 className="bg-success text-center">
            Signup successful login now
            <a className="float-right mr-1" href="/login">
              X
            </a>
          </h6>
        ) : (
          ""
        )}
        {wrong_details === "true" ? (
          <h6 className="bg-danger text-center">
            Invalid details
            <a className="float-right mr-1" href="/login">
              X
            </a>
          </h6>
        ) : (
          ""
        )}
        <div>
          <BasicTextFields></BasicTextFields>
          <h6 className="text-center mt-2" style={{ color: "red" }}>
            Not registered?<Link to="/">Register here</Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
