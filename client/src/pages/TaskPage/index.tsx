import { useEffect } from "react";
import { GET_TASKS } from "../../redux/actionTypes";
import { useDispatch } from "react-redux";
import styles from "./TaskPage.module.scss";

const TaskPages = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_TASKS });
  });
  return (
    <section className={styles.container}>
      <div className={styles.col}>Начало</div>
      <div className={styles.col}>В работе</div>
      <div className={styles.col}>Сделано</div>
    </section>
  );
};

export default TaskPages;
