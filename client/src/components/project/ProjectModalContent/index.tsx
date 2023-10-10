import { useDispatch } from "react-redux";
import styles from "./ModalContent.module.scss";
import { createProjectStart } from "../../../redux/modules/projects/actions";
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
    const date = new Date();
    const id = crypto.randomUUID().toString();
    e.preventDefault();
    if (title) {
      dispatch(createProjectStart(date, title, id));
      onClose(false);
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
        <button className={styles.btn} onClick={(e) => handleSubmit(e)}>
          Готово
        </button>
      </form>
    </div>
  );
};

export default ModalContent;
