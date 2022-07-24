import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateProject } from "./CreateProject";
import { ProjectListViewGrid } from "./ProjectListViewGrid";
import { ProjectListViewTable } from "./ProjectListViewTable";
import { EachProjectDetialsList } from "./EachProjectDetialsList";
import { ReduxPractice } from "./components/ReduxPractice";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CreateProject />} />
        <Route
          path="/projects"
          element={
            <ProjectListViewGrid
              projects={JSON.parse(localStorage.getItem("projects"))}
            />
          }
        />
        <Route path="/projects-table" element={<ProjectListViewTable />} />
        <Route
          path="/eachproject/:projectname"
          element={<EachProjectDetialsList />}
        />
        <Route path="/reduxpractice" element={<ReduxPractice />} />
      </Routes>
    </div>
  );
};
