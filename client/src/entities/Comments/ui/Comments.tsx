import { useState } from "react";
import styles from "./Comment.module.scss";
import { RiSendPlane2Fill } from "../../../shared/Icons/IconSend";
import { RiReplyAllFill } from "../../../shared/Icons/IconReply";
import { useDispatch } from "react-redux";
import { createCommentStart } from "../../../redux/modules/comments/actions";

interface CommentProps {
  comment: CommentData;
  taskId: string;
}

interface CommentData {
  commentText: string;
  childComments: CommentData[];
  id: string;
}

export const Comment: React.FC<CommentProps> = ({ comment, taskId }) => {
  const dispatch = useDispatch();
  const [childComment, setChildComment] = useState("");
  const [showAddComponent, setShowAddComponent] = useState(false);

  if (!comment) {
    return null;
  }

  const { commentText, childComments, id } = comment;

  const onReply = () => {
    const parentId = id;
    dispatch(createCommentStart(parentId, taskId, childComment, id));
    setChildComment("");
    setShowAddComponent(false);
  };

  return (
    <div className={styles.commentContainer}>
      <div className={styles.comment}>
        <div style={{ textAlign: "left" }}>{commentText}</div>
        &nbsp;
      </div>
      <div>
        <div>
          {showAddComponent ? (
            <>
              <textarea
                rows={3}
                autoFocus
                className={styles.textarea}
                placeholder="Add comment"
                value={childComment}
                onChange={(e) => setChildComment(e.target.value)}
                onBlur={() => {
                  if (childComment === "") {
                    setShowAddComponent(false);
                  }
                }}
              />
              <RiSendPlane2Fill className={styles.sendIcon} onClick={onReply} />
            </>
          ) : (
            <RiReplyAllFill
              className={styles.replyIcon}
              onClick={() => setShowAddComponent(true)}
            />
          )}
        </div>
      </div>

      {childComments.map((childCommentEl: CommentData, key: number) => {
        return <Comment key={key} comment={childCommentEl} taskId={taskId} />;
      })}
    </div>
  );
};
