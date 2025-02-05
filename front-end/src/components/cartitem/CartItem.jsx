import { useState } from 'react';
import './CartItem.css';

export default function CartItem({name, price, image}) {
    const counterLimit = 99; 
    const [imageError, setImageError] = useState(false);
    const [counter, setCounter] = useState(0);

    return (
        <div className="cart-item">
            {image && !imageError ? ( 
            <img src={image} alt={name} onError={() => setImageError(true)}/>
            ) : (
                <img src="/coffee_ placeholder.png" alt="no image available"/>
            )}
            <div className="cart-item-info">
                <h2>${price.toFixed(2)}</h2>
                <p>{name}</p>
            </div>
            <div className="counter-box">
                <button
                    onClick={() => (counter > 0) && setCounter(prev => prev - 1)}
                >
                    <img src="/minus_.png"/>
                </button>
                <div className="counter">
                    <p>{counter}</p>
                </div>
                <button
                    onClick={() => (counter < counterLimit) && setCounter(prev => prev + 1)}
                >
                    <img src="/plus_.png"/>
                </button>
            </div>
        </div>
    );
}