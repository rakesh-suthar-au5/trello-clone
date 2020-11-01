import React from "react";
import { Link, Redirect } from "react-router-dom";

const Viewboard = (props) => {
  const open_board = () => {
    window.location.href = `/board/${props.board.id}`;
  };

  return (
    <div className="eachboard shadow" onClick={() => open_board()}>
      <h5 className="text-center bg-dark text-white rounded p-2">
        {props.board.name}
      </h5>
      <p className="text-center p-3">{props.board.discription}</p>
    </div>
  );
};

export default Viewboard;
