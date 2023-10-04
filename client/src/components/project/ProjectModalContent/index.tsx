import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./ModalContent.module.scss";
import {
  createProjectStart,
  getProjects,
} from "../../../redux/modules/projects/actions";
import { useState } from "react";

interface ModalContentProps {
  onClose: (value: boolean) => void;
}
const ModalContent: React.FC<ModalContentProps> = ({ onClose }) => {
  const initialState = {
    title: "",
  };
  const [{ title }, setState] = useState(initialState);
  const handleBackgroundClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose(false);
    }
    return;
  };

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (title) {
      dispatch(createProjectStart(title));
      setTimeout(() => {
        onClose(false);
        dispatch(getProjects());
      }, 500);
    }
  };
  return (
    <div
      className={styles.background}
      onClick={(e) => handleBackgroundClick(e)}
    >
      <form className={styles.container}>
        <label htmlFor="name" className={styles.name}>
          Название проекта
        </label>
        <input
          id="name"
          min={5}
          type="text"
          placeholder="Введите название..."
          className={styles.field}
          value={title}
          onChange={(e) => setState({ title: e.target.value })}
        />
        <button onClick={(e) => handleSubmit(e)}>Готово</button>
      </form>
    </div>
  );
};

export default ModalContent;
