import React from "react";
import Servicetext from "./Servicetext";
import image from "../../assets/ux.png";

const Uxtile = () => {
  return (
    <div className="servicetile">
      <h2>UX Wireframing</h2>
      <div className="servicegridfather">
        <div>
          <img src={image} alt = "uximage"/>
        </div>
        <div id="servicegrid">
          <div>
            <Servicetext heading="Website" description="Entire website built end to end" />
            <Servicetext heading="Bugfixes" description="Complete bug testing every month" />
            <Servicetext heading="Bugfixes" description="Complete bug testing every month" />
          </div>

          <div>
            <Servicetext heading="Frontend" description="Perfectly pleasing front end design" />
            <Servicetext heading="Backend" description="Completely responsive backend" />
            <Servicetext heading="Backend" description="Completely responsive backend" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uxtile;
