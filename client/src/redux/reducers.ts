import { combineReducers } from "redux";
import projects from "./modules/projects/reducer";
import tasks from "./modules/tasks/reducer";
import files from "./modules/files/reducer";
import subtasks from "./modules/subtasks/reducer";
import comments from "./modules/comments/reducer";

const reducer = combineReducers({ projects, tasks, files, subtasks, comments });

export default reducer;
