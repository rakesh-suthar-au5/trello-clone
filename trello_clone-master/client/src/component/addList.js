import React, { useState } from "react";
import { create_list } from "../action/lists";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const AddList = (props) => {
  const [list_name, setlist_name] = useState("");
  const [err, seterr] = useState(false);
  const { id } = useParams();
  const createalsit = () => {
    if (list_name === "") {
      seterr(true);
    } else {
      seterr(false);
      props.create_list({ name: list_name, board: id });
      setlist_name("");
    }
  };

  return (
    <div className="add_list_button_div">
      <div className="input-group">
        <input
          type="text"
          className={err ? "form-control bg-dark text-white" : "form-control"}
          placeholder="List Name"
          value={list_name}
          onChange={(event) => setlist_name(event.target.value)}
        ></input>
        <div className="input-group-append">
          <span className="input-group-text">
            <i
              className="fa fa-plus"
              style={{ fontSize: "24px", color: "black" }}
              onClick={() => createalsit()}
            ></i>
          </span>
        </div>
      </div>
    </div>
  );
};

// class AddList extends React.Component {

//     state = {
//         list_name: ''
//     }

//     get_list_name = (name) => {
//         this.setState({
//             list_name: name
//         })

//     }

//     send_list_name = ()=>{

//         this.props.dispatch(app_actions.create_list(this.state.list_name))
//         this.setState({
//             list_name:''
//         })

//     }

//     render() {

//         return (
//             <div className="add_list_button_div">
//                 <div className="input-group">
//                     <input type="text"
//                         className="form-control"
//                         placeholder="Enter list name"
//                         value={this.state.list_name}
//                         onChange={(event) => this.get_list_name(event.target.value)}></input>
//                     <div className="input-group-append">
//                         <span className="input-group-text">
//                             <i className="fa fa-plus"
//                                 style={{ fontSize: "24px", color: "blue" }}
//                                 onClick={() => this.send_list_name()}></i>
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

const mapstatetoprop = (state) => {
  return {
    state: state.lists,
  };
};

export default connect(mapstatetoprop, { create_list })(AddList);
