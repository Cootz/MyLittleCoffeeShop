import { useState, useEffect } from 'react';
import ProductCard from '../../components/productcard/ProductCard';
import './Home.css';

export default function Home() {
    const [products, setProducts] = useState([]);

    // Temporal test data
    // TODO: Replace with actual data from the database
    useEffect(() => {
        const mockProducts = [
            { id: 1, name: 'Espresso', price: 3.5, image: 'espresso.jpg' },
            { id: 2, name: 'Cappuccino', price: 4.5, image: 'cappuccino.jpg' },
            { id: 3, name: 'Latte', price: 5.5, image: 'latte.jpg' },
            { id: 4, name: 'Mochachino', price: 6.5, image: 'mochachino.jpg' },
            { id: 5, name: 'Americano', price: 7.5, image: 'americano.jpg' },
            { id: 6, name: 'Cafe au Lait', price: 8.5, image: 'cafe_au_lait.jpg' },
            { id: 7, name: 'Caramel Macchiato', price: 9.5, image: 'caramel_macchiato.jpg' },
            { id: 8, name: 'Iced Coffee', price: 10.5, image: 'iced_coffee.jpg' },
            { id: 9, name: 'Iced Latte', price: 11.5, image: 'iced_latte.jpg' },
            { id: 10, name: 'Iced Mocha', price: 12.5, image: 'iced_mocha.jpg' },
            { id: 11, name: 'Affogato', price: 6.0, image: 'affogato.jpg' },
            { id: 12, name: 'Irish Coffee', price: 7.0, image: 'irish_coffee.jpg' },
            { id: 13, name: 'Turkish Coffee', price: 5.0, image: 'turkish_coffee.jpg' },
            { id: 14, name: 'Vietnamese Coffee', price: 5.5, image: 'vietnamese_coffee.jpg' },
            { id: 15, name: 'Flat White', price: 4.5, image: 'flat_white.jpg' },
            { id: 16, name: 'Cold Brew', price: 4.0, image: 'cold_brew.jpg' },
            { id: 17, name: 'Nitro Cold Brew', price: 5.0, image: 'nitro_cold_brew.jpg' },
            { id: 18, name: 'Pumpkin Spice Latte', price: 6.0, image: 'pumpkin_spice_latte.jpg' },
            { id: 19, name: 'White Chocolate Mocha', price: 6.5, image: 'white_chocolate_mocha.jpg' },
            { id: 20, name: 'Cortado', price: 4.0, image: 'cortado.jpg' },
            { id: 21, name: 'Red Eye', price: 4.5, image: 'red_eye.jpg' },
            { id: 22, name: 'Black Eye', price: 5.0, image: 'black_eye.jpg' },
            { id: 23, name: 'Lungo', price: 3.5, image: 'lungo.jpg' },
            { id: 24, name: 'Ristretto', price: 3.0, image: 'ristretto.jpg' },
            { id: 25, name: 'Frappuccino', price: 6.5, image: 'frappuccino.jpg' },
            { id: 26, name: 'Chai Latte', price: 5.0, image: 'chai_latte.jpg' },
            { id: 27, name: 'Matcha Latte', price: 5.5, image: 'matcha_latte.jpg' },
            { id: 28, name: 'Dirty Chai', price: 5.5, image: 'dirty_chai.jpg' },
            { id: 29, name: 'Cafe Con Leche', price: 4.0, image: 'cafe_con_leche.jpg' },
            { id: 30, name: 'Cafe Cubano', price: 3.5, image: 'cafe_cubano.jpg' }
          ];
          setProducts(mockProducts);
    }, []);

    return (
        <div className="home-container">
            <div className="search-bar">
                <input type="text" placeholder="Search for a product" />
                <button>Search</button>
            </div>
            <ProductCard products={products}/>


        </div>
    );
}