import React from "react";
import "./skillset.css";

import webdevimg from "../../assets/webdever.png";
import designer from "../../assets/designer.jpg";
import programmer from "../../assets/programmer.png";

import Skillboxone from "./Skillboxone";
import Skillboxtwo from "./Skillboxtwo";
import Skillboxthree from "./Skillboxthree";

import Tagbox from "../tagger/Tagbox";

const Skillset = () => {
  return (
    <div className="skillfather" id="skillset">
      <Tagbox subtop="Wonders I can do with my" heading="Skillset" />
      <div className="skilldivbox">
        <Skillboxone
          skillimg={webdevimg}
          imgalt="webdeveloper image"
          heading="Frontend"
        />
        <Skillboxtwo
          skillimg={programmer}
          imgalt="webdeveloper image"
          heading="Backend"
        />
        <Skillboxthree
          skillimg={designer}
          imgalt="webdeveloper image"
          heading="UX Design"
        />
      </div>
    </div>
  );
};

export default Skillset;
