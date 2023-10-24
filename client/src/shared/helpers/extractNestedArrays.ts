import { CommentData } from "../types/types";

export default function extractNestedArrays(comments: CommentData[]) {
  const result: CommentData[] = [];

  function traverse(comment: CommentData[]) {
    for (const item of comment) {
      const { childComments, ...commentWithoutChildComment } = item;
      result.push(commentWithoutChildComment);
      traverse(item.childComments ?? []);
    }
  }

  traverse(comments);

  return result;
}
