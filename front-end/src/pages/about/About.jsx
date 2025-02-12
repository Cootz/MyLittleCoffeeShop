import './About.css';

function About() {
    return (
        <div>
            <div className="about-paragraph">
                <h2>About Us</h2>
                <p>Welcome to <b>My Little Coffee Shop</b>, your cozy haven for all things coffee and delicious snacks. We're passionate about crafting the perfect cup of hot coffee, carefully paired with a selection of tasty treats to complement every sip.</p>
            </div>
            
            <div className="about-paragraph">
                <h2>Our Story</h2>
                <p>At <b>My Little Coffee Shop</b>, we believe that great coffee is more than just a drink; it's an experience. Our journey began with a simple idea: to create a warm and inviting space where friends and family could gather over exceptional coffee and snacks. We source our beans from local roasters who share our commitment to quality, ensuring each cup is rich in flavor and aroma.</p>
            </div>

            <div className="about-paragraph">
                <h2>What We Offer</h2>
                <ul>
                    <li><b className="list-bold">Artisanal Coffee</b>: From classic brews to specialty blends, every cup is crafted with love.</li>
                    <li><b className="list-bold">Delicious Snacks</b>: Enjoy freshly baked pastries, sandwiches, and sweet treats designed to pair perfectly with your favorite coffee.</li>
                    <li><b className="list-bold">Cozy Atmosphere</b>: Relax in our welcoming environment, perfect for catching up with friends or enjoying some quiet time.</li>
                </ul>
            </div>

            <div className="about-paragraph">
                <h2>Why Choose Us?</h2>
                <p>We're dedicated to supporting local suppliers whenever possible, ensuring that our impact on the community is positive. Our team is passionate about delivering exceptional service with a smile.</p>
            </div>

            <div className="about-paragraph">
                <h2>Join Our Community</h2>
                <p>Whether you're looking for your morning pick-me-up or an afternoon treat, we invite you to make us your home away from home. Follow us on social media for updates on new menu items, promotions, and events!</p>
                <p>Thank you for choosing <b>My Little Coffee Shop</b> as your go-to spot for great coffee and good company!</p>
            </div>
        </div>
    );
}


export default About;