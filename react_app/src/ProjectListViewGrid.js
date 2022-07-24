import React from "react";
import { useState } from "react";
import { ProjectCardView } from "./ProjectCardView";

export const ProjectListViewGrid = ({ projects }) => {
  console.log(projects);
  // const projects = Object.values(props);
  // console.log(projects[0].length);
  // console.log(props);

  if (localStorage.getItem("projects") !== null) {
    return (
      <div
        style={{
          margin: "15px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {projects.map((project, i) => (
          <ProjectCardView
            key={i}
            name={project.project_name}
            desc={project.project_desc}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="title">No projects found</h1>
      </div>
    );
  }
};
