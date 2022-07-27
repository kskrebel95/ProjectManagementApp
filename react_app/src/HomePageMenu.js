import React from "react";
import { Link } from "react-router-dom";

export const HomePageMenu = () => {
  return (
    <div className="columns is-mobile is-centered">
      <div className="column is-half">
        <p className="title">Welcome to Projects Management</p>
        <div className="buttons">
          <button className="button is-primary">
            <Link to="/projects">View Projects</Link>
          </button>
          <button className="button is-info">
            <Link to="/create-project">Create Projects</Link>
          </button>
          <button className="button is-warning">
            <Link to="/update-project">Update Projects</Link>
          </button>
          <button className="button is-danger">
            <Link to="/delete-project">Delete Projects</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
