import { types } from "./actions";
const inital_state = { projects: [] };

const project = (state = inital_state, action) => {
  if (action.type == types.GET_PROJECTS) {
    const { projects } = action.payload;
    return { ...state, projects };
  } else if (action.type == types.CREATE_PROJECT) {
    const { new_project } = action.payload;
    const updated_projects = [...state.projects, new_project];
    localStorage.setItem("projects", JSON.stringify(updated_projects));
    return { ...state, projects: updated_projects };
    // return { ...state, projects: [...state.projects, new_project] };
  } else if (action.type == types.DELETE_PROJECT) {
    const { projects, project_id } = action.payload;
    const updated_projects = projects.filter(
      (project) => project.project_id != project_id
    );
    localStorage.setItem("projects", JSON.stringify(updated_projects));
    return { projects: updated_projects };
  } else if (action.type == types.UPDATE_PROJECT) {
    const { projects, project_id, updates } = action.payload;
    console.log(projects, project_id, updates);

    const index = projects
      .map((project) => project.project_id)
      .indexOf(project_id);
    const updated_projects = projects;
    updated_projects[index] = updates;
    console.log(updated_projects);
    // console.log(new_project);
    // const updated_projects = [...new_project];
    // console.log(updated_projects);
    localStorage.setItem("projects", JSON.stringify(updated_projects));
    // console.log({ ...state, projects: updated_projects });
    return { projects: updated_projects };
    // return state;
  } else {
    return state;
  }
};

export default project;
