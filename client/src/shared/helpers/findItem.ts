import { Project } from "../types/types";
import { Task } from "../types/types";

export function findItem(
  id: string,
  items: Project[] | Task[] | undefined
): Project | Task | undefined {
  const foundItem = items?.find((item) => item?.id?.toString() === id);
  if (!foundItem) {
    console.error("Item not found");
  }
  return foundItem;
}
