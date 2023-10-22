import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProjects } from "../../../redux/modules/projects/actions";
import { Project } from "../../../shared/types/types";

export const useProjects = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProjects());
  }, [dispatch]);

  const projects = useSelector(
    (store: { projects: { projects: Project[] } }) =>
      store.projects.projects || []
  );

  return { projects };
};
