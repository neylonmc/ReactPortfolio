import React from "react";
import "./style.css";
import ProjectItem from "../../components/Individual-Projects";

const Work = ({ title, items }) => {
  return (
    <div className="work" id="work">
      <h1 className="title">{title.toUpperCase()} </h1>
      <div className="projects">
        {items.map(({ id, ...otherItemProps }) => (
          <ProjectItem key={id} {...otherItemProps} />
        ))}
      </div>
    </div>
  );
};

export default Work;
