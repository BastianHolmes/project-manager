import { combineReducers } from "redux";
import projects from "./modules/projects/reducer";

const reducer = combineReducers({ projects });

export default reducer;
