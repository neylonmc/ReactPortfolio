import React, { Component } from "react";
import Project_DATA from "./portfolio.data";
import Work from "../../components/Work";
import "../../App.css";

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
          <Work key={id} {...otherWorkProps}></Work>
        ))}
      </div>
    );
  }
}

export default ProjectPage;
