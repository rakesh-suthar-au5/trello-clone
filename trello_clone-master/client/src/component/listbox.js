import React from "react";
import EachList from "./each_listfn";
import { connect } from "react-redux";




class ListBox extends React.Component {


    render() {


        return (
            <div className="show_lists">
                {this.props.state.lists.map((list)=><EachList list={list} key={list.id}></EachList>)}
            </div>
        )
    }
}

const MapStateToProp = (state)=>{
    return{
        state:state
    }

}

export default connect(MapStateToProp)(ListBox);
