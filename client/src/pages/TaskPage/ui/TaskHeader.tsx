import styles from "./TaskPage.module.scss";

interface TaskHeader {
  projectTitle: string;
  children: React.ReactNode;
}
export const TaskHeader: React.FC<TaskHeader> = ({
  projectTitle,
  children,
}) => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{projectTitle}</h2>
      {children}
    </header>
  );
};
