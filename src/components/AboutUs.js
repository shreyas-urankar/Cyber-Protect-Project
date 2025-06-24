import React from "react";
import "../styles/AboutUs.css";
import { FaClock, FaTools, FaTrophy } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="a-about-us-container">
      {/* Main Content */}
      <main className="amain-section">
        {/* Header */}
        <div className="aheader-section">
          <h1 className="amain-title">Your Shield in the Digital Realm</h1>
          <div className="aheader-line"></div>
        </div>

        {/* Overview Section */}
        <section className="a-about-overview">
          <h2>Overview</h2>
          <div className="acontent-block">
            <h3>Who We Are ❓</h3>
            <p>
              At CyberProtect Solutions, we're not just another cybersecurity
              company—we're your vigilant guardians in the ever-evolving
              landscape of digital threats.
            </p>
            <p>
              We're a passionate team of cyber knights, a crew of experts from
              services, industry, compliance, and academic fields armed with
              cutting-edge spells to defend your organization's data, processes,
              IT platforms, and brand name.
            </p>
          </div>

          <div className="acontent-block">
            <h3>Why Choose Us ❓</h3>
            <div className="a-advantages">
              <div className="a-advantage-item">
                <div className="a-advantage-icon exp-icon">
                  <FaTrophy />
                </div>
                <div className="a-advantage-content">
                  <h4>Experience</h4>
                  <p>Our experts have battled in countless cyber combats.</p>
                </div>
              </div>

              <div className="a-advantage-item">
                <div className="a-advantage-icon custom-icon">
                  <FaTools />
                </div>
                <div className="a-advantage-content">
                  <h4>Tailored Solutions</h4>
                  <p>
                    No one-size-fits-all spells here—we customize our
                    protections to fit your unique needs.
                  </p>
                </div>
              </div>

              <div className="a-advantage-item">
                <div className="a-advantage-icon support-icon">
                  <FaClock />
                </div>
                <div className="a-advantage-content">
                  <h4>24/7 Vigilance</h4>
                  <p>Round-the-clock service to expedite outcomes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="acontent-block contact-info-section">
            <div className="acontact-boxes">
              <div className="acontact-box">
                <h3>Contact Information 📞</h3>
                <p>Phone: +91 1234567890</p>
                <p>Hours: Mon-Fri, 9:00 AM - 6:00 PM</p>
                <p>Support: support@cyberprotect.com</p>
              </div>
              <div className="acontact-box">
                <h3>Email Us 📧</h3>
                <p>General Inquiries: info@cyberprotect.com</p>
                <p>Business: business@cyberprotect.com</p>
                <p>Partnerships: partners@cyberprotect.com</p>
              </div>
            </div>
          </div>

          <div className="acontent-block location-section">
            <div className="alocation-container">
              <div className="acompany-image">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1167.1802218020332!2d74.0192211146262!3d18.493461266263342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e92f693958b3%3A0xf8a2f3d54b65c584!2sMIT ADT School of Computing!5e1!3m2!1sen!2sin!4v1750058455226!5m2!1sen!2sin](https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1167.1802218020332!2d74.0192211146262!3d18.493461266263342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e92f693958b3%3A0xf8a2f3d54b65c584!2sMIT%20ADT%20School%20of%20Computing!5e1!3m2!1sen!2sin!4v1750058455226!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CyberProtect Solutions Location"
                ></iframe>
              </div>
              <div className="alocation-box">
                <h3>Our Location 📍</h3>
                <p>CyberProtect Solutions</p>
                <p>MIT ADT School of Computing</p>
                <p>Solapur-Pune Highway, Loni Kalbhor</p>
                <p>India, Maharashtra 412201</p>
              </div>
            </div>
          </div>

          <div className="acontent-block">
            <h3>Join Our Quest ⭐️</h3>
            <p>
              Ready to embark on this epic adventure? Just watch this space and
              follow us! 🚀
            </p>
            <p>
              Remember, at CyberProtect Solutions, we don't just protect data;
              we safeguard business plans. Reach out, and let's weave some
              powerful incantations for your security! 🔐✨
            </p>
          </div>
        </section>

        {/* Quote Section */}
        <div className="aquote-section">
          <blockquote>
            "Cybersecurity is not a product, but a process of innovation and
            resilience."
          </blockquote>
          <cite>- Henry Solman</cite>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
