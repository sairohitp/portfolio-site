import React from "react";
import Skillitem from "./Skillitem";

const Skillboxthree = (props) => {
  return (
    <div className="skillcol">
      <div>
        <img src={props.skillimg} className="skillerimg" alt={props.imgalt} />
      </div>

      <h2 id="skilheader">{props.heading}</h2>
      <br />

      <div className="classicflexskillitems">
        <div>
          <Skillitem heading="Adobe XD" level="Advanced" />
          <Skillitem heading="Figma" level="Experienced" />
          <Skillitem heading="Wireframing" level="Skilled" />
        </div>
        <div>
          <Skillitem heading="Dribble" level="Experienced" />
          <Skillitem heading="Workflows" level="Basic" />
        </div>
      </div>
    </div>
  );
};

export default Skillboxthree;
