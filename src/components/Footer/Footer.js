import React from "react";
import background from "../../assests/images/footer.png";

const Footer = () => (
  <footer
    className="footer"
    style={{ backgroundImage: `url(${background})`, height: "100px" }}
  ></footer>
);

export default Footer;
