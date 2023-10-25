import styles from "./TaskModalContent.module.scss";
import { Subtask, Task } from "../../../shared/types/types";
import TaskForm from "../../TaskForm";
import { Comment } from "../../../entities/Comments";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentSection from "../../CommentSection";
import TaskSideBar from "../../TaskSideBar";
import { useSubtasks } from "../utils/useSubtasks";
import { createCommentStart } from "../../../features/Comments/create-comment/model";

interface ModalContentProps {
  onClose: (value: boolean) => void;
  task: Task;
}
const TaskModalContent: React.FC<ModalContentProps> = ({ onClose, task }) => {
  const subtasks: Subtask[] = useSubtasks(task.id);
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const commentsData = useSelector((state: any) => state.comments.comments);
  const handleBackgroundClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose(false);
    }
    return;
  };

  const handleReply = (parentId: number) => {
    if (id !== 0) {
      dispatch(createCommentStart(id, task?.id, comment, parentId));
    }
  };

  useEffect(() => {
    if (id !== 0) {
      dispatch(createCommentStart(id, task?.id, comment, null));
    }
  }, [id]);

  if (!task) return;
  return (
    <div
      className={styles.background}
      onClick={(e) => handleBackgroundClick(e)}
    >
      <section className={styles.container}>
        <header className={styles.header}>
          <div className={styles.title}>
            <h4 className={styles.name}>{task?.title}</h4>
          </div>
          <h5 className={styles.status}>{task?.status}</h5>
        </header>
        <div className={styles.main}>
          <TaskForm task={task} subtasks={subtasks} />
          <TaskSideBar task={task} />
        </div>
        {commentsData && (
          <Comment comments={commentsData} handleReply={handleReply} />
        )}
        <CommentSection taskId={task.id} />
      </section>
    </div>
  );
};

export default TaskModalContent;
