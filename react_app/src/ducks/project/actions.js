const CREATE_PROJECT = "project/CREATE_PROJECT";
const UPDATE_PROJECT = "project/UPDATE_PROJECT";
const DELETE_PROJECT = "project/DELETE_PROJECT";
const GET_PROJECTS = "project/GET_PROJECTS";

export const types = {
  CREATE_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  GET_PROJECTS,
};

export const getProjects = ({ dispatch }) => {
  const projects = JSON.parse(localStorage.getItem("projects")) ?? [];
  dispatch({ type: GET_PROJECTS, payload: { projects } });
};

export const createProject = ({ dispatch, new_project }) => {
  dispatch({ type: CREATE_PROJECT, payload: { new_project } });
};

export const deleteProject = ({ dispatch, projects, project_id }) => {
  dispatch({
    type: DELETE_PROJECT,
    payload: { dispatch, projects, project_id },
  });
};

export const updatedProject = ({ dispatch, projects, project_id, updates }) => {
  dispatch({
    type: UPDATE_PROJECT,
    payload: { dispatch, projects, project_id, updates },
  });
};
