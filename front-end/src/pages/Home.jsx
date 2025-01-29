import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const mockProducts = [
            { id: 1, name: 'Espresso', price: 3.5, image: 'espresso.jpg' },
            { id: 2, name: 'Cappuccino', price: 4.5, image: 'cappuccino.jpg' },
            { id: 3, name: 'Latte', price: 5.5, image: 'latte.jpg' },
            { id: 4, name: 'Mochachino', price: 6.5, image: 'mochachino.jpg' },
            { id: 5, name: 'Americano', price: 7.5, image: 'americano.jpg' }
          ];
          setProducts(mockProducts);
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <ProductCard products={products}/>
        </div>
    );
}