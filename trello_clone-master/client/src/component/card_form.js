import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { create_card } from "../action/card";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));

function BasicTextFields(props) {
  const classes = useStyles();

  const [Title, setTitle] = useState("");
  const [discription, setdiscription] = useState("");
  const [priority, setpriority] = useState("Low");
  const [title_err, settitle_err] = useState(false);
  const [dis_err, setdis_err] = useState(false);
  const send_card_data = () => {
    Title === "" ? settitle_err(true) : settitle_err(false);
    discription === "" ? setdis_err(true) : setdis_err(false);
    if (!title_err && !dis_err) {
      props.create_card({
        name: Title,
        discription: discription,
        priority: priority,
        list_id: props.list_id,
      });
      setTitle("");
      setdiscription("");
    }
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TextField
        id="outlined-basic"
        label="Title"
        value={Title}
        variant="outlined"
        onChange={(event) => setTitle(event.target.value)}
        error={title_err}
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Description"
        multiline
        variant="outlined"
        rowsMax="4"
        value={discription}
        error={dis_err}
        onChange={(event) => setdiscription(event.target.value)}
      />

      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">
          Card priority
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Card priority"
          value={priority}
          onChange={(event) => setpriority(event.target.value)}
        >
          <MenuItem value={"High"}>High</MenuItem>
          <MenuItem value={"Medium"}>Medium</MenuItem>
          <MenuItem value={"Low"}>Low</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color=""
        style={{ width: "92%" }}
        className="mt-2 bg-dark text-white"
        onClick={() => send_card_data()}
      >
        save
      </Button>
    </form>
  );
}

const mapstatetoprop = (state) => {
  return {
    authuser: state.userAuthenticated,
  };
};

export default connect(mapstatetoprop, { create_card })(BasicTextFields);
