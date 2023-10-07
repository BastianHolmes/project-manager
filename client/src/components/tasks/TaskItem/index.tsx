import React from "react";
import { useDrag } from "react-dnd";
import styles from "./Task.module.scss";
import { Task } from "../../../types/taskTypes";

interface TaskItem extends Task {
  item: Task;
  onOpenModal: (item: Task) => void;
}

const TaskItem: React.FC<TaskItem> = ({ item, onOpenModal, number }) => {
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
      <h4>{item.title}</h4>
      <h5>{item.count}</h5>
    </div>
  );
};

export default TaskItem;
