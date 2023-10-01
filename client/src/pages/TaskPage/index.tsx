import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TaskPage.module.scss";
import { LoadTask } from "../../redux/modules/tasks/actions";
import { useParams } from "react-router-dom";
import { getObjectById } from "../../helpers/findIndex";

const TaskPages = () => {
  const { id } = useParams();
  const projects = useSelector((store) => store.projects);
  const projectTitle = getObjectById(id, projects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadTask(id));
  }, [dispatch]);
  return (
    <>
      <h2 className={styles.title}>{projectTitle}</h2>
      <section className={styles.container}>
        <div className={styles.col}>Начало</div>
        <div className={styles.col}>В работе</div>
        <div className={styles.col}>Сделано</div>
      </section>
    </>
  );
};

export default TaskPages;
