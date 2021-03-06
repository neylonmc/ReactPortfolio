import React from "react";
import "./AboutStyle.css";
import Skills from "../../components/Skills/Skills.js";
import pictureOfMe from "../../assests/images/selfImage.png";
import Animation from "../../components/Typewriter/Typewriter";
function About() {
  return (
    <div className="about">
      <div className="container">
        <img className="about-img" src={pictureOfMe} alt="Meaghan" />

        <h1 className="name">
          <Animation />
        </h1>
        <span className="subtitle">
          I am a Full Stack Web Developer from Richmond, VA. I enjoy the
          solution-driven environment and creating applications that function on
          any screen, big or small. I have worked in college athletics for the
          last 8 years and I am excited for a new journey ahead. I am a member
          of Side By Side's Junior Board which is dedicated to creating
          supportive and welcoming communities for LGBTQ+ youth. In my spare
          time I enjoy running, biking, reading Reddit threads and good coffee.
        </span>

        <div className="contact-info">
          <a
            href="https://github.com/neylonmc"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github-square fa-2x " />
          </a>
          <a
            href="https://www.linkedin.com/in/meaghan-neylon-844b031b4/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
          <a href="mailto:neylonmc@gmail.com" target="_blank" rel="noreferrer">
            <i className="fas fa-at fa-2x" />
          </a>
          <a
            href="https://drive.google.com/file/d/1OZl3cVtBs2Oa3rb0WbTJ-lW4kFFhuA-e/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <i className="far fa-file fa-2x" />
          </a>
        </div>
        <Skills />
      </div>
    </div>
  );
}

export default About;
