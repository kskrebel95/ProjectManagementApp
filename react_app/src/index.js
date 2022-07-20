import React, { useReducer } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/user";
import projectActionsReducer from "./features/actions";

// Creating store which is used to hold all the states we wmay like to change
const store = configureStore({
  //reducer is a function that takes in the prev value of that state
  // the action youd like carried out and the new value

  reducer: {
    user: userReducer,
    projectactions: projectActionsReducer,
  },
});

const root_element = document.getElementById("root");
const react_root = createRoot(root_element);

react_root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
