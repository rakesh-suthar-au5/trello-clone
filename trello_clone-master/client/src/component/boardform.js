import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import form_validation from "../utils/form_validation";
import Button from "@material-ui/core/Button";
import { create_board } from "../action/board";

import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "85%",
    },
  },
}));

function Boardform(props) {
  const classes = useStyles();
  const [title, settitle] = useState("");
  const [dis, setdis] = useState("");
  const [err, seterr] = useState(false);

  const create_boards = () => {
    if (title === "") {
      seterr(true);
    } else {
      seterr(false);
      props.create_board({ discription: dis, name: title });
      setdis("");
      settitle("");
    }
  };

  return (
    <form
      className={classes.root}
      autoComplete="off"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Board Name"
        variant="outlined"
        value={title}
        error={err}
        onChange={(event) => settitle(event.target.value)}
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Description"
        multiline
        variant="outlined"
        rowsMax="2"
        value={dis}
        onChange={(event) => setdis(event.target.value)}
      />
      <Button
        variant="contained"
        color=""
        style={{ width: "87%" }}
        className="mt-3 bg-dark text-white"
        onClick={() => create_boards()}
      >
        Create Board
      </Button>
    </form>
  );
}

const mapstatetoprop = (state) => {
  return {
    state: state,
  };
};

export default connect(mapstatetoprop, { create_board })(Boardform);
