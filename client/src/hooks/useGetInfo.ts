import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../redux/modules/projects/actions";
import { loadavg } from "os";
import { LoadTask } from "../redux/modules/tasks/actions";
import { Project } from "../types/projectsTypes";
import { Task } from "../types/taskTypes";

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

  const tasks = useSelector((store: { tasks: Task[] }) => store.tasks || []);

  return { projects, tasks };
};
