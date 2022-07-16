import React from "react";
import { useState } from "react";

export const Project = (props) => {
  const jobs = Object.values(props);
  // console.log(jobs[0].length);
  // console.log(props);
  const JobPiece = ({ name, desc }) => {
    // console.log(name, desc);
    return (
      <div>
        {/* <h1>Project Name {name}</h1>
        <h1>Project Desc{desc}</h1> */}
        <div style={{ width: "400px" }}>
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left"></div>
                <div className="media-content">
                  <p className="title is-4">{name}</p>
                </div>
              </div>

              <div className="content">{desc}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  if (localStorage.getItem("projects") !== null) {
    return (
      <div>
        {jobs[0].map((job, i) => (
          <JobPiece key={i} name={job.project_name} desc={job.project_desc} />
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
