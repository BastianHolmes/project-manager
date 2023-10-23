import { useEffect } from "react";
import styles from "./FileUploader.module.scss";
import { IconParkOutlineDownload } from "../../../shared/Icons/IconDownload";
import { MaterialSymbolsDeleteOutline } from "../../../shared/Icons/IconDelete";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedFiles,
  deleteFile,
  downloadFile,
  setSelectedFiles,
} from "../../../redux/modules/files/actions";

interface File {
  name: string;
  data: string | null;
}

interface FileUploaderProps {
  taskId: number;
}

const FileUploader: React.FC<FileUploaderProps> = ({ taskId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fileNames = Object.keys(localStorage).filter((key) =>
      key.startsWith(`file_${taskId}_`)
    );
    const files = fileNames.map((fileName) => ({
      name: fileName,
      data: localStorage.getItem(fileName),
    }));
    dispatch(setSelectedFiles(files));
  }, [dispatch, taskId]);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const files = Array.from(event.target.files || []);
    files.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          const fileData = e.target.result;

          if (typeof fileData === "string") {
            const fileName = `file_${taskId}_${index}_${file.name}`;
            localStorage.setItem(fileName, fileData);
            const prefixedFile: File = {
              name: fileName,
              data: fileData,
            };
            dispatch(addSelectedFiles([prefixedFile]));
          }
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileDownload = (fileName: string): void => {
    dispatch(downloadFile(fileName));
  };

  const handleFileDelete = (fileName: string): void => {
    localStorage.removeItem(fileName);
    dispatch(deleteFile(fileName));
    const updatedFiles = selectedFiles.filter((file) => file.name !== fileName);
    dispatch(setSelectedFiles(updatedFiles));
  };

  const selectedFiles: File[] = useSelector(
    (state: { files: { selectedFiles: File[] } }) => state.files.selectedFiles
  );

  return (
    <div>
      <div className={styles.upload}>
        <div className={styles.upload_btn_wrapper}>
          <button className={styles.btn}>Choose file</button>
          <input
            type="file"
            name="myfile"
            multiple
            onChange={handleFileChange}
          />
        </div>
      </div>
      <ul>
        {selectedFiles.map((file) => (
          <li key={file.name} className={styles.file}>
            {file.name}
            <div className={styles.buttons}>
              <IconParkOutlineDownload
                onClick={() => handleFileDownload(file.name)}
              />
              <MaterialSymbolsDeleteOutline
                onClick={() => handleFileDelete(file.name)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUploader;
