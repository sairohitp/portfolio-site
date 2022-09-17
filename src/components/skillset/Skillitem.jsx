import React from "react";

const Skillitem = (props) => {
  return (
    <div className="classicflextop">
      <div>
        <i className="fa fa-star"></i>
      </div>
      <div>
        <h4>{props.heading}</h4>
        <p>{props.level}</p>
      </div>
    </div>
  );
};

export default Skillitem;
