import React, { useState, useRef, useEffect } from "react";
import styles from "./TaskSearch.module.scss";
import TaskItem from "../TaskItem";
import { Task } from "../../../types/taskTypes";

interface Props {
  tasks: Task[];
  onOpenModal: (item: Task) => void;
}

const TaskSearch: React.FC<Props> = ({ tasks, onOpenModal }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Task[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const results = tasks.filter((task) => {
      if (task.title && task.count) {
        const titleMatch = task.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const idMatch = task.count.toString().includes(searchTerm);
        return titleMatch || idMatch;
      }
    });

    setSearchResults(results);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <div className={styles.search} ref={searchRef}>
      <label htmlFor="search" className={styles.label}>
        Search for <span className={styles.highlight}>task!</span>
      </label>
      <input
        name="search"
        className={styles.input}
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        onFocus={handleFocus}
        placeholder="Search tasks"
      />

      {isFocused && (
        <div
          className={styles.resultsContainer}
          onClick={() => setIsFocused(false)}
        >
          <ul>
            {searchResults.map((task) => (
              <TaskItem
                key={task.count}
                item={task}
                onOpenModal={onOpenModal}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskSearch;
