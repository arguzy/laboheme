import React from 'react';
import './Widgets.css';

const Spinner = () => {
    return (
        <div className='loadOverlay'>
            <div className="load">
            <div className="load__bar">
            </div>
            </div>
        </div>
    )
}

export default Spinner