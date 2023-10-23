import { useSelector } from "react-redux";

export const useLoading = () => {
  return useSelector(
    (store: { projects: { loading: boolean } }) => store.projects.loading
  );
};
