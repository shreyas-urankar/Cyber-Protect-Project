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
            <p>Phone: +91 1234567890</p>
            <p>Hours: Mon-Fri, 9:00 AM - 6:00 PM</p>
            <p>Support: support@cyberprotect.com</p>
          </div>
          <div className="c-contact-box">
            <h3>Email Us 📧</h3>
            <p>General Inquiries: info@cyberprotect.com</p>
            <p>Business: business@cyberprotect.com</p>
            <p>Partnerships: partners@cyberprotect.com</p>
          </div>
        </div>
      </div>

      <div className="acontent-block location-section">
        <div className="clocation-container">
          <div className="c-company-image">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1167.1802218020332!2d74.0192211146262!3d18.493461266263342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e92f693958b3%3A0xf8a2f3d54b65c584!2sMIT ADT School of Computing!5e1!3m2!1sen!2sin!4v1750058455226!5m2!1sen!2sin](https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1167.1802218020332!2d74.0192211146262!3d18.493461266263342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e92f693958b3%3A0xf8a2f3d54b65c584!2sMIT%20ADT%20School%20of%20Computing!5e1!3m2!1sen!2sin!4v1750058455226!5m2!1sen!2sin"
              width="200%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CyberProtect Solutions Location"
            ></iframe>
          </div>
          <div className="clocation-box">
            <h3>Our Location 📍</h3>
            <p>CyberProtect Solutions</p>
            <p>MIT ADT School of Computing</p>
            <p>Solapur-Pune Highway, Loni Kalbhor</p>
            <p>India, Maharashtra 412201</p>
          </div>
        </div>
      </div>

      <div className="c-content-block join-quest">
        <h3>Join Our Quest ⭐️</h3>
        <p>
          Ready to embark on this epic adventure? Just watch this space and
          follow us! 🚀
        </p>
        <p>
          Remember, at CyberProtect Solutions, we don't just protect data; we
          safeguard business plans. Reach out, and let's weave some powerful
          incantations for your security! 🔐✨
        </p>
      </div>

      {/* Enquiry Form Section */}
      <section
        className="enquiry-section"
        style={{
          maxWidth: 500,
          margin: "10px auto",
          marginTop: "20px",
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
