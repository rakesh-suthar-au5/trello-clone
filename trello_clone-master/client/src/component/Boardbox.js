import React from "react";
import Createboard from "./createboard";
import Viewboard from "./viewboard";
import { useSelector, useDispatch  } from "react-redux";
import { useEffect } from "react";
import { Load_board_data } from "../action/board"
import { connect } from "react-redux"




const BoradBox = (props) => {

    

    useEffect(()=>{
        props.Load_board_data()
    },[])

    return (
        <div className="boardbox">
            
            {props.boards.map((board)=><Viewboard board={board} key={board.id}></Viewboard>)}
            <Createboard></Createboard>
        </div>


    )
}

const mapstatetoprop = (state)=>{
    return{
        boards:state.boards

    }
} 


export default connect(mapstatetoprop,{Load_board_data})(BoradBox) 
