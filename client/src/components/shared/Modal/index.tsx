import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  id: string;
}

const Modal: React.FC<ModalProps> = ({ children, id }) => {
  const modalRoot = document.getElementById(`modal-${id}`);

  if (modalRoot) return createPortal(children, modalRoot);
  return null;
};

export default Modal;
