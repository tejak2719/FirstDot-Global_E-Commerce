import React, { useState } from 'react';
import './About.css';

export default function About() {
    const [activeSection, setActiveSection] = useState(null);

    const sections = {
        "About Us": "Welcome to XXXX, your trusted partner in global trade. We are dedicated to connecting businesses worldwide, providing a comprehensive platform for buyers and suppliers to engage, collaborate, and thrive in the international marketplace.",
        "Our Mission": "At XXXX, our mission is to empower businesses by simplifying international trade. We aim to foster a seamless and efficient trading environment where companies of all sizes can discover new opportunities, expand their market reach, and build lasting business relationships.",
        "Who We Are": "Founded by a team of industry experts with years of experience in global commerce, XXXX understands the complexities and challenges of international trade. Our platform is designed to address these challenges by offering robust solutions that cater to the diverse needs of our users.",
        "What We Offer": "Global Reach: Gain access to a huge network of verified customers and providers from across the world. Comprehensive Listings: Discover thorough product and service listings across a variety of sectors. Secure Transactions: Our secure and transparent transaction methods allow you to conduct business with confidence. Business insights: Use market knowledge and analytics to make educated business decisions. Customer Support: Receive personalized assistance from our educated team with any queries or issues ",
        "Why Choose Us": "Reliability: We prioritize the integrity and authenticity of our users, ensuring a trustworthy trading environment. Innovation: Our cutting-edge technology and user-friendly interface simplify the complexities of global trade. Community: Join a vibrant community of businesses and professionals committed to mutual growth and success.",
        "Our Vision": "We envision a world where international trade is accessible, efficient, and beneficial for all parties involved. By continuously enhancing our platform and services, we strive to be the preferred choice for businesses looking to navigate and succeed in the global marketplace.",
        "Get Started": "Join XXXX today and unlock a world of trading possibilities. Whether you are a buyer seeking reliable suppliers or a supplier looking to expand your market, we are here to help you achieve your business goals."
    };

    return (
        <div className="about-container">
            <div
                className="about-section-large"
                onMouseEnter={() => setActiveSection("About Us")}
                onMouseLeave={() => setActiveSection(null)}
            >
                {activeSection === "About Us" ? sections["About Us"] : "About Us"}
            </div>
            {Object.entries(sections).filter(([key]) => key !== "About Us").map(([key, value]) => (
                <div
                    key={key}
                    className="about-section"
                    onMouseEnter={() => setActiveSection(key)}
                    onMouseLeave={() => setActiveSection(null)}
                >
                    {activeSection === key ? <p className="section-detail">{value}</p> : <h2>{key}</h2>}
                </div>
            ))}
        </div>
    );
}