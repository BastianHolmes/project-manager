import { getNewComment } from "../../../shared/helpers/getNewComment";
import {
  LOAD_COMMENTS_ERROR,
  LOAD_COMMENTS_START,
  LOAD_COMMENTS_SUCCESS,
} from "../../../redux/actionTypes";
import {
  CREATE_COMMENTS_ERROR,
  CREATE_COMMENTS_START,
  CREATE_COMMENTS_SUCCESS,
} from "../create-comment/model";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

const addCommentToParent = (comments, parentId, newComment, taskId) => {
  return comments.map((comment) => {
    if (comment.id === parentId) {
      return {
        ...comment,
        childComments: [...comment.childComments, newComment],
      };
    } else if (comment.childComments.length > 0) {
      return {
        ...comment,
        childComments: addCommentToParent(
          comment.childComments,
          parentId,
          newComment,
          taskId
        ),
      };
    }
    return comment;
  });
};

const comments = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_COMMENTS_START:
      return {
        ...state,
        loading: true,
      };
    case LOAD_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: payload,
      };
    case LOAD_COMMENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case CREATE_COMMENTS_START:
      const { parentId, newCommentText, task_id: taskId } = payload;
      console.log(payload, taskId);
      const newComment = getNewComment(newCommentText, false, parentId, taskId);
      const updatedComments = [...state.comments];

      if (parentId) {
        return {
          ...state,
          comments: addCommentToParent(
            updatedComments,
            parentId,
            newComment,
            taskId
          ),
        };
      } else {
        return {
          ...state,
          comments: [...updatedComments, newComment],
        };
      }
    case CREATE_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: payload,
      };
    case CREATE_COMMENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default comments;
