import React from "react";
import "../styles/Footer.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaHome,
  FaServicestack,
  FaUser,
  FaBook,
  FaPhoneAlt,
  FaHandshake,
  FaExclamationTriangle,
  FaDev,
  FaCloudUploadAlt,
  FaRobot,
  FaThinkPeaks,
  FaMobileAlt
} from "react-icons/fa";
import { FaMagnifyingGlassChart } from "react-icons/fa6";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => (e) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo(0, 0);
  };

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
              <Link to="/" onClick={handleNavigation('/')}>
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/technologyconsultant" onClick={handleNavigation('/technologyconsultant')}>
                <FaServicestack /> Services
              </Link>
            </li>
            <li>
              <Link to="/aboutus" onClick={handleNavigation('/aboutus')}>
                <FaUser /> About Us
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={handleNavigation('/blog')}>
                <FaBook /> Resources
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleNavigation('/contact')}>
                <FaPhoneAlt /> Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul className="footer-links">
            <li>
              <Link to="/technologyconsultant" onClick={handleNavigation('/technologyconsultant')}>
                <FaHandshake /> Technology Consultancy
              </Link>
            </li>
            <li>
              <Link to="/compliance_assessment" onClick={handleNavigation('/compliance_assessment')}>
                <FaMagnifyingGlassChart /> Compliance Assessment
              </Link>
            </li>
            <li>
              <Link to="/risk-management" onClick={handleNavigation('/risk-management')}>
                <FaExclamationTriangle /> Risk Management
              </Link>
            </li>
            <li>
              <Link to="/devsecops" onClick={handleNavigation('/devsecops')}>
                <FaDev /> DevSecOps Consultancy
              </Link>
            </li>
            <li>

              <Link to="/cloud-security" onClick={handleNavigation('/cloudsecurity')}>
                <FaCloudUploadAlt /> Cloud Security
              </Link>
            </li>
            <li>
              <Link to="/aiml" onClick={handleNavigation('/AIML')}>
                <FaRobot /> AI/ML Security
              </Link>
            </li>
            <li>
              <Link to="/iot-security" onClick={handleNavigation('/iot-security')}>
                <FaThinkPeaks /> IOT Security
              </Link>
            </li>
            <li>
              <Link to="/mobile-web-security" onClick={handleNavigation('/mobile-web-security')}>
                <FaMobileAlt /> Mobile and Web Development Security
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <Link to="/contact" className="contact-button" onClick={handleNavigation('/contact')}>
            <FaPhoneAlt /> CONTACT US
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