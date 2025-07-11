import React from "react";
import "../styles/ContactExpert.css";
import { FaHeadset, FaUserTie, FaComments } from "react-icons/fa";

const ContactExpert = () => {
  return (
    <div className="cservice-page-container">
      <main className="cmain-section">
        <div className="cheader-section">
          <h1 className="cmain-title">Contact Our AI Security Experts</h1>
          <div className="cheader-line"></div>
        </div>

        <section className="cservice-overview">
          <div className="c-tech-icon-main">
            <FaHeadset />
          </div>

          <p className="cservice-intro">
            Connect with our team of AI security specialists to discuss your 
            specific challenges and learn how we can help secure your 
            machine learning systems.
          </p>

          <div className="ccontent-block">
            <h3>Ways to Connect</h3>
            <div className="cservices-list">
              <div className="cservice-item">
                <div className="cservice-icon">
                  <FaUserTie />
                </div>
                <div className="cservice-content">
                  <h4>Consultation Call</h4>
                  <p>
                    Schedule a 30-minute call with one of our senior AI 
                    security consultants.
                  </p>
                </div>
              </div>
              <div className="cservice-item">
                <div className="cservice-icon">
                  <FaComments />
                </div>
                <div className="cservice-content">
                  <h4>Live Chat</h4>
                  <p>
                    Chat with our support team in real-time during business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ccontent-block">
            <h3>Contact Form</h3>
            <form className="ccontact-form">
              <div className="cform-group">
                <label htmlFor="contact-name">Name</label>
                <input type="text" id="contact-name" required />
              </div>
              <div className="cform-group">
                <label htmlFor="contact-email">Email</label>
                <input type="email" id="contact-email" required />
              </div>
              <div className="cform-group">
                <label htmlFor="contact-subject">Subject</label>
                <input type="text" id="contact-subject" required />
              </div>
              <div className="cform-group">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" rows="5" required></textarea>
              </div>
              <button type="submit" className="ccta-button-primary">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactExpert;