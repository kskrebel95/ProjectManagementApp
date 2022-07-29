import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createProject, getProjects } from "./ducks/project/actions";

export const CreateProject = () => {
  const [project_name, setProjectName] = useState("");
  const [project_desc, setProjectDesc] = useState("");
  const [project_start_date, setProjectStartDate] = useState("");
  const [project_end_date, setProjectEndDate] = useState("");
  const [project_budget, setProjectBudget] = useState("");
  // const [projects, setProjects] = useState([]);
  const { projects } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  console.log({ projects });

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(
    //   project_name,
    //   project_desc,
    //   project_start_date,
    //   project_end_date,
    //   project_budget
    // );
    // console.log(projects);
    // const updated_projects = [...projects];
    const project_id = Math.floor(Math.random() * 10000);
    const new_project = {
      project_id,
      project_name,
      project_desc,
      project_start_date,
      project_end_date,
      project_budget,
    };
    createProject({ dispatch, new_project });
    // updated_projects.push({
    //   project_name: project_name,
    //   project_desc: project_desc,
    //   project_start_date: project_start_date,
    //   project_end_date: project_end_date,
    //   project_budget: project_budget,
    // });

    // setProjects(updated_projects);

    // localStorage.setItem("projects", JSON.stringify(updated_projects));
    // localStorage.removeItem("projects");

    // console.log(projects);
  };

  return (
    <div>
      <div className="columns is-mobile is-centered">
        <div className="column is-half">
          <h1 className="title">Create Project</h1>
          <form onSubmit={handleSubmit}>
            {/* Project name  */}
            <div className="field">
              <label className="label">Project Name</label>
              <div className="control">
                <input
                  className="input is-success"
                  type="text"
                  value={project_name}
                  onChange={(ev) => setProjectName(ev.target.value)}
                  placeholder="Text input"
                />
              </div>
            </div>
            {/* Project Description  */}
            <div className="field">
              <label className="label">Project Description</label>
              <div className="control">
                <textarea
                  className="textarea"
                  value={project_desc}
                  onChange={(ev) => setProjectDesc(ev.target.value)}
                  placeholder="Textarea"
                ></textarea>
              </div>
            </div>
            {/* Project Start Date */}

            <div className="field">
              <label className="label">Start Date</label>
              <div className="control">
                <input
                  className="input is-success"
                  type="date"
                  value={project_start_date}
                  onChange={(ev) => setProjectStartDate(ev.target.value)}
                />
              </div>
            </div>
            {/* Project End Date  */}

            <div className="field">
              <label className="label">End Date</label>
              <div className="control">
                <input
                  className="input is-success"
                  type="date"
                  value={project_end_date}
                  onChange={(ev) => setProjectEndDate(ev.target.value)}
                />
              </div>
            </div>
            {/* Project Budget  */}

            <div>
              <label className="label">Budget</label>
              <p className="control">
                <span className="select">
                  <select>
                    <option>$</option>
                    <option>£</option>
                    <option>€</option>
                  </select>
                </span>
              </p>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  value={project_budget}
                  onChange={(ev) => setProjectBudget(ev.target.value)}
                  placeholder="Amount of money (0.00)"
                />
              </p>
            </div>

            {/* Submit Button  */}
            <div className="buttons">
              <button className="button is-primary" type="submit">
                Submit
              </button>
              <button className="button is-info">
                <Link to="/">Home</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
