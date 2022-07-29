import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GenerateTable } from "./GenerateTable";

export const ProjectListView = () => {
  const { projects } = useSelector((state) => state.project);
  const [filtered_projects, setFilteredProjects] = useState([]);
  console.log(projects);

  useEffect(() => {
    console.log(projects);
    setFilteredProjects(projects);
  }, []);
  //   console.log(projects);
  const headings = [
    { heading: "Project ID" },
    { heading: "Project Name" },
    { heading: "Project Description" },
    { heading: "Project Start Date" },
    { heading: "Project End Date" },
    { heading: "Project Budget ($)" },
  ];

  const searchTable = (value) => {
    const search_value = value.toLowerCase();
    console.log(typeof search_value);

    // filtered_projects.forEach((project) => {
    //   console.log(project);
    // });

    const filter_projects = filtered_projects.filter((project) => {
      if (
        project.project_id
          .toString()
          .toLowerCase()
          .includes(search_value.toString().toLowerCase())
      ) {
        return project;
      }
    });

    console.log(filter_projects);
    // const table_row = document.getElementsByClassName("project_data_details");
    // for (let i = 0; i < table_row.length; i++) {
    //   if (table_row[i].textContent.toLowerCase().includes(search_value)) {
    //     table_row[i].style.display = null;
    //   } else {
    //     table_row[i].style.display = "none";
    //   }
    // }
  };
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
        <GenerateTable headings={headings} items={filtered_projects} />
        {/* <table className="table">
          <thead>
            <tr>
              <th>Project ID</th>
              <th>Project Name</th>
              <th>Project Description </th>
              <th>Project Start Date</th>
              <th>Project End Date</th>
              <th>Project Budget</th>
            </tr>
          </thead> */}

        {/* <tbody>
            {projects.map((project, i) => (
              <tr className="project_data_details" key={project.project_id}>
                <td>{project.project_id}</td>
                <td>{project.project_name}</td>
                <td>{project.project_desc}</td>
                <td>{project.project_start_date}</td>
                <td>{project.project_end_date}</td>
                <td>{project.project_budget}</td>
              </tr>
            ))}
          </tbody> */}
        {/* </table> */}
      </div>
      <div className="columns is-centered">
        <div className="buttons">
          <button className="button is-info">
            <Link to="/">Home</Link>
          </button>
          <button className="button is-primary">
            <Link to="/projects">View Project Grid</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
