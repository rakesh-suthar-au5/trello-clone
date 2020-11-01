import React,{useEffect} from "react";
import ListBox from "./listbox";
import AddList from "./addList";
import { connect } from "react-redux";
import {Load_lists} from "../action/lists";
import { keys } from "@material-ui/core/styles/createBreakpoints";

const OpenBoard = (props)=>{


    useEffect(()=>{
        props.Load_lists(props.match.params.id)
    },[])

    console.log(props.match.params.id)

    





    return(
        <div className="openboard">
            <ListBox></ListBox>
            <AddList></AddList>

        </div>
    )

}

const mapstatetoprop = (state)=>{
    
    return{
        lists:state.lists
    }

}

export default connect(mapstatetoprop,{Load_lists})(OpenBoard)

