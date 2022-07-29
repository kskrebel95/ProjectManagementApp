import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProject } from "./ducks/project/actions";
import { ProjectListView } from "./ProjectListView";

export const DeleteProject = () => {
  const [project_id, setProjectId] = useState("");
  const { projects } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  console.log(projects);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(projects, project_id);
    deleteProject({ dispatch, projects, project_id });
    // const new_project = projects.filter(
    //   (project) => project.project_id != project_id
    // );
    //   console.log(new_project);
    //   deleteProject({ dispatch, new_project });
  };

  return (
    <div>
      <ProjectListView />
      <div>
        <div>
          <div className="columns is-mobile is-centered">
            <div className="column is-half">
              <form onSubmit={handleSubmit}>
                {/* Project name  */}
                <div className="field">
                  <label className="label">Project ID to Delete Project</label>
                  <div className="control">
                    <input
                      className="input is-success"
                      type="text"
                      value={project_id}
                      onChange={(ev) => setProjectId(ev.target.value)}
                      placeholder="Enter project ID"
                    />
                  </div>
                </div>
                {/* Submit Button  */}
                <div className="buttons">
                  <button className="button is-danger" type="submit">
                    Delete
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
