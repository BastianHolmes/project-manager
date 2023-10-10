import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../redux/modules/projects/actions";
import { LoadTask } from "../redux/modules/tasks/actions";
import { Project } from "../types/types";
import { Task } from "../types/types";

export const useGetInfo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
    dispatch(LoadTask());
  }, [dispatch]);

  const projects = useSelector(
    (store: { projects: { projects: Project[] } }) =>
      store.projects.projects || []
  );

  const tasks = useSelector(
    (store: { tasks: { tasks: Task[] } }) => store.tasks.tasks || []
  );

  return { projects, tasks };
};
