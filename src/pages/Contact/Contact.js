import React from "react";
import "./ContactStyle.css";
import phone from "../../assests/images/phone.png";
import email from "../../assests/images/email.png";

function Contact() {
  return (
    <div className="contact">
      <div className="box">
        <h1> Contact </h1>
        <span> Let's get in touch! </span>
        <div className="form" style={{ flexWrap: "wrap" }}>
          <div>
            <img src={phone} alt="phone" className="responsive" />
          </div>
          <a href="mailto:neylonmc@gmail.com" target="_blank" rel="noreferrer">
            <img src={email} alt="email" className="responsive" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
