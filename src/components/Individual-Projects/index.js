import React from "react";
import "./style.css";

const ProjectItem = ({ imageUrl, name }) => (
  <div className="project-item">
    <div className="imageUrl">
      <img src={imageUrl} alt="ds" />
    </div>
    <div className="project-footer">
      <span className="name">{name}</span>
    </div>
  </div>
);

export default ProjectItem;
