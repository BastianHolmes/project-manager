import { combineReducers } from "redux";
import projects from "./modules/projects/reducer";
import tasks from "./modules/tasks/reducer";
import files from "./modules/files/reducer";

const reducer = combineReducers({ projects, tasks, files });

export default reducer;
