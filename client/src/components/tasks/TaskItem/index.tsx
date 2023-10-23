import React, { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import styles from "./Task.module.scss";
import { Task } from "../../../shared/types/types";
import { formatDate } from "../../../shared/helpers/formatDate";

interface TaskItemProps {
  item: Task;
  onOpenModal: (item: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ item, onOpenModal }) => {
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

  const [taskItem, setTaskItem] = useState<Task>(item);

  useEffect(() => {
    setTaskItem(item);
  }, [item]);

  return (
    <div
      className={styles.task}
      ref={drag}
      style={{ opacity: isDragging ? 0 : 1 }}
      onClick={() => onOpenModal(taskItem)}
    >
      <h5 className={styles.count}>{taskItem.count}.</h5>
      <div className={styles.header}>
        <h4>{taskItem.title}.</h4>
        <h5>{formatDate(taskItem.created_at || "")}</h5>
      </div>
    </div>
  );
};

export default TaskItem;
