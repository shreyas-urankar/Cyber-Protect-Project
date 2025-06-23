import React, { useRef, useEffect } from "react";
import "../styles/Contact.css";
import Navbar from "../components/Navbar";

const ContactPage = () => {
    const headerRef = useRef(null);

    // Automatically scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToHeader = () => {
        headerRef.current?.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
        });
    };

    return (
        <div className="contact-page">
            <Navbar />

            {/* Hero Section */}
            <section className="hero contact-hero" ref={headerRef}>
                <div className="overlay"></div>
                <div className="decorative-dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <div className="hero-content">
                    <h1>
                        Your Shield in the <span className="highlight">Digital Realm</span>
                    </h1>
                    <p className="hero-description">
                        Digidefence Solutions keeps your digital world safe from threats like viruses, hacking, and phishing. Our expert team offers 24/7 support, finds and fixes security issues, and teaches you how to stay secure. We use smart tools to protect your data and systems, helping your business stay strong and safe online.
                    </p>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="contact-info-section">
                <h2>Contact Information</h2>
                <p className="description">
                    Feel free to reach out to us using the details below.
                </p>
                <div className="contact-details">
                    <div className="contact-block phone-block">
                        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Address</p>
                        <div className="contact-detail-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>DigiDefence, Pune</span>
                        </div>
                        <div className="contact-detail-item">
                            <i className="fas fa-phone"></i>
                            <span>+91 999999</span>
                        </div>
                    </div>
                    <div className="contact-block email-block">
                        <div className="contact-detail-item">
                            <i className="fas fa-envelope"></i>
                            <span>
                                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Email</p>
                                <a href="mailto:contact@digidefence.com">contact@digidefence.com</a>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <h1>Get Started Today</h1>
                <button className="cta-button" onClick={scrollToHeader}>Contact Us</button>
            </section>
        </div>
    );
};

export default ContactPage;