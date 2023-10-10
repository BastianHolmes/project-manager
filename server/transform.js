function extractNestedArrays(comments) {
  const result = [];

  function traverse(comment) {
    for (const item of comment) {
      const { childComment, ...commentWithoutChildComment } = item;
      result.push(commentWithoutChildComment);
      traverse(item.childComment);
    }
  }

  traverse(comments);

  return result;
}
