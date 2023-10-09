import { useState } from "react";
import styles from "./Subtask.module.scss";
import { useDispatch } from "react-redux";
import {
  deleteSubtaskStart,
  doneSubtaskStart,
} from "../../../redux/modules/subtasks/actions";
import { MaterialSymbolsDeleteOutline } from "../IconDelete";

interface SubtaskProps {}

const Subtask: React.FC<SubtaskProps> = ({ item }) => {
  const dispatch = useDispatch();
  const handleDone = () => {
    dispatch(doneSubtaskStart(item.id, item.done));
  };

  const handleDelete = () => {
    dispatch(deleteSubtaskStart(item.id));
  };
  return (
    <div className={styles.subtaskContainer}>
      <div
        className={item.done ? styles.done : styles.subtask}
        onClick={() => handleDone()}
      >
        <p className={styles.title}>{item.title}</p>
      </div>
      <MaterialSymbolsDeleteOutline onClick={() => handleDelete()} />
    </div>
  );
};

export default Subtask;
