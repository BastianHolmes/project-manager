import Dropdown from "../../shared/components/DropDown";
import { daysPassed } from "../../shared/helpers/daysPassed";
import { formatDate } from "../../shared/helpers/formatDate";
import { Task } from "../../shared/types/types";
import styles from "./TaskSideBar.module.scss";

interface TaskSideBarProps {
  task: Task;
}

const TaskSideBar: React.FC<TaskSideBarProps> = ({ task }) => {
  const options = [
    { value: "LOW", label: "LOW" },
    { value: "MEDIUM", label: "MEDIUM" },
    { value: "HIGH", label: "HIGH" },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.date_container}>
        <h4 className={styles.title}>
          Date of <span className={styles.highlight}>creation</span>
        </h4>
        <time className={styles.time}>
          {formatDate(task?.created_at || "")}
        </time>
      </div>
      <div className={styles.date_container}>
        <h4 className={styles.title}>
          Days <span className={styles.highlight}>in work</span>
        </h4>
        <time className={styles.time}>
          {daysPassed(formatDate(task?.created_at || ""))}
        </time>
      </div>
      <div className={styles.date_container}>
        <h4 className={styles.title}>
          Date of <span className={styles.highlight}>deadline</span>
        </h4>
        <time className={styles.time}>{formatDate(task?.due_date || "")}</time>
      </div>
      <Dropdown options={options} task={task} />
    </aside>
  );
};

export default TaskSideBar;
