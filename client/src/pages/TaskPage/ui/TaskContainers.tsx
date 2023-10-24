import styles from "./TaskPage.module.scss";
import { Project, Task } from "../../../shared/types/types";
import TaskContainer from "../../../widgets/TaskContainer";

interface TaskContainerProps {
  currentProject: Project | undefined;
  tasks: Task[];
  count: number;
  setCount: (value: number) => void;
  onOpenModal: (item: Task) => void;
  isLoading: boolean;
}

export const TaskContainers: React.FC<TaskContainerProps> = ({
  tasks,
  currentProject,
  count,
  setCount,
  onOpenModal,
  isLoading,
}) => {
  const setStatus = (status: string) => {
    const Task = tasks.filter(
      (task: Task) =>
        task.project_id === currentProject?.id && task.status === status
    );

    return Task;
  };

  const QueueTask = setStatus("QUEUE");
  const DevelopmentTask = setStatus("DEVELOPMENT");
  const DoneTask = setStatus("DONE");

  const containers = [
    {
      status: "QUEUE",
      tasks: QueueTask,
    },
    {
      status: "DEVELOPMENT",
      tasks: DevelopmentTask,
    },
    {
      status: "DONE",
      tasks: DoneTask,
    },
  ];

  return (
    <section className={styles.task_container}>
      {isLoading ||
        containers.map((container, index) => (
          <TaskContainer
            index={index}
            key={index}
            project_id={Number(currentProject?.id)}
            status={container?.status}
            tasks={container?.tasks}
            onOpenModal={onOpenModal}
            count={count}
            setCount={setCount}
          />
        ))}
    </section>
  );
};
