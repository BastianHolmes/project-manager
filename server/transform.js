export default function transform(comments) {
  const result = [];

  function traverse(comment, depth) {
    if (result[depth] === undefined) {
      result[depth] = [];
    }

    const { childComment, isRootNode, ...commentWithoutChildComment } = comment;
    result[depth].push(commentWithoutChildComment);

    for (const child of childComment) {
      traverse(child, depth + 1);
    }
  }

  for (const comment of comments) {
    if (comment.isRootNode) {
      traverse(comment, 0);
    }
  }

  return result;
}
