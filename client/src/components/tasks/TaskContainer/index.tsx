import { useDrop } from "react-dnd";
import styles from "./TaskContainer.module.scss";
import Task from "../Task";

const TaskContainer = ({ title, tasks, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    type: "task",
    accept: "task",
    drop: (item) => onDrop(item.title),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className={styles.col} ref={drop}>
      {title}
      <div>
        {tasks.length > 0 &&
          tasks.map((item) => <Task key={item.id} title={item.title} />)}
      </div>
    </div>
  );
};

export default TaskContainer;
