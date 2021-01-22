import React from "react";
import "./style.css";
import phone from "../../newstuff/phone.png";
import email from "../../newstuff/email.png";

function Contact() {
  return (
    <div className="contact">
      <div className="box">
        <h1> Contact </h1>
        <span> Let's get in touch! </span>
        <div className="form">
          <img src={phone} alt="phone" />
          <a href="mailto:neylonmc@gmail.com" target="_blank">
            <img src={email} alt="phone" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
