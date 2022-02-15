import { Link } from 'react-router-dom';
import { useModal } from '../hooks/useModal';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

const Modals = ({message, buttonText, cartLenght, road}) => {
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const navigate = useNavigate();
    return (
    <div>
        <button onClick={cartLenght === 0 ? openModal : () => navigate(`${road}`)}>{buttonText}</button>
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <p>{message}</p>
        </Modal>
    </div>
  )
}

export default Modals;