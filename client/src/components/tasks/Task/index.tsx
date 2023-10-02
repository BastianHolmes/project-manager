import React from "react";
import { useDrag } from "react-dnd";
import styles from "./Task.module.scss";

const Task = ({ title }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { title: title },
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

export default Task;
