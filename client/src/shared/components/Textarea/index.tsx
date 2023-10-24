import { useEffect, useState } from "react";
import { Task } from "../../types/types";
import styles from "./Textarea.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addDescriptionTaskStart } from "../../../features/Tasks/add-description-task/model";

interface TextareaProps {
  task?: Task;
  input: string;
}

const Textarea: React.FC<TextareaProps> = ({ task, input }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.tasks.tasks);

  const selectedTask =
    task && task.id && tasks
      ? tasks.find((t: Task) => t.id === task.id)
      : undefined;

  const handleInput = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (task?.id && e.target.value !== "") {
      dispatch(addDescriptionTaskStart(task?.id, e.target.value));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (task?.id && e.target.value !== "") {
      dispatch(addDescriptionTaskStart(task?.id, e.target.value));
    }
  };

  return (
    <>
      <label htmlFor={`${input}`}>{input}</label>
      <textarea
        rows={6}
        id={`${input}`}
        className={styles.textarea}
        placeholder="Add a description"
        value={selectedTask?.description}
        onBlur={(e) => handleInput(e)}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default Textarea;
