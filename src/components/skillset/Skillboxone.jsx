import React from "react";
import Skillitem from "./Skillitem";

const Skillboxone = (props) => {
  return (
    <div className="skillcol">
      <div>
        <img src={props.skillimg} className="skillerimg" alt={props.imgalt} />
      </div>

      <h2 id="skilheader">{props.heading}</h2>
      <br />

      <div className="classicflexskillitems">
        <div>
          <Skillitem heading="HTML" level="Experienced" />
          <Skillitem heading="CSS" level="Experienced" />
          <Skillitem heading="JavaScript" level="Experienced" />
        </div>
        <div>
          <Skillitem heading="Bootstrap" level="Basic" />
          <Skillitem heading="Tailwind" level="Intermediate" />
          <Skillitem heading="ReactJS" level="Experienced" />
        </div>
      </div>
    </div>
  );
};

export default Skillboxone;
