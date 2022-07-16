import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateProject } from "./CreateProject";
import { Project } from "./Projects";
import { EachProject } from "./EachProject";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CreateProject />} />
        <Route
          path="/projects"
          element={
            <Project projects={JSON.parse(localStorage.getItem("projects"))} />
          }
        />
        <Route path="/eachproject" element={<EachProject />} />
        {/* <Route path="/calculator" element={<Calculator />} /> */}
      </Routes>
    </div>
  );
};
