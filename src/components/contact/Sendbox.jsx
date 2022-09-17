import React from "react";

const Sendbox = () => {
  return (
    <div id="socialhandler" className="classicflex sendboxhandler">
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=8825921018"
          target={"_blank"}
          rel={"noreferrer noopener"}
        >
          <span className="fa-stack fa-2x">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-whatsapp fa-stack-1x icon"></i>
          </span>
        </a>
        <a
          href="mailto:sairohitp007@gmail.com"
          target={"_blank"}
          rel={"noreferrer noopener"}
        >
          <span className="fa-stack fa-2x">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa-regular fa-envelope fa-stack-1x icon"></i>
          </span>
        </a>
        <a
          href="https://m.me/200percentcoma"
          target={"_blank"}
          rel={"noreferrer noopener"}
        >
          <span className="fa-stack fa-2x">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa-brands fa-facebook-messenger fa-stack-1x icon"></i>
          </span>
        </a>
      </div>


      <div>
        <a download>
          <button className="primaryBTN">
            Send&nbsp;&nbsp;&nbsp;<i className="fa-regular fa-paper-plane"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Sendbox;
