import React from 'react'
import { Link } from 'react-router-dom';
import { ImCart } from 'react-icons/im';
import { useCart } from '../../context/CartContext';

const CartView = () => {
    const { cartLenght } = useCart();

    return (
        <div>
            <span><Link to={cartLenght > 0 ? 'OrderSumary' : 'Store'} className='nav__shopIcon'><ImCart/></Link><p className='nav__shopConunt'>{cartLenght}</p></span>
        </div>
    )
}

export default CartView