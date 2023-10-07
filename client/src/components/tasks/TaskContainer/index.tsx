import { useDrop } from "react-dnd";
import styles from "./TaskContainer.module.scss";
import { Task } from "../../../types/taskTypes";
import TaskItem from "../TaskItem";
import Button from "../../shared/Button";
import { useState } from "react";
import {
  createTaskStart,
  setTasks,
} from "../../../redux/modules/tasks/actions";
import { useDispatch } from "react-redux";
import { useGetInfo } from "../../../hooks/useGetInfo";

interface TaskContainerProps {
  title: string;
  tasks: Task[];
  project_id: number;
  status: string;
  onDrop: (title: string, status: string) => void;
  onOpenModal: (item: Task) => void;
}

const TaskContainer: React.FC<TaskContainerProps> = ({
  project_id,
  title,
  tasks,
  onDrop,
  status,
  onOpenModal,
}) => {
  const taskId = Math.floor(Math.random() * 100);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const handleCreateTask = () => {
    setIsEditing(true);
  };
  const [{ isOver }, drop] = useDrop(() => ({
    type: "task",
    accept: "task",
    drop: (item: Task) => {
      if (taskCount < 6 && item.id) onDrop(item.id, status);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const [taskCount, setTaskCount] = useState(tasks.length);
  console.log(taskCount);
  return (
    <div className={styles.col} ref={drop}>
      <h3 className={styles.title}>{title}</h3>
      <div>
        {tasks.length > 0 &&
          tasks.map((item) => (
            <TaskItem key={item.id} item={item} onOpenModal={onOpenModal} />
          ))}
        {isEditing ? (
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            type="text"
            className={styles.input}
            autoFocus
            onBlur={() => {
              setIsEditing(false);
              if (taskTitle.length > 2) {
                dispatch(
                  createTaskStart(taskId, taskTitle, status, project_id)
                );
                setTaskCount(taskCount + 1);
              }
              setTaskTitle("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setIsEditing(false);
                if (taskTitle.length > 2) {
                  dispatch(
                    createTaskStart(taskId, taskTitle, status, project_id)
                  );
                  setTaskCount(taskCount + 1);
                }
                setTaskTitle("");
              }
            }}
          />
        ) : taskCount < 6 ? (
          <Button onClick={handleCreateTask}>New task</Button>
        ) : null}
      </div>
    </div>
  );
};

export default TaskContainer;
