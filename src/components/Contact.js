import React, { useRef, useEffect } from "react";
import "../styles/Contact.css";
import Navbar from "../components/Navbar";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const headerRef = useRef(null);

  // Automatically scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToHeader = () => {
    headerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Add state for form fields and feedback
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [status, setStatus] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    // Replace these with your actual EmailJS values
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const USER_ID = "YOUR_USER_ID";
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        USER_ID
      )
      .then(() => {
        setStatus("Your enquiry has been sent!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("Failed to send. Please try again later.");
      })
      .finally(() => setLoading(false));
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
            Digidefence Solutions keeps your digital world safe from threats
            like viruses, hacking, and phishing. Our expert team offers 24/7
            support, finds and fixes security issues, and teaches you how to
            stay secure. We use smart tools to protect your data and systems,
            helping your business stay strong and safe online.
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
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Address</p>
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
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Email</p>
                <a href="mailto:contact@digidefence.com">
                  contact@digidefence.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h1>Get Started Today</h1>
        <button className="cta-button" onClick={scrollToHeader}>
          Contact Us
        </button>
      </section>

      {/* Enquiry Form Section */}
      <section
        className="enquiry-section"
        style={{
          maxWidth: 500,
          margin: "10px auto",
          marginTop: "-250px",
          marginBottom: "30px",
          background: "white",
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          padding: 32,
        }}
      >
        <h2 style={{ color: "#056774", marginBottom: 16 }}>
          Send Us Your Enquiry
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", marginBottom: 6 }}>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 6,
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", marginBottom: 6 }}>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 6,
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", marginBottom: 6 }}>Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 6,
                border: "1px solid #ccc",
              }}
            />
          </div>
          <button
            type="submit"
            className="cta-button"
            disabled={loading}
            style={{ width: "100%" }}
          >
            {loading ? "Sending..." : "Send Enquiry"}
          </button>
        </form>
        {status && (
          <p
            style={{
              marginTop: 16,
              color: status.includes("sent") ? "green" : "red",
            }}
          >
            {status}
          </p>
        )}
      </section>
    </div>
  );
};

export default ContactPage;
