import './CheckoutCartItem.css';
import { useState } from 'react';

export default function CheckoutCartItem({name, price, image, quantity}) {
    
    const [imageError, setImageError] = useState(false);

    return (
        <div className="checkout-cart-item">
            {image && !imageError ? ( 
            <img src={image} alt={name} onError={() => setImageError(true)}/>
            ) : (
                <img src="/coffee_ placeholder.png" alt="no image available"/>
            )}

            <div className="item-details">
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
            </div>
        </div>
    );
}