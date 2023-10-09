import styles from "./TaskModalContent.module.scss";
import { Task } from "../../../types/taskTypes";
import TaskForm from "../TaskForm";
import TaskSideBar from "../TaskSideBar";
import Dropdown from "../../shared/DropDown";

interface ModalContentProps {
  onClose: (value: boolean) => void;
  task?: Task;
}
const TaskModalContent: React.FC<ModalContentProps> = ({ onClose, task }) => {
  const handleBackgroundClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose(false);
    }
    return;
  };

  if (!task) return;
  return (
    <div
      className={styles.background}
      onClick={(e) => handleBackgroundClick(e)}
    >
      <section className={styles.container}>
        <header className={styles.header}>
          <div className={styles.title}>
            <h4 className={styles.name}>{task?.title}</h4>
          </div>
          <h5 className={styles.status}>{task?.status}</h5>
        </header>
        <div className={styles.main}>
          <TaskForm task={task} />
          <TaskSideBar task={task} />
        </div>
      </section>
    </div>
  );
};

export default TaskModalContent;
