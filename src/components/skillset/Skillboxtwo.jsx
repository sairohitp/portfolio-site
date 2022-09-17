import React from "react";
import Skillitem from "./Skillitem";

const Skillboxtwo = (props) => {
  return (
    <div className="skillcol">
      <div>
        <img src={props.skillimg} className="skillerimg" alt={props.imgalt} />
      </div>

      <h2 id="skilheader">{props.heading}</h2>
      <br />

      <div className="classicflexskillitems">
        <div>
          <Skillitem heading="NodeJS" level="Experienced" />
          <Skillitem heading="MongoDP" level="Experienced" />
          <Skillitem heading="PHP" level="Basic" />
        </div>
        <div>
          <Skillitem heading="MySQL" level="Experienced" />
          <Skillitem heading="Python" level="Experienced" />
          <Skillitem heading="Ruby" level="Intermediate" />
        </div>
      </div>
    </div>
  );
};

export default Skillboxtwo;
