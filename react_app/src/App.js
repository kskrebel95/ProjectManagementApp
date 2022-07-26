import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePageMenu } from "./HomePageMenu";
import { CreateProject } from "./CreateProject";
import { DeleteProject } from "./DeleteProject";
import { UpdateProject } from "./UpdateProject";
import { ProjectGridView } from "./ProjectGridView";
import { ProjectListView } from "./ProjectListView";
import { EachProjectDetialsList } from "./EachProjectDetialsList";
import { Actions } from "./Actions";
import { ReduxPractice } from "./components/ReduxPractice";
import { getProjects } from "./ducks/project/actions";
import { useDispatch, useSelector } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("use effect");
    getProjects({ dispatch });
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePageMenu />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/delete-project" element={<DeleteProject />} />
        <Route path="/update-project" element={<UpdateProject />} />

        <Route path="/projects" element={<ProjectGridView />} />
        <Route path="/projects-table" element={<ProjectListView />} />
        <Route
          path="/eachproject/:project_name/:project_id"
          element={<Actions />}
        />
        <Route path="/reduxpractice" element={<ReduxPractice />} />
      </Routes>
    </div>
  );
};
