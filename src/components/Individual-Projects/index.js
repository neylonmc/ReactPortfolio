import React from "react";
import "./style.css";
import photo from "../../Images/image01.png";

const ProjectItem = ({ name, concept, github, link }) => (
  <div className="project-item col mb-4">
    <div className="card">
      <img src={photo} class="card-img-top" alt="Project" />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{concept}</p>
        <p>
          <a href={link}>
            <i
              class="fas fa-external-link-alt fa-2x"
              style={{ color: "black" }}
            />
          </a>
          <a href={github}>
            <i
              className="fab fa-github-square fa-2x "
              style={{ color: "black" }}
            />
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default ProjectItem;
