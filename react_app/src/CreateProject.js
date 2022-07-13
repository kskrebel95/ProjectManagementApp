import React from "react";

export const CreateProject = () => {
  return (
    <div>
      <div className="columns is-mobile is-centered">
        <div className="column is-half">
          <h1 className="title">Create Project</h1>
          <div>
            <div className="field">
              <label className="label">Project Name</label>
              <div className="control">
                <input
                  className="input is-success"
                  type="text"
                  placeholder="Text input"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Project Description</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Textarea"
                ></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Start Date</label>
              <div className="control">
                <input className="input is-success" type="date" />
              </div>
            </div>
            <div className="field">
              <label className="label">End Date</label>
              <div className="control">
                <input className="input is-success" type="date" />
              </div>
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
                    placeholder="Amount of money (0.00)"
                  />
                </p>
              </div>
            </div>
            <div className="buttons">
              <button className="button is-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Next thing you want to do is submit data in form then capture in a project component
