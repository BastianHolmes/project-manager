import { useEffect } from "react";
import { GET_TASKS } from "../../redux/constants";
import { useDispatch } from "react-redux";

const TaskPages = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_TASKS });
  });
  return <div>TaskPages</div>;
};

export default TaskPages;
