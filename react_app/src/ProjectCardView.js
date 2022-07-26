import React from "react";
import { Link } from "react-router-dom";

export const ProjectCardView = ({ project_id, project_name, project_desc }) => {
  // console.log(project_id, project_name, project_desc);
  return (
    <Link to={`/eachproject/${project_name}/${project_id}`}>
      <div>
        {/* <h1>Project Name {name}</h1>
        <h1>Project Desc{desc}</h1> */}
        <div style={{ margin: "10px", width: 300 }}>
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
                  <p className="title is-4">
                    {project_name}-{project_id}
                  </p>
                </div>
              </div>

              <div className="content">{project_desc}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
