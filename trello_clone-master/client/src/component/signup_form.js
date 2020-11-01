import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import form_validation from "../utils/form_validation";
import api_calls from "../utils/apicalls";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "85%",
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [c_password, setc_password] = useState("");
  const [name_err, setname_err] = useState(false);
  const [email_err, setemail_err] = useState(false);
  const [pass_err, setpass_err] = useState(false);

  const do_signup = () => {
    var errors = form_validation.signup_validation(
      name,
      email,
      password,
      c_password
    );
    if (!errors.email && !errors.name && !errors.password) {
      api_calls.signup({ name: name, email: email, password: password });
    } else {
      setname_err(errors.name);
      setemail_err(errors.email);
      setpass_err(errors.password);
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
        label="Name"
        variant="outlined"
        value={name}
        onChange={(event) => setname(event.target.value)}
        error={name_err}
      />
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
      />
      <TextField
        id="outlined-basic"
        label="confirm Password"
        type="password"
        variant="outlined"
        value={c_password}
        onChange={(event) => setc_password(event.target.value)}
        error={pass_err}
      />
      <Button
        variant="contained"
        color=""
        style={{ width: "87%" }}
        className="mt-2 bg-dark text-white"
        onClick={() => do_signup()}
      >
        Signup
      </Button>
    </form>
  );
}
