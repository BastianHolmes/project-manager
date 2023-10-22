import { Task } from "../types/types";

export function filterObjectsByProjectId(
  inputArray: Task[],
  projectId: string
) {
  return inputArray.filter((obj) => String(obj.project_id) === projectId);
}
