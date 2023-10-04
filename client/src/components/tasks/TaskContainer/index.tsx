import { useDrop } from "react-dnd";
import styles from "./TaskContainer.module.scss";
import { Task } from "../../../types/taskTypes";
import TaskItem from "../TaskItem";

interface TaskContainerProps {
  title: string;
  tasks: Task[];
  status: string;
  onDrop: (title: string, status: string) => void;
}

const TaskContainer: React.FC<TaskContainerProps> = ({
  title,
  tasks,
  onDrop,
  status,
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    type: "task",
    accept: "task",
    drop: (item: Task) => {
      if (item.id) onDrop(item.id, status);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className={styles.col} ref={drop}>
      {title}
      <div>
        {tasks.length > 0 &&
          tasks.map((item) => (
            <TaskItem key={item.id} title={item.title} id={item.id} />
          ))}
      </div>
    </div>
  );
};

export default TaskContainer;
