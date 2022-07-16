import React from "react";

const Actions = () => {
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
                <abbr>Cost</abbr>
              </th>
              <th>
                <abbr>Start Date</abbr>
              </th>
              <th>
                <abbr>End Date</abbr>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>
                Leicester City
                <strong>(C)</strong>
              </td>
              <td>38</td>
              <td>23</td>
              <td>12</td>
              <td>3</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Arsenal</td>
              <td>38</td>
              <td>20</td>
              <td>11</td>
              <td>7</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Tottenham Hotspur</td>
              <td>38</td>
              <td>19</td>
              <td>13</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Add Action */}
      <div className="column is-half">
        <h1 className="title">Add Action</h1>
        <form>
          {/* Action name  */}
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              {/* <input
                  className="input is-success"
                  type="text"
                  value={project_name}
                  onChange={(ev) => setProject_name(ev.target.value)}
                  placeholder="Text input"
                /> */}
            </div>
          </div>
          {/* Action Description  */}
          <div className="field">
            <label className="label"> Description</label>
            <div className="control">
              {/* <textarea
                  className="textarea"
                  value={project_desc}
                  onChange={(ev) => setProject_desc(ev.target.value)}
                  placeholder="Textarea"
                ></textarea> */}
            </div>
          </div>
          {/* Action Start Date */}

          <div className="field">
            <label className="label">Start Date</label>
            <div className="control">
              {/* <input
                  className="input is-success"
                  type="date"
                  value={project_start_date}
                  onChange={(ev) => setProject_start_date(ev.target.value)}
                /> */}
            </div>
          </div>
          {/* Action End Date  */}

          <div className="field">
            <label className="label">End Date</label>
            <div className="control">
              {/* <input
                  className="input is-success"
                  type="date"
                  value={project_end_date}
                  onChange={(ev) => setProject_end_date(ev.target.value)}
                /> */}
            </div>
          </div>
          {/* Action Severity  */}
          <div className="field">
            <label className="label">Severity</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>High</option>
                  <option>Moderate</option>
                  <option>Low</option>
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
                {/* <input
                    className="input"
                    type="text"
                    value={project_budget}
                    onChange={(ev) => setProject_budget(ev.target.value)}
                    placeholder="Amount of money (0.00)"
                  /> */}
              </p>
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

const Risks = () => {
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
                <abbr>Poteintial Cost</abbr>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>
                Leicester City
                <strong>(C)</strong>
              </td>
              <td>38</td>
              <td>23</td>
              <td>23</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Arsenal</td>
              <td>38</td>
              <td>23</td>

              <td>20</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Tottenham Hotspur</td>
              <td>38</td>
              <td>19</td>
              <td>23</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Add Risk */}
      <div className="column is-half">
        <h1 className="title">Add Action</h1>
        <form>
          {/* Risk name  */}
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              {/* <input
                    className="input is-success"
                    type="text"
                    value={project_name}
                    onChange={(ev) => setProject_name(ev.target.value)}
                    placeholder="Text input"
                  /> */}
            </div>
          </div>
          {/* Risk Description  */}
          <div className="field">
            <label className="label"> Description</label>
            <div className="control">
              {/* <textarea
                    className="textarea"
                    value={project_desc}
                    onChange={(ev) => setProject_desc(ev.target.value)}
                    placeholder="Textarea"
                  ></textarea> */}
            </div>
          </div>
          {/* Risk Solution  */}
          <div className="field">
            <label className="label"> Solution</label>
            <div className="control">
              {/* <textarea
                    className="textarea"
                    value={project_desc}
                    onChange={(ev) => setProject_desc(ev.target.value)}
                    placeholder="Textarea"
                  ></textarea> */}
            </div>
          </div>

          {/* Risk Severity  */}
          <div className="field">
            <label className="label"> Potential Severity</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>High</option>
                  <option>Moderate</option>
                  <option>Low</option>
                </select>
              </div>
            </div>

            {/* Risk Cost  */}

            <div>
              <label className="label">Potential Cost</label>
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
                {/* <input
                      className="input"
                      type="text"
                      value={project_budget}
                      onChange={(ev) => setProject_budget(ev.target.value)}
                      placeholder="Amount of money (0.00)"
                    /> */}
              </p>
            </div>
          </div>
          {/* Submit Action  */}
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
const Issues = () => {
  return <div></div>;
};

export const EachProject = () => {
  return (
    <div>
      <Actions />
      <Risks />
      <Issues />
    </div>
  );
};
