import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const projects = JSON.parse(localStorage.getItem("projects"));

const TableRow = () => {
  const params = useParams();
  console.log(params.projectname);
  console.log(projects[params.projectname].project_name);
  const project = projects[params.projectname].project_name;
  console.log(project);
  const job = JSON.parse(localStorage.getItem(project + "_risks"));
  console.log(job);

  if (job) {
    return (
      <tbody>
        {job.map((job, i) => (
          <tr key={i}>
            <th>{job.risk_name}</th>
            <td>{job.risk_desc}</td>
            <td>{job.risk_solution}</td>
            <td>{job.risk_severity}</td>
            <td>{job.risk_budget}</td>
          </tr>
        ))}
      </tbody>
    );
  } else {
    return (
      <tbody>
        <tr>
          <th>No Risks Found</th>
        </tr>
      </tbody>
    );
  }
};

export const Risks = (props) => {
  const [risk_name, setRisk_name] = useState("");
  const [risk_desc, setRisk_desc] = useState("");
  const [risk_solution, setRisk_solution] = useState("");
  const [risk_severity, setRisk_severity] = useState("");
  const [risk_budget, setRisk_budget] = useState("");
  const [risks, setRisks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(
    //   project_name,
    //   project_desc
    //   project_start_date,
    //   project_end_date,
    //   project_budget
    // );
    risks.push({
      risk_name: risk_name,
      risk_desc: risk_desc,
      risk_solution: risk_solution,
      risk_severity: risk_severity,
      risk_budget: risk_budget,
    });
    setRisks(risks);
    const risk = props.name + "_risks";
    localStorage.setItem(risk, JSON.stringify(risks));
    // localStorage.removeItem(props.name + "_risks");
  };
  console.log(props.name);
  return (
    <div>
      {/* Risks Table  */}
      <div>
        <h1 className="title">Risks</h1>
        <table className="table">
          <thead>
            <tr>
              <th>
                <abbr>Name</abbr>
              </th>
              <th>Description</th>
              <th>Solution</th>
              <th>
                <abbr>Potential Severity</abbr>
              </th>
              <th>
                <abbr>Poteintial Cost ($)</abbr>
              </th>
            </tr>
          </thead>
          {/* <tbody> */}
          <TableRow />
          {/* </tbody> */}
        </table>
      </div>
      {/* Add Risk */}
      <div className="column is-half">
        <h1 className="title">Add Risk</h1>
        <form onSubmit={handleSubmit}>
          {/* Risk name  */}
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input is-success"
                type="text"
                value={risk_name}
                onChange={(ev) => setRisk_name(ev.target.value)}
                placeholder="Text input"
              />
            </div>
          </div>
          {/* Risk Description  */}
          <div className="field">
            <label className="label"> Description</label>
            <div className="control">
              <textarea
                className="textarea"
                value={risk_desc}
                onChange={(ev) => setRisk_desc(ev.target.value)}
                placeholder="Textarea"
              ></textarea>
            </div>
          </div>

          {/* Risk Solution  */}
          <div className="field">
            <label className="label"> Solution</label>
            <div className="control">
              <textarea
                className="textarea"
                value={risk_solution}
                onChange={(ev) => setRisk_solution(ev.target.value)}
                placeholder="Textarea"
              ></textarea>
            </div>
          </div>
          {/* Risk Severity  */}
          <div className="field">
            <label className="label">Potential Severity</label>
            <div className="control">
              <div className="select">
                <select
                  type="text"
                  value={risk_severity}
                  onChange={(ev) => setRisk_severity(ev.target.value)}
                >
                  <option value="High">High</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>

            {/* Risk Budget  */}

            <div>
              <label className="label">Poteintial Cost</label>
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
                  value={risk_budget}
                  onChange={(ev) => setRisk_budget(ev.target.value)}
                  placeholder="Amount of money (0.00)"
                />
              </p>
            </div>
          </div>
          {/* Submit Risk  */}
          <div className="buttons">
            <button className="button is-primary" type="submit">
              Add New Risk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
