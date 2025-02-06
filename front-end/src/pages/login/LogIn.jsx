import './LogIn.css';

export default function LogIn() {
    return (
        <div className="login-container">
            <h1>Log In</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="cs-button">Log In</button>
            <a href="/signup">Dont have an account? Create it <span className="signup-link-text">here</span>.</a>
        </div>
    );
} 