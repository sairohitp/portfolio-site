import React from "react";

const Facttile = (props) => {
  return (
    <div className="skillcol">
      <center>
        <i className={props.faicon}></i>
        <h2>{props.heading}</h2>
        <p>{props.subheading}</p>
      </center>
    </div>
  );
};

export default Facttile;
