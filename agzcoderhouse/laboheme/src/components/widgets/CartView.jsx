import React from 'react'
import { Link } from 'react-router-dom';
import { ImCart } from 'react-icons/im';
import { useCart } from '../../context/CartContext';

const CartView = () => {
    const { cartLength } = useCart();

    return (
        <div>
            <span onChange={cartLength}><Link to={cartLength > 0 ? 'OrderSumary' : 'Store'} className='nav__shopIcon'><ImCart/></Link><p className='nav__shopConunt'>{cartLength}</p></span>
        </div>
    )
}

export default CartView