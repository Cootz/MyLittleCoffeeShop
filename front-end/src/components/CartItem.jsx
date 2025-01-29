import { useState } from 'react';

export default function CartItem({name, price, image}) {
    const [imageError, setImageError] = useState(false);

    return (
        <div>
            <h1>{name}</h1>
            <p>Price: ${price.toFixed(2)}</p>
            {image && !imageError ? ( 
                <img src={image} alt={name} onError={() => setImageError(true)}/>)
            : (
                <p>No image available</p>
            )}
        </div>
    );
}