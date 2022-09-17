import React from "react";
import "./header.css";
import Socials from "./Socials";

import profile from "../../assets/profile.jpeg";
import Facttile from "./Facttile";

const Header = () => {
  return (
    <div className="divbox" id="about">
      <div className="classicflex headerbox">
        <div>
          <img src={profile} id="ppic" alt="profilepic" />
        </div>
        <div>
          <h1 style={{ color: "red" }} id="namaste">
            Namaste! –– I'm Sai Rohit
          </h1>
          <h2>
            <i>Web Developer • Programmer • Designer</i>
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Nisipariatur nemo est veniam quae. 
            Aliquam iste obcaecati voluptatem quout dolor ad tenetur, 
            debitis exfacere maiores harum, cum odio.
            
            <br/><br/>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Nisipariatur nemo est veniam quae. 
            Aliquam iste obcaecati voluptatem quout dolor ad tenetur, 
            debitis exfacere maiores harum, cum odio.
          </p>
          <Socials />
        </div>
      </div>
      <div className="skilldivbox">
        <Facttile faicon="fa fa-certificate factfa" heading="Experience" subheading="5+ Years" />
        <Facttile faicon="fa fa-users factfa" heading="Clients" subheading="50+ Worldwide" />
        <Facttile faicon="fa fa-folder factfa" heading="Projects" subheading="100+ Completed" />
      </div>
    </div>
  );
};

export default Header;
