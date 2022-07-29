import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToTable } from "./features/actions";
import { GenerateTable } from "./GenerateTable";

// const TableRow = ({ action }) => {
//   return (
//     <tr key={action.name}>
//       <th>{action.action_name}</th>
//       <td>{action.action_desc}</td>
//       <td>{action.action_severity}</td>
//       <td>{action.action_budget}</td>
//       <td>{action.action_start_date}</td>
//       <td>{action.action_end_date}</td>
//     </tr>
//   );
// };

export const Actions = () => {
  const [action_name, setActionName] = useState("");
  const [action_desc, setActionDesc] = useState("");
  const [action_start_date, setActionStartDate] = useState("");
  const [action_end_date, setActionEndDate] = useState("");
  const [action_budget, setActionBudget] = useState("");
  const [action_severity, setActionSeverity] = useState("");
  const [actions, setActions] = useState([]);
  const [filtered_actions, setFilteredActions] = useState([]);
  const [modal_style, setModalStyle] = useState(
    document.getElementById("modal")
  );

  const { project_id, project_name } = useParams();
  console.log(project_id);

  const { projects } = useSelector((state) => state.project);
  const headings = [
    { heading: "Project ID" },
    { heading: "Project Name" },
    { heading: "Project Description" },
    { heading: "Project Severity" },
    { heading: "Project Cost ($)" },
    { heading: "Project Start Date" },
    { heading: "Project End Date" },
  ];

  useEffect(() => {
    const updated_actions = JSON.parse(localStorage.getItem("actions"));
    console.log(updated_actions);
    setActions(updated_actions);

    if (updated_actions) {
      const filter_actions = updated_actions.filter((action) => {
        // console.log({ project_id, x: action.project_id });
        return action.project_id == project_id;
      }, []);
      // console.log(afiltered_actions);
      setFilteredActions(filter_actions);
    }

    // console.log(actions);
  }, []);

  const openModal = (event) => {
    setModalStyle(document.getElementById("modal").classList.add("is-active"));
    setModalStyle(document.getElementById("modal").classList.add("is-clipped"));
  };
  const closeModal = (event) => {
    setModalStyle(
      document.getElementById("modal").classList.remove("is-active")
    );
    setModalStyle(
      document.getElementById("modal").classList.remove("is-clipped")
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let old_actions = JSON.parse(localStorage.getItem("actions")) || [];
    //let oldActions = [];

    let new_action = {
      project_id,
      action_name,
      action_desc,
      action_start_date,
      action_end_date,
      action_budget,
      action_severity,
    };

    old_actions.push(new_action);
    // console.log(oldActions);
    localStorage.setItem("actions", JSON.stringify(old_actions));
    setFilteredActions([...filtered_actions, new_action]);

    // Clear form
    setActionName("");
    setActionDesc("");
    setActionSeverity("");
    setActionStartDate("");
    setActionEndDate("");
    setActionBudget("");
  };
  // console.log(props.name);
  return (
    <div>
      {/* Actions Table  */}
      <div>
        <h1 className="title">
          Actions-{project_name}-{project_id}
        </h1>
        <GenerateTable headings={headings} items={filtered_actions} />
      </div>
      {/* <table className="table">
          <thead>
            <tr>
              <th>
                <abbr>Project ID</abbr>
              </th>
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
          {actions.map((action, i) => {
              return <GenerateTableRow key={i} project_data={action} />;
            })}
          {actions.map((action, i) => {
              return <TableRow key={i} action={action} />;
            })}
          <TableRowFromRedux />
        </table> 
      
     
      <div className="column is-half">
        <h1 className="title">Add Action</h1>
        <form onSubmit={handleSubmit}>
           Action name  
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input is-success"
                type="text"
                value={action_name}
                onChange={(ev) => {
                  setActionName(ev.target.value);
                }}
                placeholder="Text input"
              />
            </div>
          </div>
         
          <div className="field">
            <label className="label"> Description</label>
            <div className="control">
              <textarea
                className="textarea"
                value={action_desc}
                onChange={(ev) => setActionDesc(ev.target.value)}
                placeholder="Textarea"
              ></textarea>
            </div>
          </div>
          
          <div className="field">
            <label className="label">Severity</label>
            <div className="control">
              <div className="select">
                <select
                  type="text"
                  value={action_severity}
                  onChange={(ev) => setActionSeverity(ev.target.value)}
                >
                  <option value="High">High</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>

           

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
                  onChange={(ev) => setActionBudget(ev.target.value)}
                  placeholder="Amount of money (0.00)"
                />
              </p>
            </div>
          </div>
          

          <div className="field">
            <label className="label">Start Date</label>
            <div className="control">
              <input
                className="input is-success"
                type="date"
                value={action_start_date}
                onChange={(ev) => setActionStartDate(ev.target.value)}
              />
            </div>
          </div>
          

          <div className="field">
            <label className="label">End Date</label>
            <div className="control">
              <input
                className="input is-success"
                type="date"
                value={action_end_date}
                onChange={(ev) => setActionEndDate(ev.target.value)}
              />
            </div>
          </div>

         
          <div className="buttons">
            <button className="button is-primary" type="submit">
              Add New Action
            </button>
          </div>
        </form>
      </div>*/}
      {/* Modal  */}
      <div id="modal" className="modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add New Action</p>
            <button
              className="delete"
              aria-label="close"
              onClick={closeModal}
            ></button>
          </header>
          <section className="modal-card-body">
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
                      setActionName(ev.target.value);
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
                    onChange={(ev) => setActionDesc(ev.target.value)}
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
                      onChange={(ev) => setActionSeverity(ev.target.value)}
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
                      onChange={(ev) => setActionBudget(ev.target.value)}
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
                    onChange={(ev) => setActionStartDate(ev.target.value)}
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
                    onChange={(ev) => setActionEndDate(ev.target.value)}
                  />
                </div>
              </div>
            </form>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={handleSubmit}>
              Submit
            </button>
            <button className="button" onClick={closeModal}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
      <button className="button is-primary" onClick={openModal}>
        Add New Action
      </button>
    </div>
  );
};
