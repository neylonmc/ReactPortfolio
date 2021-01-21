import React from "react";
import "./style.css";
import phone from "../../Images/phone.png";
import email from "../../Images/email.png";

function Contact() {
  return (
    <div className="contact">
      <div className="box">
        <h1> Contact </h1>
        <span> Let's get in touch! </span>
        <div className="form">
          <img src={phone} alt="phone" />
          <img src={email} alt="phone" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
