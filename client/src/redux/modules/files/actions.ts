import { FileType } from "../../../shared/components/FileUploader";
import {
  ADD_SELECTED_FILES,
  DELETE_FILE,
  DOWNLOAD_FILE,
  SET_SELECTED_FILES,
  SET_SELECTED_TASK,
  UPLOAD_FILES,
} from "../../actionTypes";

export const setSelectedFiles = (files: FileType[]) => ({
  type: SET_SELECTED_FILES,
  payload: files,
});

export const addSelectedFiles = (files: FileType[]) => ({
  type: ADD_SELECTED_FILES,
  payload: files,
});

export const uploadFiles = () => ({
  type: UPLOAD_FILES,
});

export const downloadFile = (fileName: string) => ({
  type: DOWNLOAD_FILE,
  payload: fileName,
});

export const deleteFile = (fileName: string) => ({
  type: DELETE_FILE,
  payload: fileName,
});
