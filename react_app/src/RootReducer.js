import { combineReducers } from "redux";
import project from "./ducks/project/reducer";
import action from "./ducks/action/reducer";

const RootReducer = combineReducers({ project, action });
export default RootReducer;
