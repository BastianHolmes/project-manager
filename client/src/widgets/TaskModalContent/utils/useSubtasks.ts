import { useDispatch, useSelector } from "react-redux";
import { Subtask } from "../../../shared/types/types";
import { useEffect } from "react";
import { loadSubtasksStart } from "../model";

export const useSubtasks = (taskId: string) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSubtasksStart(taskId));
  }, [dispatch]);

  const subtasks = useSelector(
    (store: { subtasks: { subtasks: Subtask[] } }) => store.subtasks.subtasks
  );

  return subtasks;
};
