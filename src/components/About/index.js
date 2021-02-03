import React from "react";
import "./style.css";
import Skills from "../Skills/Skills.js";
import pictureOfMe from "../../assests/images/selfImage.png";

function About() {
  return (
    <div className="about">
      <div className="container">
        <img className="about-img" src={pictureOfMe} alt="Meaghan" />

        <h1 className="name"> Hi, I'm Meaghan Neylon. </h1>
        <span className="subtitle">
          I am a full stack web developer from Richmond, VA. I am interested in
          creating and building anything I can get my hands on. I have worked in
          college athletics for the last 8 years and I am excited for a new
          journey ahead. I am a member of Side By Side's Junior Board which is
          dedicated to creating supportive and welcoming communities for LGBTQ+
          youth. In my spare time I enjoy running, biking, reading Reddit
          threads and good coffee.
        </span>

        <div className="contact-info">
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
            href="https://drive.google.com/file/d/1OZl3cVtBs2Oa3rb0WbTJ-lW4kFFhuA-e/view?usp=sharing"
            target="_blank"
          >
            <i className="far fa-file fa-2x" />
          </a>
          <hr />
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default About;
