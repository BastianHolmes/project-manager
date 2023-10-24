import styles from "./ProjectList.module.scss";
import { ProjectItem } from "../../entities/Projects";
import { formatDate } from "../../shared/helpers/formatDate";
import { Project } from "../../shared/types/types";

interface ProjectListProps {
  indexOfFirstProject: number;
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({
  indexOfFirstProject,
  projects,
}) => {
  return (
    <ul className={styles.project_list}>
      {projects
        .sort((a: Project, b: Project) => {
          return Number(a.id) - Number(b.id);
        })
        .map((item: Project, index: number) => (
          <ProjectItem
            number={(indexOfFirstProject + index + 1).toString()}
            key={item.id}
            name={item.title || ""}
            id={item.id ? item.id.toString() : ""}
            date={item.created_at ? formatDate(item.created_at.toString()) : ""}
          />
        ))}
    </ul>
  );
};

export default ProjectList;
