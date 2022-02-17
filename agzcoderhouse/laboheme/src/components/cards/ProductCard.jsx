import React from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import './Card.modules.css';

function ProductCard ({ident, imageSrc , name, price}) {

    const navigate = useNavigate();
    
    return (
        
        <div className="cardProducts">
            <div className="cardProducts__ImageBox">
                <img className="cardProducts__Image" src={imageSrc} alt={name} />
            </div>
            <div className="cardProducts__infoBox">
                <div>
                    <div className="cardProducts__titleBox">
                        <h2 className="cardProducts__title">{name}</h2>
                    </div>  
                </div>

                <div className="cardProducts__toBuy">
                    <p className="cardProducts__price">Precio:$ {price}</p>
                    <button className="cardProducts__DetailBtn" onClick={() => navigate(`products/${ident}`)}>
                        <span className='cardProducts__DetailBtnIcon'><BsCartPlusFill/></span>
                        <span className="cardProducts__DetailBtnText">Agregar</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
