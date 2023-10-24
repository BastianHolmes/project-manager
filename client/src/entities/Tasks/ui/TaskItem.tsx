import styles from "./Task.module.scss";
import { useDrag } from "react-dnd";
import { Task } from "../../../shared/types/types";
import { formatDate } from "../../../shared/helpers/formatDate";

interface TaskItemProps {
  item: Task;
  onOpenModal: (item: Task) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ item, onOpenModal }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "task",
      item: { id: item.id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [item.id]
  );

  return (
    <div
      className={styles.task}
      ref={drag}
      style={{ opacity: isDragging ? 0 : 1 }}
      onClick={() => onOpenModal(item)}
    >
      <h5 className={styles.count}>{item.count}.</h5>
      <div className={styles.header}>
        <h4>{item.title}.</h4>
        <h5>{formatDate(item.created_at || "")}</h5>
      </div>
    </div>
  );
};
