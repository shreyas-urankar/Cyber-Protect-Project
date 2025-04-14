import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>DigiDefence</h3>
          <p>
            Protecting your digital world with cutting-edge cybersecurity
            solutions. We ensure your peace of mind in an increasingly connected
            world.
          </p>
          <div className="social-icons">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/technologyconsultant">Services</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/blog">Resources</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul className="footer-links">
            <li>
              <Link to="/technologyconsultant">Technology Consultancy</Link>
            </li>
            <li>
              <Link to="/compliance_assessment">Compliance Assessment</Link>
            </li>
            <li>
              <Link to="/riskassessments">Risk Management</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <Link to="/contact" className="contact-button">
            Contact Us
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="copyright" style={{ color: "white" }}>
            &copy; {new Date().getFullYear()} DigiDefence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
