import { types } from "./actions";
const inital_state = { actions: [] };
const action = (state = inital_state, action) => {
  if (action.type == types.GET_ACTIONS) {
    const { actions } = action.payload;
    return { ...state, actions };
  } else if (action.type == types.CREATE_ACTION) {
    const { new_action } = action.payload;
    const updated_actions = [...state.actions, new_action];
    localStorage.setItem("actions", JSON.stringify(updated_actions));
    return { ...state, projects: updated_actions };
  } else if (action.type == types.DELETE_ACTION) {
    const { project_id, action_name } = action.payload;
    const updated_actions = [...state.actions].filter((action) => {
      if (
        !(
          Object.values(action).includes(project_id) &&
          Object.values(action).includes(action_name)
        )
      ) {
        return action;
      }
    });
    console.log(updated_actions);
    // localStorage.setItem("actions", JSON.stringify(updated_actions));
    return state;
  } else {
    return state;
  }
};
export default action;
