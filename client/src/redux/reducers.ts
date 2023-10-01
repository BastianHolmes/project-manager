import { combineReducers } from "redux";
import projects from "./modules/projects/reducer";
import tasks from "./modules/tasks/reducer";

const reducer = combineReducers({ projects, tasks });

export default reducer;
