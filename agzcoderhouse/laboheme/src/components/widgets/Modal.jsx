import "./Widgets.css";
import { GrClose } from "react-icons/gr";
//La lógica se encuentra almacenada en el useModal, este componente es un mero intermediario de encuadre para captar los eventos de OnClick.
//Se podría llamar ModalClick, para diferenciarlo de un ModalScroll, un ModalOnMouseUp... etc
const Modal = ({ children, isOpen, closeModal }) => {
  const handelClickOnModal = (e) => e.stopPropagation();
  return (
    <article className={`modal ${isOpen && "itsOn"}`} onClick={closeModal}>
      <div className="modal__container" onClick={handelClickOnModal}>
        <button className="modal__close" onClick={closeModal}>
          <GrClose />
        </button>
        <div className="modal__text">{children}</div>
      </div>
    </article>
  );
};

export default Modal;
