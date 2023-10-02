interface Project {
  id: number;
  title: string;
  created_at: string;
}

export function findItem(id: string, projects: Project[]): Project {
  const foundProject = projects.find((project) => project.id.toString() === id);
  if (!foundProject) {
    throw new Error("Project not found");
  }
  return foundProject;
}
