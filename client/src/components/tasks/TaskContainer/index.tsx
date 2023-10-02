import { useDrop } from "react-dnd";
import styles from "./TaskContainer.module.scss";
import { Task } from "../../../types/taskTypes";
import TaskItem from "../TaskItem";

interface TaskContainerProps {
  title: string;
  tasks: Task[];
  onDrop: (title: string) => void;
}

const TaskContainer: React.FC<TaskContainerProps> = ({
  title,
  tasks,
  onDrop,
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    type: "task",
    accept: "task",
    drop: (item: Task) => {
      if (item.title) onDrop(item.title);
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
          tasks.map((item) => <TaskItem key={item.id} title={item.title} />)}
      </div>
    </div>
  );
};

export default TaskContainer;
