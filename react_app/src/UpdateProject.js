import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProject } from "./ducks/project/actions";
import { ProjectListView } from "./ProjectListView";

export const UpdateProject = () => {
  const [project_name, setProject_name] = useState("");
  const { projects } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  console.log(projects);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(project_name);
    console.log("hello");
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
                  <label className="label">
                    Project NAME to Update Project
                  </label>
                  <div className="control">
                    <input
                      className="input is-success"
                      type="text"
                      value={project_name}
                      onChange={(ev) => setProject_name(ev.target.value)}
                      placeholder="Enter project name"
                    />
                  </div>
                </div>
                {/* Submit Button  */}
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
