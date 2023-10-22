import React from "react";
import { useDrag } from "react-dnd";
import styles from "./Task.module.scss";
import { Task } from "../../../shared/types/types";
import { formatDate } from "../../../shared/helpers/formatDate";

interface TaskItem extends Task {
  item: Task;
  onOpenModal: (item: Task) => void;
}

const TaskItem: React.FC<TaskItem> = ({ item, onOpenModal }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: item.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
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

export default TaskItem;
