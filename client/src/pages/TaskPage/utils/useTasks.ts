import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadTaskStart } from "../model";
import { Task } from "../../../shared/types/types";

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
