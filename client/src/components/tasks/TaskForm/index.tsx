import { useDispatch } from "react-redux";
import { Task } from "../../../types/taskTypes";
import MaterialSymbolsAddBoxSharp from "../../shared/Icon";
import Textarea from "../../shared/Textarea";
import FileUploader from "../FileUploader";
import styles from "./TaskForm.module.scss";
import { createSubTaskStart } from "../../../redux/modules/subtasks/actions";
import { useState, useRef } from "react";
import Input from "../../shared/Input";

interface ModalContentProps {
  task: Task;
}

interface InputRefProps extends React.RefObject<HTMLInputElement> {
  current: HTMLInputElement | null;
}

const TaskForm: React.FC<ModalContentProps> = ({ task }: ModalContentProps) => {
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch();
  const id = Number(crypto.randomUUID());
  const inputRef: InputRefProps = useRef<HTMLInputElement>(null);
  const [showInput, setShowInput] = useState<boolean>(false);

  const handleCreateSubtask = () => {
    if (title.length > 2) {
      dispatch(createSubTaskStart(id, task?.id, title));
    }
    setTitle("");
    setShowInput(false);
  };

  const handleEditing = () => {
    setShowInput(true);
    inputRef.current?.focus();
  };

  return (
    <div className={styles.formContainer}>
      <Textarea task={task} input="Description" />
      <h4>Attachments</h4>
      <FileUploader taskId={Number(task?.id)} />
      <h4>New subtasks</h4>
      <div>
        {showInput && (
          <Input
            ref={inputRef}
            title={title}
            setTitle={setTitle}
            handleInput={handleCreateSubtask}
            width="50%"
          />
        )}
        {!showInput && (
          <MaterialSymbolsAddBoxSharp
            className={styles.icon}
            onClick={() => handleEditing()}
          />
        )}
      </div>
    </div>
  );
};

export default TaskForm;
