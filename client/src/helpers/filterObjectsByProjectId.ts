import { Task } from "../types/taskTypes";

export function filterObjectsByProjectId(
  inputArray: Task[],
  projectId: string
) {
  return inputArray.filter((obj) => String(obj.project_id) === projectId);
}
