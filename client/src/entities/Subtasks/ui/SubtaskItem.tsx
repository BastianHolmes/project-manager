import { useState } from "react";
import styles from "./Subtask.module.scss";
import { useDispatch } from "react-redux";
import {
  deleteSubtaskStart,
  doneSubtaskStart,
} from "../../../redux/modules/subtasks/actions";
import { MaterialSymbolsDeleteOutline } from "../../../shared/Icons/IconDelete";
import { Subtask } from "../../../shared/types/types";

interface SubtaskProps {
  item: Subtask;
}

export const SubtaskItem: React.FC<SubtaskProps> = ({
  item,
}: SubtaskProps): JSX.Element => {
  const dispatch = useDispatch();
  const handleDone = (): void => {
    if (item.id) {
      dispatch(doneSubtaskStart(item.id, item.done ?? false));
    }
  };

  const handleDelete = (): void => {
    if (item.id) {
      dispatch(deleteSubtaskStart(item.id));
    }
  };

  return (
    <div className={styles.subtaskContainer}>
      <div
        className={item.done ? styles.done : styles.subtask}
        onClick={handleDone}
      >
        <p className={styles.title}>{item.title}</p>
      </div>
      <MaterialSymbolsDeleteOutline onClick={handleDelete} />
    </div>
  );
};
