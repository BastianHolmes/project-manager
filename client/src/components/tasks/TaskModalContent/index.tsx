import { useDispatch, useSelector } from "react-redux";
import styles from "./TaskModalContent.module.scss";
import {
  createProjectStart,
  getProjects,
} from "../../../redux/modules/projects/actions";
import { useState } from "react";
import { Task } from "../../../types/taskTypes";

interface ModalContentProps {
  onClose: (value: boolean) => void;
  task?: Task;
}
const TaskModalContent: React.FC<ModalContentProps> = ({ onClose, task }) => {
  const initialState = {
    title: "",
  };
  const [{ title }, setState] = useState(initialState);
  const handleBackgroundClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose(false);
    }
    return;
  };

  return (
    <div
      className={styles.background}
      onClick={(e) => handleBackgroundClick(e)}
    >
      <form className={styles.container}>
        <label htmlFor="name" className={styles.name}>
          {task?.title}
        </label>
      </form>
    </div>
  );
};

export default TaskModalContent;
