import './Contact.css';

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="paragraph">
                <h2>Contact Us</h2>
                <p>At <b>My Little Coffee Shop</b>, we value your feedback and look forward to hearing from you. Whether you have a question, suggestion, or just want to say hello, please don't hesitate to reach out.</p>
            </div>

            <div className="paragraph">
                <h2>Open Source Contributions</h2>
                <p>We're proud supporters of open-source technology. If you're interested in contributing to our projects or exploring our codebase, visit us on <a href="https://github.com/Cootz/MyLittleCoffeeShop">GitHub</a>.</p>
            </div>
            
            <a href="https://github.com/Cootz/MyLittleCoffeeShop">
                <img src="github-light.png"/> 
            </a>     
        </div>
    );
}