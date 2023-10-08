import { useState } from "react";
import { Task } from "../../../types/taskTypes";
import styles from "./Textarea.module.scss";
import { useDispatch } from "react-redux";
import { addDescriptionTaskStart } from "../../../redux/modules/tasks/actions";

interface TextareaProps {
  task?: Task;
  input: string;
}

const Textarea: React.FC<TextareaProps> = ({ task, input }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(task?.description);
  const handleClick = () => {
    setIsEditing(true);
  };

  const handleInput = () => {
    setIsEditing(false);
    dispatch(addDescriptionTaskStart(task?.id, description));
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
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
        onChange={handleChange}
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
