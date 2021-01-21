import React from "react";
import "./style.css";
import photo from "../../Images/image01.png";

const ProjectItem = ({ name, concept, github }) => (
  // <div className="project-item">
  //   <div className="imageUrl">
  //     <img src={photo} alt="ffd" className="photo" />
  //   </div>
  //   <div className="project-footer">
  //     <span className="name">{name}</span>
  //   </div>
  // </div>

  <div className="col mb-4">
    <div className="card">
      <img src={photo} class="card-img-top" alt="Project" />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{concept}</p>
        <p>
          <a href="https://leopard-ta.herokuapp.com/">
            <i class="fas fa-external-link-alt fa-2x" />
          </a>
          <a href={github}>
            <i className="fab fa-github-square fa-2x " />
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default ProjectItem;
