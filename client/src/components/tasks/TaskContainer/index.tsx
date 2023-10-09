import { useDrop } from "react-dnd";
import styles from "./TaskContainer.module.scss";
import { Task } from "../../../types/taskTypes";
import TaskItem from "../TaskItem";
import Button from "../../shared/Button";
import { useState } from "react";
import { createTaskStart } from "../../../redux/modules/tasks/actions";
import { useDispatch } from "react-redux";
import Input from "../../shared/Input";

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
  const taskId = Math.floor(Math.random() * 100);

  const handleCreateTask = () => {
    setIsEditing(true);
  };

  const handleInput = () => {
    setIsEditing(false);
    if (taskTitle.length > 2) {
      dispatch(
        createTaskStart(taskId.toString(), count, taskTitle, status, project_id)
      );
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
            <TaskItem key={item.id} item={item} onOpenModal={onOpenModal} />
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
