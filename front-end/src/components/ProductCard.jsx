import CartItem from "./CartItem";

export default function ProductCard({products}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {products.map((product) => (
                <CartItem key={product.id} name={product.name} price={product.price} image={product.image} />
            ))}
        </div>
    );
}