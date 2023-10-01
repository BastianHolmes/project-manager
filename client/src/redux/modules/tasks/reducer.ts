import { LOAD_TASKS_ERROR, LOAD_TASKS_START, LOAD_TASKS_SUCCESS } from "../../actionTypes";



const initialState = {
    title: "",
    description: "",
    created_at: "",
    time_spent: "",
    due_date: "",
    priority: "MEDIUM",
    attached_files : [],
    status: "TODO",
    project_id: "",
    subtasks: [],
  };


const tasks = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_TASKS_START:
            return {
                ...state,
                loading: true,
            };
        case LOAD_TASKS_SUCCESS:
            return {
                ...state,
                loading: false,
                tasks: payload,
            };
        case LOAD_TASKS_ERROR:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
}