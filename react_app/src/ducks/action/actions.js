const CREATE_ACTION = "project/CREATE_ACTION";
const UPDATE_ACTION = "project/UPDATE_ACTION";
const DELETE_ACTION = "project/DELETE_ACTION";
const GET_ACTIONS = "project/GET_ACTIONS";

export const types = {
  CREATE_ACTION,
  UPDATE_ACTION,
  DELETE_ACTION,
  GET_ACTIONS,
};

export const getActions = ({ dispatch }) => {
  const actions = JSON.parse(localStorage.getItem("actions")) ?? [];
  dispatch({ type: GET_ACTIONS, payload: { actions } });
};

export const createAction = ({ dispatch, actions, new_action }) => {
  dispatch({ type: CREATE_ACTION, payload: { actions, new_action } });
};

export const deleteAction = ({ dispatch, project_id, action_name }) => {
  dispatch({
    type: DELETE_ACTION,
    payload: { dispatch, project_id, action_name },
  });
};
