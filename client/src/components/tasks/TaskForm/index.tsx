import { Task } from "../../../types/taskTypes";
import MaterialSymbolsAddBoxSharp from "../../shared/Icon";
import Textarea from "../../shared/Textarea";
import styles from "./TaskForm.module.scss";
interface ModalContentProps {
  task?: Task;
}

const TaskForm: React.FC<ModalContentProps> = ({ task }) => {
  return (
    <div className={styles.formContainer}>
      <Textarea task={task} input="Description" />
      <Textarea task={task} input="Attachments" />
      <h3>New subtasks</h3>
      <MaterialSymbolsAddBoxSharp className={styles.icon} />
    </div>
  );
};

export default TaskForm;
