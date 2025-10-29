import React, { useEffect } from "react";
import "../styles/Contact.css";
import emailjs from "emailjs-com";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      {/* Hero Section */}
      <section className="hero contact-hero">
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
      <div className="c-content-block c-contact-info-section">
        <div className="c-contact-boxes">
          <div className="c-contact-box">
            <h3>Contact Information 📞</h3>
            <p>Phone: +91 7498622026</p>
            <p>Phone: +91 9822857658</p>
            <p>Hours: Mon-Fri, 9:00 AM - 6:00 PM</p>
          </div>
          <div className="c-contact-box">
            <h3>Email Us 📧</h3>
            <p>General Inquiries: scyberprotect@gmail.com</p>
            <p>Business: scyberprotect@gmail.com</p>
            <p>Partnerships: scyberprotect@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;