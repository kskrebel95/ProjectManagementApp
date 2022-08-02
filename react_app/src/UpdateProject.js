import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updatedProject } from "./ducks/project/actions";
import { ProjectListView } from "./ProjectListView";

export const UpdateProject = () => {
  const [project_id, setProjectId] = useState("");
  const [project_name, setProjectName] = useState("");
  const [project_desc, setProjectDesc] = useState("");
  const [project_start_date, setProjectStartDate] = useState("");
  const [project_end_date, setProjectEndDate] = useState("");
  const [project_budget, setProjectBudget] = useState("");
  const { projects } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  console.log(projects);

  const handleSubmit = (event) => {
    event.preventDefault();
    const found_project = projects.find((project, i) => {
      return project.project_id == project_id;
    });
    if (found_project) {
      // console.log(found_project, found_project_index);
      const updates = {
        project_id,
        project_name,
        project_desc,
        project_start_date,
        project_end_date,
        project_budget,
      };
      // const new_project = projects;
      // new_project[found_project_index] = updated_project;
      // console.log(new_project);
      updatedProject({ dispatch, projects, project_id, updates });
    } else {
      alert("Incorrect Project ID. Please try again");
    }
  };

  return (
    <div>
      <ProjectListView />
      <div>
        <div>
          <div className="columns is-mobile is-centered">
            <div className="column is-half">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  {/* Project ID  */}

                  <label className="label">Project ID</label>
                  <div className="control">
                    <input
                      className="input is-success"
                      type="number"
                      value={project_id}
                      onChange={(ev) => setProjectId(parseInt(ev.target.value))}
                      placeholder="Enter valid Product ID"
                    />
                  </div>
                </div>
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
                {/* Update Button  */}
                <div className="buttons">
                  <button className="button is-warning" type="submit">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
