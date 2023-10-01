import styles from "./ModalContent.module.scss";

interface ModalContentProps {
  onClose: (value: boolean) => void;
}
const ModalContent: React.FC<ModalContentProps> = ({ onClose }) => {
  const handleBackgroundClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose(false);
    }
    return;
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
        />
        <button>Готово</button>
      </form>
    </div>
  );
};

export default ModalContent;
