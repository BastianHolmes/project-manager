import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./TaskPage.module.scss";
import { LoadTask } from "../../redux/modules/tasks/actions";
import { useParams } from "react-router-dom";

const TaskPages = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadTask(id));
  }, [dispatch]);
  return (
    <section className={styles.container}>
      <div className={styles.col}>Начало</div>
      <div className={styles.col}>В работе</div>
      <div className={styles.col}>Сделано</div>
    </section>
  );
};

export default TaskPages;
