import React from 'react'
import Modal from './Modal';
import { useModal } from '../hooks/useModal';
import GreetingsForm from '../forms/GreetingsForm';

const ModalForm = ({buttonText, orderId}) => {
    const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <div>
        <button onClick={ openModal}>{buttonText}</button>
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <GreetingsForm
            orderId={orderId}/>
        </Modal>
    </div>
  )
}

export default ModalForm