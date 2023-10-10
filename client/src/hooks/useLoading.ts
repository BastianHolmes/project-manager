import { useSelector } from "react-redux";
import { Project } from "../types/types";

export const useLoading = () => {
  return useSelector(
    (store: { projects: { loading: Project[] } }) => store.projects.loading
  );
};
