import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import project from "./ducks/project/reducer";
import { ProjectCardView } from "./ProjectCardView";

export const ProjectGridView = () => {
  const { projects } = useSelector((state) => state.project);

  if ({ projects } !== null) {
    return (
      <div>
        <div
          style={{
            margin: "15px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCardView
              key={project.project_id}
              project_id={project.project_id}
              project_name={project.project_name}
              project_desc={project.project_desc}
            />
          ))}
        </div>
        <div className="columns is-centered">
          <div className="buttons">
            <button className="button is-info">
              <Link to="/">Home</Link>
            </button>
            <button className="button is-primary">
              <Link to="/projects-table">View Project Table</Link>
            </button>
          </div>
        </div>
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
