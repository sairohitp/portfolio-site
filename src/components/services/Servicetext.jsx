import React from "react";

const Servicetext = (props) => {
  return (
    <div className="classicflexservice">
      <i className="fa fa-check"></i>
      <div>
        <h4>{props.heading}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Servicetext;
