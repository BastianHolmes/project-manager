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
      <h4 className={styles.title}>
        Дата <span className={styles.highlight}>создания</span>
      </h4>
      <time className={styles.time}>{formatDate(task?.created_at || "")}</time>
      <h4 className={styles.title}>
        Дней <span className={styles.highlight}>в работе</span>
      </h4>
      <time className={styles.time}>
        {daysPassed(formatDate(task?.created_at || ""))}
      </time>
      <h4 className={styles.title}>
        Дата <span className={styles.highlight}>окончания</span>
      </h4>
      <time className={styles.time}>{formatDate(task?.due_date || "")}</time>
    </aside>
  );
};

export default TaskSideBar;
