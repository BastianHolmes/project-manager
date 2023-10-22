import styles from "./Input.module.scss";
import React, { ChangeEvent, KeyboardEvent, RefObject } from "react";

interface InputProps {
  title: string;
  setTitle: (value: string) => void;
  handleInput: () => void;
  ref?: RefObject<HTMLInputElement>;
  width?: string;
}

const Input: React.FC<InputProps> = ({
  ref,
  title,
  setTitle,
  handleInput,
  width = "100%",
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBlur = () => {
    handleInput();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleInput();
    }
  };

  return (
    <input
      autoFocus
      className={styles.input}
      style={{ width: `${width}` }}
      ref={ref}
      maxLength={30}
      type="text"
      value={title}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Input;
