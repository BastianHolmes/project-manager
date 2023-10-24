import { CommentData } from "../types/types";

export const getNewComment = (
  commentValue: string,
  isRootNode = false,
  parentNodeId: string | null
): CommentData => {
  return {
    id: crypto.randomUUID().toString(),
    commentText: commentValue,
    childComments: [],
    isRootNode,
    parentNodeId,
  };
};
