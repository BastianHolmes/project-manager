import { useState } from "react";
import styles from "./CommentSection.module.scss";
import Comment from "../Comment";
import { RiSendPlane2Fill } from "../../../shared/Icons/IconSend";
import { useDispatch, useSelector } from "react-redux";
import { createCommentStart } from "../../../redux/modules/comments/actions";

function CommentSection({ taskId }) {
  const dispatch = useDispatch();
  const [rootComment, setRootComment] = useState("");

  const comments = useSelector((state: any) => state.comments.comments);
  const onAdd = () => {
    const id = crypto.randomUUID();
    dispatch(createCommentStart(id, taskId, rootComment, null));
    setRootComment("");
  };
  return (
    <div className={styles.commentSection}>
      <h3>Комментарии</h3>
      <div className={styles.commentsContainer}>
        <textarea
          rows={3}
          className={styles.textarea}
          placeholder="Add comment"
          value={rootComment}
          onChange={(e) => setRootComment(e.target.value)}
        />
        <RiSendPlane2Fill className={styles.sendIcon} onClick={onAdd} />
      </div>
      <div>
        {comments.map((comment, key) => {
          return (
            <>
              <Comment key={key} comment={comment} taskId={taskId} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default CommentSection;
