import styles from "./TaskPage.module.scss";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { findItem } from "../../../shared/helpers/findItem";
import { Project, Task } from "../../../shared/types/types";
import Modal from "../../../shared/components/Modal";
import TaskModalContent from "../../../widgets/TaskModalContent";
import { useLoading } from "../../../shared/hooks/useLoading";
import Loader from "../../../shared/components/Loader";
import { filterObjectsByProjectId } from "../../../shared/helpers/filterObjectsByProjectId";
import TaskSearch from "../../../widgets/TaskSearch";
import { loadSubtasksStart } from "../../../redux/modules/subtasks/actions";
import { useProjects } from "../../ProjectPage/utils/useProjects";
import { useTasks } from "../utils/useTasks";
import { TaskHeader } from "./TaskHeader";
import { TaskContainers } from "./TaskContainers";

interface TaskPageProps {}

const TaskPage: React.FC<TaskPageProps> = ({}) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const tasks: Task[] = useTasks();
  const projects: Project[] = useProjects();

  const Loading = useLoading();
  const [selectedTask, setSelectedTask] = useState<Task>({});
  const dispatch = useDispatch();
  const { id = "" } = useParams();
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    function setFunction() {
      setCount(filterObjectsByProjectId(tasks, id).length + 1);
    }
    if (tasks.length > 0) {
      setFunction();
    }
  }, [tasks]);

  const currentProject = Loading ? undefined : findItem<Project>(id, projects);

  const projectTitle = currentProject?.title || "Project";

  const toggleModal = (task: Task): void => {
    setIsOpenModal(!isOpenModal);
    setSelectedTask(task);
    dispatch(loadSubtasksStart(task.id ?? ""));
  };

  return (
    <div className={styles.container}>
      {isOpenModal && (
        <Modal id="task">
          <TaskModalContent onClose={setIsOpenModal} task={selectedTask} />
        </Modal>
      )}

      <TaskHeader projectTitle={projectTitle}>
        <TaskSearch
          tasks={tasks}
          onOpenModal={toggleModal}
          project_id={currentProject?.id ?? ""}
        />
      </TaskHeader>

      {Loading && <Loader />}

      <TaskContainers
        tasks={tasks}
        isLoading={Loading}
        onOpenModal={toggleModal}
        currentProject={currentProject}
        count={count}
        setCount={setCount}
      />
    </div>
  );
};

export default TaskPage;
