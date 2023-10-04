import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TaskPage.module.scss";
import { LoadTask, changeTaskStatus } from "../../redux/modules/tasks/actions";
import { useParams } from "react-router-dom";
import { findItem } from "../../helpers/findItem";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskContainer from "../../components/tasks/TaskContainer";
import { Task } from "../../types/taskTypes";
import { Project } from "../../types/projectsTypes";

const TaskPage = () => {
  const selectProjects = (store: { projects: Project[] }) => store.projects;
  const selectTasks = (store: { tasks: Task[] }) => store.tasks;
  const { id = "" } = useParams();
  const projects = useSelector(selectProjects);
  const tasks = useSelector(selectTasks);
  const currentProject: Project | undefined = findItem(id, projects);
  const projectTitle = currentProject?.title;
  const renderQueryTask: Task[] =
    tasks && Array.isArray(tasks)
      ? tasks.filter(
          (task: Task) =>
            task.project_id === currentProject?.id && task.status === "QUEUE"
        )
      : [];
  const renderDevelopmentTask: Task[] =
    tasks && Array.isArray(tasks)
      ? tasks.filter(
          (task: Task) =>
            task.project_id === currentProject?.id &&
            task.status === "DEVELOPMENT"
        )
      : [];
  const renderDoneTask: Task[] =
    tasks && Array.isArray(tasks)
      ? tasks.filter(
          (task: Task) =>
            task.project_id === currentProject?.id && task.status === "DONE"
        )
      : [];

  const containers = [
    {
      title: "Начало",
      status: "QUEUE",
      tasks: renderQueryTask,
    },
    {
      title: "В работе",
      status: "DEVELOPMENT",
      tasks: renderDevelopmentTask,
    },
    {
      title: "Сделано",
      status: "DONE",
      tasks: renderDoneTask,
    },
  ];

  const changeTask = (id: string, status: string) => {
    dispatch(changeTaskStatus(id, status));
  };
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(LoadTask(id));
  // }, [dispatch]);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{projectTitle}</h2>
      <section className={styles.task_container}>
        <DndProvider backend={HTML5Backend}>
          {containers.map((container, index) => (
            <TaskContainer
              key={index}
              status={container.status}
              title={container.title}
              tasks={container.tasks}
              onDrop={changeTask}
            />
          ))}
        </DndProvider>
      </section>
    </div>
  );
};

export default TaskPage;
