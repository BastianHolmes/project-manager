import { useDrop } from "react-dnd";
import styles from "./TaskContainer.module.scss";
import { Task } from "../../../types/taskTypes";
import TaskItem from "../TaskItem";

interface TaskContainerProps {
  title: string;
  tasks: Task[];
  status: string;
  onDrop: (title: string, status: string) => void;
  onOpenModal: (item: Task) => void;
}

const TaskContainer: React.FC<TaskContainerProps> = ({
  title,
  tasks,
  onDrop,
  status,
  onOpenModal,
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
      <h3 className={styles.title}>{title}</h3>
      <div>
        {tasks.length > 0 &&
          tasks.map((item) => (
            <TaskItem key={item.id} item={item} onOpenModal={onOpenModal} />
          ))}
      </div>
    </div>
  );
};

export default TaskContainer;
