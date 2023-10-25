import { combineReducers } from "redux";
import projects from "../features/Projects/reducer";
import tasks from "../features/Tasks/reducer";
import files from "./modules/files/reducer";
import subtasks from "../features/Subtasks/reducer";
import comments from "./modules/comments/reducer";

const reducer = combineReducers({ projects, tasks, files, subtasks, comments });

export default reducer;
