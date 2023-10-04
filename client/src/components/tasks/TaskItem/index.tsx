import React from "react";
import { useDrag } from "react-dnd";
import styles from "./Task.module.scss";
import { Task } from "../../../types/taskTypes";

const TaskItem: React.FC<Task> = ({ title, id }) => {
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
      style={{ color: isDragging ? "red" : "currentcolor" }}
      ref={drag}
    >
      {title}
    </div>
  );
};

export default TaskItem;
