import { useModal } from '../hooks/useModal';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

const Modals = ({message, buttonText, cartLength, road}) => {
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const navigate = useNavigate();
    return (
    <div>
        <button onClick={cartLength === 0 ? openModal : () => navigate(`${road}`)}>{buttonText}</button>
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <p>{message}</p>
        </Modal>
    </div>
  )
}

export default Modals;