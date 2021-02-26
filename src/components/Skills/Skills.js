import React from "react";
import "./SkillsStyle.css";
import skills from "../../assests/images/mern.png";

function Skills() {
  return (
    <div className="skill-section">
      <h1 id="skills-header">
        Skills: <img className="skill-img" src={skills} alt="skills-img" />
      </h1>
    </div>
  );
}

export default Skills;
