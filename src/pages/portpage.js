import React, { Component } from "react";
import Project_DATA from "./portfolio.data";
import Work from "../components/Work";
import photo from "../Images/image01.png";

class ProjectPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: Project_DATA,
    };
  }

  render() {
    const { projects } = this.state;
    return (
      <div className="work-page">
        {projects.map(({ id, ...otherWorkProps }) => (
          <Work key={id} {...otherWorkProps}>
            <img src={photo} alt="ffd" />
          </Work>
        ))}
      </div>
    );
  }
}

export default ProjectPage;
