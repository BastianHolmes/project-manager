import { useDrop } from "react-dnd";
import styles from "./TaskContainer.module.scss";
import { Task } from "../../shared/types/types";
import { TaskItem } from "../../entities/Tasks";
import Button from "../../shared/components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../shared/components/Input";
import { createTaskStart } from "../../features/Tasks/create-task/model";
import { changeTaskStatusStart } from "../../features/Tasks/change-status-task/model";

interface TaskContainerProps {
  count: number;
  setCount: (value: number) => void;
  tasks: Task[];
  project_id: number;
  status: string;
  index: number;
  onOpenModal: (item: Task) => void;
}

const TaskContainer: React.FC<TaskContainerProps> = ({
  setCount,
  count,
  project_id,
  tasks,
  status,
  onOpenModal,
  index,
}) => {
  console.log(tasks);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const handleCreateTask = () => {
    setIsEditing(true);
  };

  const Drop = (id: string, status: string, taskNum: number) => {
    dispatch(changeTaskStatusStart(id, status, taskNum));
  };

  const handleInput = () => {
    setIsEditing(false);
    if (taskTitle?.length > 2) {
      dispatch(createTaskStart(count, taskTitle, status, project_id));
      setCount(count + 1);
    }
    setTaskTitle("");
  };

  const [{ isOver }, drop] = useDrop(() => ({
    type: "task",
    accept: "task",
    drop: (item: Task) => {
      console.log(item);
      if (item.id) Drop(item.id ?? "", status, index);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  return (
    <div className={styles.col} ref={drop}>
      <h3 className={styles.title}>{status}</h3>
      <div>
        {tasks?.length > 0 &&
          tasks.map((item) => (
            <TaskItem key={item.count} item={item} onOpenModal={onOpenModal} />
          ))}
        {isEditing ? (
          <Input
            title={taskTitle}
            setTitle={setTaskTitle}
            handleInput={handleInput}
          />
        ) : tasks?.length < 6 ? (
          <Button onClick={handleCreateTask}>New task</Button>
        ) : null}
      </div>
    </div>
  );
};

export default TaskContainer;
