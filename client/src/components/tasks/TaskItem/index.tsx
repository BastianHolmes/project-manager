import React from "react";
import { useDrag } from "react-dnd";
import styles from "./Task.module.scss";
import { Task } from "../../../types/taskTypes";

interface TaskItem extends Task {
  onOpenModal: () => void;
}

const TaskItem: React.FC<TaskItem> = ({ title, id, onOpenModal }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      className={styles.task}
      ref={drag}
      style={{ opacity: isDragging ? 0 : 1 }}
      onClick={onOpenModal}
    >
      <h4>{title}</h4>
    </div>
  );
};

export default TaskItem;
