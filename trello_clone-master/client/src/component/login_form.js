import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import form_validation from "../utils/form_validation";
import Button from "@material-ui/core/Button";
import api_calls from "../utils/apicalls";
import { login } from "../action/loginaction";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "85%",
    },
  },
}));

function BasicTextFields(props) {
  const classes = useStyles();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [email_err, setemail_err] = useState(false);
  const [pass_err, setpass_err] = useState(false);
  const history = useHistory();

  const do_login = () => {
    var error = form_validation.login_validation(email, password);
    if (!error.email && !error.password) {
      setemail_err(false);
      setpass_err(false);
      props.login({ email: email, password: password }, history);
    } else {
      setemail_err(error.email);
      setpass_err(error.password);
    }
  };

  return (
    <form
      className={classes.root}
      autoComplete="off"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(event) => setemail(event.target.value)}
        error={email_err}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(event) => setpassword(event.target.value)}
        error={pass_err}
      />
      <Button
        variant="contained"
        color=""
        style={{ width: "87%" }}
        className="mt-2 bg-dark text-white"
        onClick={() => do_login()}
      >
        Login
      </Button>
    </form>
  );
}

const mapstatetoprop = (state) => {
  return {
    islogin: state.userAuthenticated,
  };
};

export default connect(mapstatetoprop, { login })(BasicTextFields);
