import React from 'react';
import {FaPlus, FaMinus} from 'react-icons/fa';
import './Buttons.css';



const CounterTab = ({price, onStock, counter, plus, minus, subtotal}) => {
    return (
        <div className='counterBox'>
        <button className="counterBox__button" onClick={()=>{minus(); subtotal(counter , price);}}><FaMinus/></button>
        <p className="counterBox__num">{counter}</p>
        <button className="counterBox__button" onClick={()=>{plus(onStock); subtotal(counter , price); }}><FaPlus/></button>
        </div>
    );
}

export default CounterTab