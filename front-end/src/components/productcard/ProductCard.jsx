import ProductCartItem from "../productcartitem/ProductCartItem";
import './ProductCard.css';


export default function ProductCard({products}) {
    return (
        <div className="product-container">
            {products.length === 0 ? (
                <p>No products found</p>
            ) : (
                products.map((product) => (
                    <ProductCartItem key={product.id} name={product.name} price={product.price} image={product.image} />
                ))

            )}
        </div>
    );
}