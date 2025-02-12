import './Cart.css';
import CheckoutCartItem from '../../components/checkoutcarditem/CheckoutCartItem';

export default function Cart() {

    const cartItems = [

        {
            id: 1,
            name: "Latte",
            price: 5,
            image: "https://via.placeholder.com/150",
            quantity: 1
        },
        {
            id: 2,
            name: "Cappuccino",
            price: 3,
            image: "https://via.placeholder.com/150",
            quantity: 10
        }
    ];

    return (
        <div className="cart-container">
            <div className="cart-items">
                {cartItems.map(item => (
                   <CheckoutCartItem key={item.id} name={item.name} price={item.price} image={item.image} quantity={item.quantity} />
                ))}
            </div>
            <div className="cart-total">
                <p>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
                <button className="cs-button">Checkout</button>
            </div>
        </div>
    );
} 