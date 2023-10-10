import { Comment } from "../types/types";

export const getNewComment = (
  commentValue: string,
  isRootNode = false,
  parentNodeId: string | null
): Comment => {
  return {
    id: crypto.randomUUID().toString(),
    commentText: commentValue,
    childComments: [],
    isRootNode,
    parentNodeId,
  };
};