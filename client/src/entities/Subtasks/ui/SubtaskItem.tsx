import styles from "./Subtask.module.scss";
import { useDispatch } from "react-redux";
import { MaterialSymbolsDeleteOutline } from "../../../shared/Icons/IconDelete";
import { Subtask } from "../../../shared/types/types";
import { deleteSubtaskStart } from "../../../features/Subtasks/delete-subtask/model";
import { doneSubtaskStart } from "../../../features/Subtasks/update-subtask/model";

interface SubtaskProps {
  item: Subtask;
}

export const SubtaskItem: React.FC<SubtaskProps> = ({ item }: SubtaskProps) => {
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
