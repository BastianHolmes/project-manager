import styles from "./ProjectItem.module.scss";

interface ProjectItemProps {
  name: string;
  date: string;
  id: string;
}
const ProjectItem: React.FC<ProjectItemProps> = ({ date, name, id }) => {
  return (
    <li className={styles.item}>
      <span className={styles.number}>{id}.</span>
      <h2 className={styles.name}>{name}</h2>
      <span className={styles.number}>{date}</span>
    </li>
  );
};

export default ProjectItem;
