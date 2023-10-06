import { Project } from "../types/projectsTypes";

export function findItem(id: string, projects: Project[]): Project | undefined {
  const foundProject = projects.find((project) => project.id.toString() === id);
  if (!foundProject) {
    console.error("Project not found");
  }
  return foundProject;
}
