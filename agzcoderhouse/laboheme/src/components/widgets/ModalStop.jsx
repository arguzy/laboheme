import { useModal } from "../hooks/useModal";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
//Este popUp, con el nombre de ventana modal en castellano, es el encargado de llevar al usuario un componente con el mensaje que le indicia que ante la no selección de productos, no puede avanzar en el proceso de compras - para que no pueda pasar a OrderSummary con ningun producto que renderizar-.
//Modal, tiene el encuadre de la lógica
//ModalStop, recibe en detailCard, las props con los datos a ser utilizados en una evaluación codicional de un operador ternario disparada en el evento onClick del boton que recibe su nombre de ButtonText, si hay objetos en el array cart, entonces a través del hook useNavigate, se renderiza la page OrderSummary.
//Sinceramente parece un trabajo demasiado grande para un popUp, pero si la app tuviera más desarrollo este modalStop, tendría muchas más oportunidades de ejecución, es sólo encapsular el operador ternario entero como prop y llevarlo a cada situación que se presente con los valores que se deban evaluar.
const ModalStop = ({ message, buttonText, cart, road }) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={cart.length === 0 ? openModal : () => navigate(`${road}`)}
      >
        {buttonText}
      </button>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <p>{message}</p>
      </Modal>
    </div>
  );
};

export default ModalStop;
