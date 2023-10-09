import { useState } from "react";
import styles from "./Subtask.module.scss";
import { useDispatch } from "react-redux";
import {
  deleteSubtaskStart,
  doneSubtaskStart,
} from "../../../redux/modules/subtasks/actions";
import { MaterialSymbolsDeleteOutline } from "../IconDelete";

interface SubtaskProps {
  title: string;
  id: number;
}

const Subtask: React.FC<SubtaskProps> = ({ title, id }) => {
  const [isDone, setIsDone] = useState(false);
  const dispatch = useDispatch();
  const handleDone = () => {
    dispatch(doneSubtaskStart(id, title, isDone));
    setIsDone(!isDone);
  };

  const handleDelete = () => {
    dispatch(deleteSubtaskStart(id));
  };
  return (
    <div className={styles.subtaskContainer}>
      <div
        className={isDone ? styles.done : styles.subtask}
        onClick={() => handleDone()}
      >
        <p className={styles.title}>{title}</p>
      </div>
      <MaterialSymbolsDeleteOutline onClick={() => handleDelete()} />
    </div>
  );
};

export default Subtask;
