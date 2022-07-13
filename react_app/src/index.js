import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

// console.log("Hello I'm working");

const root_element = document.getElementById("root");
const react_root = createRoot(root_element);

react_root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
