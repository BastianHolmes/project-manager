import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TaskPage.module.scss";
import { changeTaskStatus } from "../../redux/modules/tasks/actions";
import { useParams } from "react-router-dom";
import { findItem } from "../../helpers/findItem";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskContainer from "../../components/tasks/TaskContainer";
import { Task } from "../../types/taskTypes";
import { Project } from "../../types/projectsTypes";
import Modal from "../../components/shared/Modal";
import TaskModalContent from "../../components/tasks/TaskModalContent";
import { useGetInfo } from "../../hooks/useGetInfo";
import { useLoading } from "../../hooks/useLoading";
import Loader from "../../components/shared/Loader";

const TaskPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { projects, tasks } = useGetInfo();
  const Loading = useLoading();
  const [selectedTask, setSelectedTask] = useState<Task>({});
  const dispatch = useDispatch();
  const { id = "" } = useParams();
  const currentProject: Project | undefined = Loading
    ? undefined
    : findItem(id, projects);

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
      status: "QUEUE",
      tasks: renderQueryTask,
    },
    {
      status: "DEVELOPMENT",
      tasks: renderDevelopmentTask,
    },
    {
      status: "DONE",
      tasks: renderDoneTask,
    },
  ];

  const changeTask = (id: string, status: string, taskNum: number) => {
    dispatch(changeTaskStatus(id, status, taskNum));
  };

  const toggleModal = (task: Task) => {
    setIsOpenModal(!isOpenModal);
    setSelectedTask(task);
  };

  return (
    <div className={styles.container}>
      {isOpenModal && (
        <Modal id="task">
          <TaskModalContent onClose={setIsOpenModal} task={selectedTask} />
        </Modal>
      )}
      <header className={styles.header}>
        <h2 className={styles.title}>{projectTitle}</h2>
      </header>
      <section className={styles.task_container}>
        <DndProvider backend={HTML5Backend}>
          {Loading && <Loader />}
          {containers.map((container, index) => (
            <TaskContainer
              key={index}
              project_id={currentProject?.id}
              status={container.status}
              tasks={container.tasks}
              onDrop={changeTask}
              onOpenModal={toggleModal}
            />
          ))}
        </DndProvider>
      </section>
    </div>
  );
};

export default TaskPage;
