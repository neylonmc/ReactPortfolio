import React from "react";
import "./style.css";
import pictureOfMe from "../../newstuff/selfImage.png";

function About() {
  return (
    <div className="about">
      <div className="container">
        <img
          src={pictureOfMe}
          alt="Meaghan"
          style={{ width: "45%", height: "auto" }}
        />

        <h1 className="name"> Hi, I'm Meaghan Neylon. </h1>
        <span className="subtitle">
          I am an aspiring web developer from Richmond, VA. I am interested in
          creating and building anything I can get my hands on. I have worked in
          college athletics for the last 8 years and I am excited for a new
          journey ahead. I am a member of Side By Side's Junior Board which is
          dedicated to creating supportive and welcoming communities for LGBTQ+
          youth. In my spare time I enjoy running, biking, reading Reddit
          threads and good coffee.
        </span>

        <div className="contact-info" style={{ color: "white" }}>
          <a href="https://github.com/neylonmc" target="_blank">
            <i className="fab fa-github-square fa-2x " />
          </a>
          <a
            href="https://www.linkedin.com/in/meaghan-neylon-844b031b4/"
            target="_blank"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
          <a href="mailto:neylonmc@gmail.com" target="_blank">
            <i className="fas fa-at fa-2x" />
          </a>
          <a
            href="https://drive.google.com/file/d/1kk01rSQkjnCMNbWMgTikpXnOQnewWDA9/view?usp=sharing"
            target="_blank"
          >
            <i className="far fa-file fa-2x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
