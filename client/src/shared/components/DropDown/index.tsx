import React, { useState } from "react";
import styles from "./DropDown.module.scss";
import { useDispatch } from "react-redux";
import { Task } from "../../types/types";
import { useTasks } from "../../../pages/TaskPage/utils/useTasks";
import { changeTaskPriorityStart } from "../../../features/Tasks/change-priority-task/model";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  task: Task;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  task,
}: DropdownProps) => {
  const tasks = useTasks();
  const priority = tasks.find((t: Task) => t.id === task.id)?.priority;
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleOptionClick = (option: Option): void => {
    setIsOpen(false);
    if (task.id !== undefined) {
      dispatch(changeTaskPriorityStart(task.id, option.value));
    }
  };

  return (
    <div className="dropdown">
      <button
        className={styles.dropdown_toggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        {priority}
      </button>
      {isOpen && (
        <div className={styles.dropdown_menu}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.dropdown_item}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
