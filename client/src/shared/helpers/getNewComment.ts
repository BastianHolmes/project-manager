import { CommentData } from "../types/types";

export const getNewComment = (
  commentValue: string,
  isRootNode = false,
  parentNodeId: string | null,
  taskId: string
): CommentData => {
  return {
    id: crypto.randomUUID().toString(),
    taskId,
    commentText: commentValue,
    childComments: [],
    isRootNode,
    parentNodeId,
  };
};
