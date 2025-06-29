import React, { useState, useEffect } from "react";
import "../styles/Footer.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaHome,
  FaServicestack,
  FaBook,
  FaPhoneAlt,
  FaHandshake,
  FaExclamationTriangle,
  FaCloudUploadAlt,
  FaRobot,
  FaThinkPeaks,
  FaMobileAlt,
} from "react-icons/fa";
import { FaMagnifyingGlassChart } from "react-icons/fa6";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentYear] = useState(new Date().getFullYear());

  const handleNavigation = (path) => (e) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Social media links with hover effects
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/cyber-protect-solutions",
      icon: FaLinkedin,
      color: "#0077b5"
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: FaInstagram,
      color: "#e4405f"
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: FaFacebook,
      color: "#1877f2"
    }
  ];

  // Services data for better organization
  const services = [
    {
      name: "Technology Consultancy",
      path: "/technologyconsultant",
      icon: FaHandshake
    },
    {
      name: "Compliance Assessment",
      path: "/compliance_assessment",
      icon: FaMagnifyingGlassChart
    },
    {
      name: "Risk Management",
      path: "/risk-management",
      icon: FaExclamationTriangle
    },
    {
      name: "Cloud Security",
      path: "/cloudsecurity",
      icon: FaCloudUploadAlt
    },
    {
      name: "AI/ML Security",
      path: "/aiml",
      icon: FaRobot
    },
    {
      name: "IOT Security",
      path: "/iot-security",
      icon: FaThinkPeaks
    },
    {
      name: "Mobile and Web Development Security",
      path: "/mobilewebsecurity",
      icon: FaMobileAlt
    }
  ];

  return (
    <footer>
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>DigiDefence</h3>
          <p>
            Protecting your digital world with cutting-edge cybersecurity
            solutions. We ensure your peace of mind in an increasingly connected
            world through innovative security practices and comprehensive protection.
          </p>
          <div className="social-icons">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                  title={`Follow us on ${social.name}`}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link 
                to="/" 
                onClick={handleNavigation("/")}
                className={location.pathname === "/" ? "active" : ""}
              >
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/technologyconsultant"
                onClick={handleNavigation("/technologyconsultant")}
                className={location.pathname === "/technologyconsultant" ? "active" : ""}
              >
                <FaServicestack /> Services
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                onClick={handleNavigation("/blog")}
                className={location.pathname === "/blog" ? "active" : ""}
              >
                <FaBook /> Resources
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul className="footer-links">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <li key={index}>
                  <Link
                    to={service.path}
                    onClick={handleNavigation(service.path)}
                    className={location.pathname === service.path ? "active" : ""}
                  >
                    <IconComponent /> {service.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <Link
            to="/contact"
            className="contact-button"
            onClick={handleNavigation("/contact")}
            aria-label="Contact us for cybersecurity services"
          >
            <FaPhoneAlt /> CONTACT US
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="fcopyright">
            © {currentYear} DigiDefence. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="scroll-to-top"
            aria-label="Scroll to top"
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(5, 103, 116, 0.3)';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
