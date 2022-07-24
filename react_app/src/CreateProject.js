import React, { useState, useEffect } from "react";

export const CreateProject = () => {
  const [project_name, setProject_name] = useState("");
  const [project_desc, setProject_desc] = useState("");
  const [project_start_date, setProject_start_date] = useState("");
  const [project_end_date, setProject_end_date] = useState("");
  const [project_budget, setProject_budget] = useState("");
  const [projects, setProjects] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(
    //   project_name,
    //   project_desc,
    //   project_start_date,
    //   project_end_date,
    //   project_budget
    // );
    const updated_projects = [...projects];

    updated_projects.push({
      project_name: project_name,
      project_desc: project_desc,
      project_start_date: project_start_date,
      project_end_date: project_end_date,
      project_budget: project_budget,
    });

    setProjects(updated_projects);

    localStorage.setItem("projects", JSON.stringify(updated_projects));
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
                  onChange={(ev) => setProject_name(ev.target.value)}
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
                  onChange={(ev) => setProject_desc(ev.target.value)}
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
                  onChange={(ev) => setProject_start_date(ev.target.value)}
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
                  onChange={(ev) => setProject_end_date(ev.target.value)}
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
                  onChange={(ev) => setProject_budget(ev.target.value)}
                  placeholder="Amount of money (0.00)"
                />
              </p>
            </div>

            {/* Submit Button  */}
            <div className="buttons">
              <button className="button is-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
