import { takeEvery, select } from "redux-saga/effects";
import { DELETE_FILE, DOWNLOAD_FILE, UPLOAD_FILES } from "../../actionTypes";

interface File {
  name: string;
  data: string;
}

interface FileAction {
  type: string;
  payload: string;
}

interface RootState {
  fileUploader: {
    selectedFiles: File[];
  };
}

export const getSelectedFiles = (state: RootState) =>
  state.fileUploader.selectedFiles;

function* handleUploadFiles(): Generator<any, void, any> {
  const selectedFiles: File[] = yield select(getSelectedFiles);
  for (let i = 0; i < selectedFiles.length; i++) {
    const file: File = selectedFiles[i];
    localStorage.setItem(file.name, file.data);
  }
}

function* handleDownloadFile(action: FileAction): Generator<any, void, any> {
  const { payload: fileName }: FileAction = action;
  const fileData: string | null = localStorage.getItem(fileName);
  const link: HTMLAnchorElement = document.createElement("a");
  if (fileData) {
    link.href = fileData;
    link.download = fileName;
    link.click();
  }
}

function* handleDeleteFile(action: FileAction): Generator<any, void, any> {
  const { payload: fileName }: FileAction = action;
  localStorage.removeItem(fileName);
}

function* fileUploaderSaga(): Generator<any, void, any> {
  yield takeEvery(UPLOAD_FILES, handleUploadFiles);
  yield takeEvery(DOWNLOAD_FILE, handleDownloadFile);
  yield takeEvery(DELETE_FILE, handleDeleteFile);
}

export default fileUploaderSaga;
