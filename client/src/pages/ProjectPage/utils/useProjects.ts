import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Project } from "../../../shared/types/types";
import { loadProjects } from "../model";

export const useProjects = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProjects());
  }, [dispatch]);

  const projects = useSelector(
    (store: { projects: { projects: Project[] } }) =>
      store.projects.projects || []
  );

  return projects;
};
