import React from "react";
import Boardform from "./boardform";

const Createboard = (props) => {
  return (
    <div className="createboard">
      <h4 className="text-center bg-dark mt-3 mb-3 text-white">
        Create A Board
      </h4>
      <Boardform></Boardform>
    </div>
  );
};

export default Createboard;
