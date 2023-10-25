import API from "../../../shared/api/api.service";

export const getComments = async (taskId: string): Promise<Comment[]> => {
  try {
    const { data } = await API.get(`/comments/${taskId}`);
    return data;
  } catch (err) {
    throw new Error("Failed to get comments");
  }
};

export const postComment = async (): Promise<Comment[]> => {
  try {
    const { data } = await API.post(`/comments`);
    return data;
  } catch (err) {
    throw new Error("Failed to post comment");
  }
};
