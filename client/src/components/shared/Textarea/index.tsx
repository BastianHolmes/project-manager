import { Task } from "../../../types/taskTypes";
import styles from "./Textarea.module.scss";

interface TextareaProps {
  task?: Task;
  input: string;
}

const Textarea: React.FC<TextareaProps> = ({ task, input }) => {
  return (
    <>
      <label htmlFor={`${input}`}>{input}</label>
      <textarea
        disabled={!task?.description}
        id={`${input}`}
        className={styles.textarea}
        placeholder="Add a description"
        value={task?.description}
      />
    </>
  );
};

export default Textarea;
