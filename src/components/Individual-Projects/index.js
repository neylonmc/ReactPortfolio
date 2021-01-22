import React from "react";
import "./style.css";
import photo from "../../Images/image01.png";
import { Card } from "react-bootstrap";

const ProjectItem = ({ name, concept, github, link }) => (
  <Card style={{ width: "18rem" }} className="grid">
    <Card.Img variant="top" src={photo} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
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
