import React from "react";
import requestCV from "../../assets/CV.pdf";
import "./socials.css";

const Socials = () => {
  return (
    <div id="socialhandler" className="classicflex">
      <div>
        <a href={requestCV} download="sairohit-cv">
          <button className="primaryBTN"><h5>Download CV</h5></button>
        </a>
        &nbsp;&nbsp;
        <a href="https://m.me/200percentcoma" download>
          <button className="primaryBTN"><h5>Let's Chat</h5></button>
        </a>
      </div>

      <div>
        <a
          href="https://github.com/sairohitp"
          target={"_blank"}
          rel={"noreferrer noopener"}
        >
          <span className="fa-stack fa-2x">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-github fa-stack-1x icon"></i>
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/sairohitp/"
          target={"_blank"}
          rel={"noreferrer noopener"}
        >
          <span className="fa-stack fa-2x">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-linkedin fa-stack-1x icon"></i>
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/sairohitp/"
          target={"_blank"}
          rel={"noreferrer noopener"}
        >
          <span className="fa-stack fa-2x">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-dribbble fa-stack-1x icon"></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Socials;
