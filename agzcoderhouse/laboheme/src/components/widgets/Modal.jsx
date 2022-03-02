import "./Widgets.css";
import { GrClose } from 'react-icons/gr';

const Modal = ({ children, isOpen, closeModal }) => {
  const handelClickOnModal = (e) => e.stopPropagation();
  return (
    <article className={`modal ${isOpen && "itsOn"}`} onClick={closeModal}>
      <div className="modal__container" onClick={handelClickOnModal}>
        <button className="modal__close" onClick={closeModal}>
        <GrClose/>
        </button>
        <div className="modal__text">{children}</div>
      </div>
    </article>
  );
};

export default Modal;
