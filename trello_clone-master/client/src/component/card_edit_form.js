import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { useDispatch, connect } from "react-redux"

import { Edit_card } from "../action/card";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '50ch',

        },

    },
}));

function BasicTextFields(props) {
    const classes = useStyles();

    const [Title, setTitle] = useState(props.title)
    const [discription, setdiscription] = useState(props.Dis)
    const [priority, setpriority] = useState(props.priority)
    const [listid, setlistid] = useState(props.list.id)
    const Dispatch = useDispatch()
    const send_card_data = () => {
        if (Title !== "" && discription !== "") {
            props.Edit_card({ name: Title, discription: discription, priority: priority, list: listid, id: props.card_id },props.card_index)
            props.closemodal()
        }

    }

    return (
        <form className={classes.root}
            noValidate
            autoComplete="off"
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <TextField id="outlined-basic"
                label="Title"
                value={Title}
                variant="outlined"
                error={Title === ""}
                onChange={(event) => setTitle(event.target.value)} />
            <TextField id="outlined-multiline-flexible"
                label="Description"
                multiline
                variant="outlined"
                rowsMax="4"
                error={discription === ""}
                value={discription}
                onChange={(event) => setdiscription(event.target.value)} />

            <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">Card priority</InputLabel>
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
            <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">Card List</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Card list"
                    value={listid}
                    onChange={(event) => setlistid(event.target.value)}


                >
                    <MenuItem value={listid}>
                        <em>{props.list.name}</em>
                    </MenuItem>
                    {props.full_list.map((list) => <MenuItem value={list.id}>{list.name}</MenuItem>)}


                </Select>
            </FormControl>
            <Button variant="contained"
                color="primary"
                style={{ width: "92%" }}
                className="mt-2"
                onClick={() => send_card_data()}>save</Button>


        </form>
    );
}


const mapstatetoprop = (state) => {
    return {

    }

}


export default connect(mapstatetoprop, { Edit_card })(BasicTextFields)