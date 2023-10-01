import { useNavigate } from "react-router-dom";
import styles from "./ProjectItem.module.scss";

interface ProjectItemProps {
  name: string;
  date: string;
  id: string;
}
const ProjectItem: React.FC<ProjectItemProps> = ({ date, name, id }) => {
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`/${id}/tasks`);
  };
  return (
    <li className={styles.item} onClick={() => handleClick(id)}>
      <span className={styles.number}>{id}.</span>
      <h2 className={styles.name}>{name}</h2>
      <span className={styles.number}>{date}</span>
    </li>
  );
};

export default ProjectItem;
