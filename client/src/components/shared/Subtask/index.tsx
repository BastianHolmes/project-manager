import styles from "./Subtask.module.scss";

interface SubtaskProps {
  title: string;
}

const Subtask: React.FC<SubtaskProps> = ({ title }) => {
  return (
    <div className={styles.subtask}>
      <p>{title}</p>
    </div>
  );
};

export default Subtask;
