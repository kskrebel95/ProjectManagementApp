import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateProject } from "./CreateProject";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CreateProject />} />
        {/* <Route path="/calculator" element={<Calculator />} /> */}
      </Routes>
    </div>
  );
};
