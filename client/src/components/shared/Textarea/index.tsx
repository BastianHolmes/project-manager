import { useState } from "react";
import { Task } from "../../../types/taskTypes";
import styles from "./Textarea.module.scss";

interface TextareaProps {
  task?: Task;
  input: string;
}

const Textarea: React.FC<TextareaProps> = ({ task, input }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(task?.description);
  const handleClick = () => {
    setIsEditing(true);
  };

  const handleInput = () => {
    setIsEditing(false);
    if (task?.description) {
      task.description = "";
      setIsEditing(false);
    }
  };
  return (
    <>
      <label htmlFor={`${input}`}>{input}</label>
      <textarea
        readOnly={!isEditing}
        id={`${input}`}
        className={styles.textarea}
        placeholder="Add a description"
        value={description}
        onClick={() => handleClick()}
        onBlur={() => handleInput()}
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleInput();
          }
        }}
      />
    </>
  );
};

export default Textarea;
