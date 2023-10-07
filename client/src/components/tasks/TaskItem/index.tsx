import React from "react";
import { useDrag } from "react-dnd";
import styles from "./Task.module.scss";
import { Task } from "../../../types/taskTypes";

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
        <h5>Сделано 5 из 6</h5>
      </div>
    </div>
  );
};

export default TaskItem;
