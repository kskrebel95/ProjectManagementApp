import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateProject } from "./CreateProject";
import { Project } from "./Projects";
import { EachProject } from "./EachProject";
import { ReduxPractice } from "./components/ReduxPractice";

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
        <Route path="/eachproject/:projectname" element={<EachProject />} />
        <Route path="/reduxpractice" element={<ReduxPractice />} />
      </Routes>
    </div>
  );
};
