import "./signup.css";

export default function SingUp()
{
    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Confirm Password"/>
            <button className="cs-button">Sign Up</button>
        </div>
    );
}
