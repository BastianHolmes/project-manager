import { getNewComment } from "../../../shared/helpers/getNewComment";
import {
  CREATE_COMMENTS_ERROR,
  CREATE_COMMENTS_START,
  CREATE_COMMENTS_SUCCESS,
  LOAD_COMMENTS_ERROR,
  LOAD_COMMENTS_START,
  LOAD_COMMENTS_SUCCESS,
} from "../../actionTypes";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

const addCommentToParent = (comments, parentId, newComment) => {
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
          newComment
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
      const { parentId, newCommentText } = payload;
      const newComment = getNewComment(newCommentText, false, parentId);
      const updatedComments = [...state.comments];

      if (parentId) {
        return {
          ...state,
          comments: addCommentToParent(updatedComments, parentId, newComment),
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
