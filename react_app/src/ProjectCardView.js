import React from "react";

export const ProjectCardView = ({ name, desc }) => {
  // console.log(name, desc);
  return (
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
