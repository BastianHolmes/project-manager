import { useDispatch, useSelector } from "react-redux";
import MaterialSymbolsAddBoxSharp from "../../shared/Icons/IconAdd";
import Textarea from "../../shared/Textarea";
import FileUploader from "../FileUploader";
import styles from "./TaskForm.module.scss";
import { createSubTaskStart } from "../../../redux/modules/subtasks/actions";
import { useState, useRef } from "react";
import Input from "../../shared/Input";
import SubtaskItem from "../../shared/Subtask";
import Loader from "../../shared/Loader";
import { Subtask } from "../../../types/types";

interface ModalContentProps {
  task: Subtask;
}

interface InputRefProps extends React.RefObject<HTMLInputElement> {
  current: HTMLInputElement | null;
}

const TaskForm: React.FC<ModalContentProps> = ({
  task,
}: ModalContentProps): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const subtasks: Subtask[] = useSelector(
    (state: any) => state.subtasks.subtasks
  );
  const dispatch = useDispatch();
  const id: string = crypto.randomUUID();
  const inputRef: InputRefProps = useRef<HTMLInputElement>(null);
  const [showInput, setShowInput] = useState<boolean>(false);

  const handleCreateSubtask = (): void => {
    if (title.length > 2 && task?.id) {
      dispatch(createSubTaskStart(id, task?.id, title));
    }

    setTitle("");
    setShowInput(false);
  };

  const handleEditing = (): void => {
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
        <div className={styles.grid_container}>
          {Array.isArray(subtasks) ? (
            subtasks.map((item: Subtask, index: number) => (
              <div key={index} className={styles.grid_item}>
                <SubtaskItem item={item} />
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
