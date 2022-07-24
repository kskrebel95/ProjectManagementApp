import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToTable } from "./features/actions";

const projects = JSON.parse(localStorage.getItem("projects"));

// const TableRowFromRedux = () => {
//   const project_actions = useSelector((state) => state.projectactions.value);

//   return (
//     <tbody>
//       <tr>
//         <th>{project_actions.action_name}</th>
//         <td>{project_actions.action_desc}</td>
//         <td>{project_actions.action_severity}</td>
//         <td>{project_actions.action_budget}</td>
//         <td>{project_actions.action_start_date}</td>
//         <td>{project_actions.action_end_date}</td>
//       </tr>
//     </tbody>
//   );
// };
const TableRowFromLocal = () => {
  const params = useParams();
  // console.log(params.projectname);
  // console.log(projects[params.projectname].project_name);
  const project = projects[params.projectname].project_name;
  // console.log(project);
  const job = JSON.parse(localStorage.getItem(project + "_actions"));
  // console.log(job);

  if (job) {
    return (
      <tbody>
        {job.map((job, i) => (
          <tr key={i}>
            <th>{job.action_name}</th>
            <td>{job.action_desc}</td>
            <td>{job.action_severity}</td>
            <td>{job.action_budget}</td>
            <td>{job.action_start_date}</td>
            <td>{job.action_end_date}</td>
          </tr>
        ))}
      </tbody>
    );
  } else {
    return (
      <tbody>
        <tr>
          <th>No Actions Found</th>
        </tr>
      </tbody>
    );
  }
};

export const Actions = (project) => {
  const [action_name, setAction_name] = useState("");
  const [action_desc, setAction_desc] = useState("");
  const [action_start_date, setAction_start_date] = useState("");
  const [action_end_date, setAction_end_date] = useState("");
  const [action_budget, setAction_budget] = useState("");
  const [action_severity, setAction_severity] = useState("");
  const [actions, setActions] = useState([]);

  // const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const action = project.name + "_actions";
    let oldActions = JSON.parse(localStorage.getItem(action)) || [];

    let newAction = {
      action_name: action_name,
      action_desc: action_desc,
      action_start_date: action_start_date,
      action_end_date: action_end_date,
      action_budget: action_budget,
      action_severity: action_severity,
    };

    oldActions.push(newAction);

    localStorage.setItem(action, JSON.stringify(oldActions));
    // dispatch(
    //   addToTable({
    //     action_name: action_name,
    //     action_desc: action_desc,
    //     action_start_date: action_start_date,
    //     action_end_date: action_end_date,
    //     action_budget: action_budget,
    //     action_severity: action_severity,
    //   })
    // );

    // Clear form
    setAction_name("");
    setAction_desc("");
    setAction_severity("");
    setAction_start_date("");
    setAction_end_date("");
    setAction_budget("");
  };
  // console.log(props.name);
  return (
    <div>
      {/* Actions Table  */}
      <div>
        <h1 className="title">Actions</h1>
        <table className="table">
          <thead>
            <tr>
              <th>
                <abbr>Name</abbr>
              </th>
              <th>Description</th>
              <th>
                <abbr>Severity</abbr>
              </th>
              <th>
                <abbr>Cost ($)</abbr>
              </th>
              <th>
                <abbr>Start Date</abbr>
              </th>
              <th>
                <abbr>End Date</abbr>
              </th>
            </tr>
          </thead>
          {/* <tbody> */}
          <TableRowFromLocal />
          {/* <TableRowFromRedux /> */}

          {/* </tbody> */}
        </table>
      </div>
      {/* Add Action */}
      <div className="column is-half">
        <h1 className="title">Add Action</h1>
        <form onSubmit={handleSubmit}>
          {/* Action name  */}
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input is-success"
                type="text"
                value={action_name}
                onChange={(ev) => {
                  setAction_name(ev.target.value);
                }}
                placeholder="Text input"
              />
            </div>
          </div>
          {/* Action Description  */}
          <div className="field">
            <label className="label"> Description</label>
            <div className="control">
              <textarea
                className="textarea"
                value={action_desc}
                onChange={(ev) => setAction_desc(ev.target.value)}
                placeholder="Textarea"
              ></textarea>
            </div>
          </div>
          {/* Action Severity  */}
          <div className="field">
            <label className="label">Severity</label>
            <div className="control">
              <div className="select">
                <select
                  type="text"
                  value={action_severity}
                  onChange={(ev) => setAction_severity(ev.target.value)}
                >
                  <option value="High">High</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>

            {/* Action Budget  */}

            <div>
              <label className="label">Cost</label>
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
                  value={action_budget}
                  onChange={(ev) => setAction_budget(ev.target.value)}
                  placeholder="Amount of money (0.00)"
                />
              </p>
            </div>
          </div>
          {/* Action Start Date */}

          <div className="field">
            <label className="label">Start Date</label>
            <div className="control">
              <input
                className="input is-success"
                type="date"
                value={action_start_date}
                onChange={(ev) => setAction_start_date(ev.target.value)}
              />
            </div>
          </div>
          {/* Action End Date  */}

          <div className="field">
            <label className="label">End Date</label>
            <div className="control">
              <input
                className="input is-success"
                type="date"
                value={action_end_date}
                onChange={(ev) => setAction_end_date(ev.target.value)}
              />
            </div>
          </div>

          {/* Submit Action  */}
          <div className="buttons">
            <button className="button is-primary" type="submit">
              Add New Action
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
