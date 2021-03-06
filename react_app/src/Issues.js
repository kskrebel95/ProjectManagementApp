import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// const { projects } = useSelector((state) => state.project);

const TableRowFromLocal = () => {
  const { projects } = useSelector((state) => state.project);

  const params = useParams();
  // console.log(params.projectname);
  // console.log(projects[params.projectname].project_name);
  const project = projects[params.projectname].project_name;
  // console.log(project);
  const job = JSON.parse(localStorage.getItem(project + "_issues"));
  // console.log(job);

  if (job) {
    return (
      <tbody>
        {job.map((job, i) => (
          <tr key={i}>
            <th>{job.issue_name}</th>
            <td>{job.issue_desc}</td>
            <td>{job.issue_solution}</td>
            <td>{job.issue_severity}</td>
            <td>{job.issue_budget}</td>
            <td>{job.issue_reported_date}</td>
            <td>{job.issue_solution_date}</td>
          </tr>
        ))}
      </tbody>
    );
  } else {
    return (
      <tbody>
        <tr>
          <th>No Issues Found</th>
        </tr>
      </tbody>
    );
  }
};

export const Issues = (project) => {
  const [issue_name, setIssue_name] = useState("");
  const [issue_desc, setIssue_desc] = useState("");
  const [issue_solution, setIssue_solution] = useState("");
  const [issue_severity, setIssue_severity] = useState("");
  const [issue_budget, setIssue_budget] = useState("");
  const [issue_reported_date, setIssue_reported_date] = useState("");
  const [issue_solution_date, setIssue_solution_date] = useState("");
  const [issues, setIssues] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const issue = project.name + "_issues";
    let oldIssues = JSON.parse(localStorage.getItem(issue)) || [];
    let newIssue = {
      issue_name: issue_name,
      issue_desc: issue_desc,
      issue_solution: issue_solution,
      issue_severity: issue_severity,
      issue_budget: issue_budget,
      issue_reported_date: issue_reported_date,
      issue_solution_date: issue_solution_date,
    };
    oldIssues.push(newIssue);

    localStorage.setItem(issue, JSON.stringify(oldIssues));
    // localStorage.removeItem(props.name + "_issues");

    // Clear form
    setIssue_name("");
    setIssue_desc("");
    setIssue_solution("");
    setIssue_severity("");
    setIssue_reported_date("");
    setIssue_solution_date("");
    setIssue_budget("");
  };
  // console.log(props.name);
  return (
    <div>
      {/* Issues Table  */}
      <div>
        <h1 className="title">Issues</h1>
        <table className="table">
          <thead>
            <tr>
              <th>
                <abbr>Name</abbr>
              </th>
              <th>Description</th>
              <th>Solution</th>
              <th>
                <abbr>Severity</abbr>
              </th>
              <th>
                <abbr>Cost ($)</abbr>
              </th>
              <th>
                <abbr>Reported Date </abbr>
              </th>
              <th>
                <abbr>Solution Date</abbr>
              </th>
            </tr>
          </thead>
          {/* <tbody> */}
          <TableRowFromLocal />
          {/* </tbody> */}
        </table>
      </div>
      {/* Add Issue */}
      <div className="column is-half">
        <h1 className="title">Add Issue</h1>
        <form onSubmit={handleSubmit}>
          {/* Issue name  */}
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input is-success"
                type="text"
                value={issue_name}
                onChange={(ev) => setIssue_name(ev.target.value)}
                placeholder="Text input"
              />
            </div>
          </div>
          {/* Issue Description  */}
          <div className="field">
            <label className="label"> Description</label>
            <div className="control">
              <textarea
                className="textarea"
                value={issue_desc}
                onChange={(ev) => setIssue_desc(ev.target.value)}
                placeholder="Textarea"
              ></textarea>
            </div>
          </div>
          {/* Issue Solution  */}
          <div className="field">
            <label className="label"> Solution</label>
            <div className="control">
              <textarea
                className="textarea"
                value={issue_solution}
                onChange={(ev) => setIssue_solution(ev.target.value)}
                placeholder="Textarea"
              ></textarea>
            </div>
          </div>
          {/* Issue Severity  */}
          <div className="field">
            <label className="label">Severity</label>
            <div className="control">
              <div className="select">
                <select
                  type="text"
                  value={issue_severity}
                  onChange={(ev) => setIssue_severity(ev.target.value)}
                >
                  <option value="High">High</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>

            {/* Issue Budget  */}

            <div>
              <label className="label">Cost</label>
              <p className="control">
                <span className="select">
                  <select>
                    <option>$</option>
                    <option>??</option>
                    <option>???</option>
                  </select>
                </span>
              </p>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  value={issue_budget}
                  onChange={(ev) => setIssue_budget(ev.target.value)}
                  placeholder="Amount of money (0.00)"
                />
              </p>
            </div>
          </div>
          {/* Issue Reported Date */}

          <div className="field">
            <label className="label">Reported Date</label>
            <div className="control">
              <input
                className="input is-success"
                type="date"
                value={issue_reported_date}
                onChange={(ev) => setIssue_reported_date(ev.target.value)}
              />
            </div>
          </div>
          {/* Issue Solution Date  */}

          <div className="field">
            <label className="label">Solution Date</label>
            <div className="control">
              <input
                className="input is-success"
                type="date"
                value={issue_solution_date}
                onChange={(ev) => setIssue_solution_date(ev.target.value)}
              />
            </div>
          </div>

          {/* Submit Issue  */}
          <div className="buttons">
            <button className="button is-primary" type="submit">
              Add New Issue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
