import React from "react";
import { useState } from "react";

export const ProjectListViewTable = () => {
  const projects = JSON.parse(localStorage.getItem("projects"));
  //   console.log(projects);

  function searchTable(value) {
    const search_value = value.toLowerCase();
    const table_row = document.getElementsByClassName("project_data_details");
    for (let i = 0; i < table_row.length; i++) {
      if (table_row[i].textContent.toLowerCase().includes(search_value)) {
        table_row[i].style.display = null;
      } else {
        table_row[i].style.display = "none";
      }
    }
  }
  return (
    <div>
      <div className="columns is-centered">
        <input
          id="searchTable"
          style={{ width: "600px", margin: "15px" }}
          className="input is-info"
          type="text"
          placeholder="Search Table"
          onChange={(ev) => {
            searchTable(ev.target.value);
          }}
        ></input>
      </div>
      <div className="columns is-centered">
        <table className="table">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Project Description </th>
              <th>Project Start Date</th>
              <th>Project End Date</th>
              <th>Project Budget</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, i) => (
              <tr className="project_data_details" key={i}>
                <td>{project.project_name}</td>
                <td>{project.project_desc}</td>
                <td>{project.project_start_date}</td>
                <td>{project.project_end_date}</td>
                <td>{project.project_budget}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Project Name</th>
              <th>Project Description </th>
              <th>Project Start Date</th>
              <th>Project End Date</th>
              <th>Project Budget</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
