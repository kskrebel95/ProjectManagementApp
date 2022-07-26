import { combineReducers } from "redux";
import project from "./ducks/project/reducer";

const RootReducer = combineReducers({ project });
export default RootReducer;
