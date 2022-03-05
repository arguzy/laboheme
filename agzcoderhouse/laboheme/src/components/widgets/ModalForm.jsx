import React from "react";
import Modal from "./Modal";
import { useModal } from "../hooks/useModal";
import GreetingsForm from "../forms/GreetingsForm";
//Este popUp, con el nombre de ventana modal en castellano, es el encargado de llevar al usuario un componente en el que enfocar su mirada, para completar el paso de Update de la información suministrada en firestore.
//useModal, tiene la lógica
//Modal, tiene el encuadre de la lógica
//ModalForm, recibe las props que quiero usar en la ventana modal, toma parte de la lógica del useModal, y se "lleva" como prop children al componente GreentigsForm a Modal, para la funcionalidad de la pieza de código
const ModalForm = ({ buttonText, orderId }) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <div>
      <button onClick={openModal}>{buttonText}</button>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <GreetingsForm orderId={orderId} />
      </Modal>
    </div>
  );
};

export default ModalForm;
