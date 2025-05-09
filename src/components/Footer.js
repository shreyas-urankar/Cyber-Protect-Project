import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaFacebook, FaHome, FaServicestack, FaUser, FaBook, FaPhoneAlt, FaTeamspeak, FaHandshake, FaExclamationTriangle } from "react-icons/fa";
import { FaMagnifyingGlassChart } from "react-icons/fa6";

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
              href="https://www.linkedin.com/company/cyber-protect-solutions"
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
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/"> <FaHome /> Home</Link>
            </li>
            <li>
              <Link to="/technologyconsultant"> <FaServicestack/> Services</Link>
            </li>
            <li>
              <Link to="/aboutus"> <FaUser/> About Us</Link>
            </li>
            <li>
              <Link to="/blog"> <FaBook/> Resources</Link>
            </li>
            <li>
              <Link to="/contact"> <FaPhoneAlt/> Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul className="footer-links">
            <li>
              <Link to="/technologyconsultant"> <FaHandshake/> Technology Consultancy</Link>
            </li>
            <li>
              <Link to="/compliance_assessment"> <FaMagnifyingGlassChart/> Compliance Assessment</Link>
            </li>
            <li>
              <Link to="/riskassessments"> <FaExclamationTriangle/> Risk Management</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <Link to="/contact" className="contact-button">
          <FaPhoneAlt/> CONTACT US 
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
