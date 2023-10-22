import { useDrop } from "react-dnd";
import styles from "./TaskContainer.module.scss";
import { Task } from "../../../shared/types/types";
import TaskItem from "../TaskItem";
import Button from "../../../shared/components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../../shared/components/Input";
import { createTaskStart } from "../../../features/Tasks/create-task/model";

interface TaskContainerProps {
  count: number;
  setCount: (value: number) => void;
  tasks: Task[];
  project_id: number;
  status: string;
  index: number;
  onDrop: (title: string, status: string, taskNum: number) => void;
  onOpenModal: (item: Task) => void;
}

const TaskContainer: React.FC<TaskContainerProps> = ({
  setCount,
  count,
  project_id,
  tasks,
  onDrop,
  status,
  onOpenModal,
  index,
}) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");

  const handleCreateTask = () => {
    setIsEditing(true);
  };

  const handleInput = () => {
    setIsEditing(false);
    if (taskTitle.length > 2) {
      dispatch(createTaskStart(count, taskTitle, status, project_id));
      setCount(count + 1);
    }
    setTaskTitle("");
  };

  const [{ isOver }, drop] = useDrop(() => ({
    type: "task",
    accept: "task",
    drop: (item: Task) => {
      if (item.id) onDrop(item.id, status, index);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  return (
    <div className={styles.col} ref={drop}>
      <h3 className={styles.title}>{status}</h3>
      <div>
        {tasks.length > 0 &&
          tasks.map((item) => (
            <TaskItem key={item.count} item={item} onOpenModal={onOpenModal} />
          ))}
        {isEditing ? (
          <Input
            title={taskTitle}
            setTitle={setTaskTitle}
            handleInput={handleInput}
          />
        ) : tasks.length < 6 ? (
          <Button onClick={handleCreateTask}>New task</Button>
        ) : null}
      </div>
    </div>
  );
};

export default TaskContainer;
