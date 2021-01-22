import React from "react";
import "./style.css";

const ProjectItem = ({ name, concept, github, link, imageUrl }) => (
  <div class="container-fluid">
    <div class="row">
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src={imageUrl} alt="Card image cap" />
          <div class="card-block">
            <h4
              class="card-title"
              style={{ color: "black", textAlign: "center" }}
            >
              {name}
            </h4>
            <p class="card-text" style={{ color: "black" }}>
              {concept}
            </p>
            <p class="card-text">
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
    </div>
  </div>
);

export default ProjectItem;
