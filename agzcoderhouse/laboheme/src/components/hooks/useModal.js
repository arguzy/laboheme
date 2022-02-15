import { useState } from 'react';


export const useModal = () => {
    const [isOpen, setisOpen] = useState(false);
    const openModal = () => setisOpen(true);
    const closeModal = () => setisOpen(false);

    return[isOpen, openModal, closeModal];
}