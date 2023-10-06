import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
