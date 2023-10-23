import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Task } from "redux-saga";
import { LoadTaskStart } from "../model";

export const useTasks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadTaskStart());
  }, [dispatch]);

  const tasks = useSelector(
    (store: { tasks: { tasks: Task[] } }) => store.tasks.tasks
  );

  return tasks;
};
