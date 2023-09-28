import styles from "./ProjectItem.module.scss";

interface ProjectItem {
  name: string;
  date: string;
}
const ProjectItem: React.FC<ProjectItem> = ({ date, name }) => {
  return (
    <li className={styles.item}>
      <h2 className={styles.name}>{name}</h2>
      <span className={styles.date}>{date}</span>
    </li>
  );
};

export default ProjectItem;
