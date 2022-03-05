import { useState } from 'react';

//El custom Hook, que guarda la lógica que si o si se va a usar cada vez que se haga aprtura y cierre de un PopUp
export const useModal = () => {
    const [isOpen, setisOpen] = useState(false);
    const openModal = () => setisOpen(true);
    const closeModal = () => setisOpen(false);

    return[isOpen, openModal, closeModal];
}