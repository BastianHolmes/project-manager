import { daysPassed } from "../../../helpers/daysPassed";
import { formatDate } from "../../../helpers/formatDate";
import { Task } from "../../../types/taskTypes";
import styles from "./TaskSideBar.module.scss";

interface TaskSideBarProps {
  task?: Task;
}

const TaskSideBar: React.FC<TaskSideBarProps> = ({ task }) => {
  return (
    <aside className={styles.sidebar}>
        <div className={styles.date_container}>
        <h4 className={styles.title}>
        Date of <span className={styles.highlight}>creation</span>
      </h4>
      <time className={styles.time}>{formatDate(task?.created_at || "")}</time>
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
    </aside>
  );
};

export default TaskSideBar;