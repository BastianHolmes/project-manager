import { ADD_SELECTED_FILES, SET_SELECTED_FILES } from "../../actionTypes";

interface File {
  name: string;
  data: string | ArrayBuffer;
}

interface FilesState {
  selectedFiles: File[];
}

interface Action {
  type: string;
  payload: File[];
}

const initialState: FilesState = {
  selectedFiles: [],
};

const files = (
  state: FilesState = initialState,
  action: Action
): FilesState => {
  const { type, payload } = action;
  switch (type) {
    case SET_SELECTED_FILES:
      return {
        ...state,
        selectedFiles: payload,
      };
    case ADD_SELECTED_FILES:
      return {
        ...state,
        selectedFiles: [...state.selectedFiles, ...payload],
      };
    default:
      return state;
  }
};

export default files;
