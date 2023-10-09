import React, { useState } from "react";
import styles from "./DropDown.module.scss";
import { useDispatch } from "react-redux";
import {
  changeTaskPriorityError,
  changeTaskPriorityStart,
} from "../../../redux/modules/tasks/actions";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  onSelect: (value: string) => void;
  id: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, id }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option.value);
    console.log(option.value);
    dispatch(changeTaskPriorityStart(id, option.value));
  };

  return (
    <div className="dropdown">
      <button
        className={styles.dropdown_toggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : "HIGH"}
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
