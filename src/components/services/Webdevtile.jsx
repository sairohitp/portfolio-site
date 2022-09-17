import React from "react";
import Servicetext from "./Servicetext";
import image from "../../assets/fluid.jpeg";

const Webdevtile = () => {
  return (
    <div className="servicetile">
      <h2>Web Development</h2>
      <div className="servicegridfather">
        <div>
          <img src={image} alt = "webdevelopment"/>
        </div>
        <div id="servicegrid">
          <div>
            <Servicetext heading="Website" description="Entire website built end to end" />
            <Servicetext heading="Bugfixes" description="Complete bug testing every month" />
          </div>

          <div>
            <Servicetext heading="Frontend" description="Perfectly pleasing front end design" />
            <Servicetext heading="Backend" description="Completely responsive backend" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webdevtile;
