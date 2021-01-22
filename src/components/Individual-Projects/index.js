import React from "react";
import "./style.css";
import { Card } from "react-bootstrap";

const ProjectItem = ({ name, concept, github, link, imageUrl }) => (
  <Card style={{ width: "800px" }} className="grid">
    <img src={imageUrl} alt="pleasework" className="photoImage" />
    <Card.Body className="card-body">
      <Card.Title>{name}</Card.Title>
      <Card.Text>{concept}</Card.Text>
      <Card.Text>
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
      </Card.Text>
    </Card.Body>
  </Card>
);

export default ProjectItem;
