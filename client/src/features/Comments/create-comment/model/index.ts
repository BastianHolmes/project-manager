export const CREATE_COMMENTS_START = "CREATE_COMMENTS_START",
  CREATE_COMMENTS_SUCCESS = "CREATE_COMMENTS_SUCCESS",
  CREATE_COMMENTS_ERROR = "CREATE_COMMENTS_ERROR";

export const createCommentStart = (
  id: string,
  task_id: string,
  newCommentText: string,
  parentId: string
) => ({
  type: CREATE_COMMENTS_START,
  payload: {
    id,
    task_id,
    parentId,
    newCommentText,
    date: new Date().toISOString(),
  },
});

export const createCommentSuccess = (payload: any) => ({
  type: CREATE_COMMENTS_SUCCESS,
  payload,
});

export const createCommentError = (payload: any) => ({
  type: CREATE_COMMENTS_ERROR,
  payload,
});
