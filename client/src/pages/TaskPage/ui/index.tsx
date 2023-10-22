import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./TaskPage.module.scss";
import { useParams } from "react-router-dom";
import { findItem } from "../../../shared/helpers/findItem";
import TaskContainer from "../../../components/tasks/TaskContainer";
import { Task } from "../../../shared/types/types";
import Modal from "../../../shared/components/Modal";
import TaskModalContent from "../../../components/tasks/TaskModalContent";
import { useLoading } from "../../../shared/hooks/useLoading";
import Loader from "../../../shared/components/Loader";
import { filterObjectsByProjectId } from "../../../shared/helpers/filterObjectsByProjectId";
import TaskSearch from "../../../components/tasks/TaskSearch";
import { loadSubtasksStart } from "../../../redux/modules/subtasks/actions";
import { changeTaskStatusStart } from "../../../features/Tasks/change-status-task/model";
import { useProjects } from "../../ProjectPage/utils/useProjects";
import { useTasks } from "../utils/useTasks";

const TaskPage = ({}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const tasks = useTasks();
  const projects = useProjects();

  const Loading = useLoading();
  const [selectedTask, setSelectedTask] = useState<Task>({});
  const dispatch = useDispatch();
  const { id = "" } = useParams();
  const [count, setCount] = useState(1);

  useEffect(() => {
    function setFunction() {
      setCount(filterObjectsByProjectId(tasks, id).length + 1);
    }
    if (tasks.length > 0) {
      setFunction();
    }
  }, [tasks]);

  const currentProject = Loading ? undefined : findItem(id, projects);

  const projectTitle = currentProject?.title;
  const renderQueryTask = useMemo(
    () =>
      tasks.filter(
        (tasks: Task<any>) =>
          tasks.project_id === currentProject?.id && tasks.status === "QUEUE"
      ),
    [tasks, currentProject?.id]
  );

  const renderDevelopmentTask = useMemo(
    () =>
      tasks.filter(
        (tasks: Task<any>) =>
          tasks.project_id === currentProject?.id &&
          tasks.status === "DEVELOPMENT"
      ),
    [tasks, currentProject?.id]
  );

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
    dispatch(changeTaskStatusStart(id, status, taskNum));
  };

  const toggleModal = (task: Task) => {
    setIsOpenModal(!isOpenModal);
    setSelectedTask(task);
    dispatch(loadSubtasksStart(task.id));
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
        <TaskSearch
          tasks={tasks}
          onOpenModal={toggleModal}
          project_id={currentProject?.id}
        />
      </header>
      <section className={styles.task_container}>
        {Loading && <Loader />}
        {containers.map((container, index) => (
          <TaskContainer
            index={index}
            key={index}
            project_id={Number(currentProject?.id)}
            status={container.status}
            tasks={container.tasks}
            onDrop={changeTask}
            onOpenModal={toggleModal}
            count={count}
            setCount={setCount}
          />
        ))}
      </section>
    </div>
  );
};

export default TaskPage;
