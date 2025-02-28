import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaChevronDown, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "../styles/Navbar.css";
import logo from "../assets/logo.jpg"; // Ensure logo file exists

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!Object.values(navRefs.current).some(ref => ref?.contains(event.target))) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="DigiDefence Logo" className="logo-img" />
        DigiDefence
      </div>

      {/* Navbar Links */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="javascript:void(0);">Home</a></li>

        {/* Dropdown Items */}
        {["Services", "Products", "Resources", "Contact"].map((item, index) => (
          <li key={index} className="dropdown"
            ref={el => navRefs.current[item] = el}
            onMouseEnter={() => setDropdownOpen(item)}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <a href="javascript:void(0);">
              {item} <FaChevronDown className="dropdown-icon" />
            </a>
            {dropdownOpen === item && (
              <ul className="dropdown-menu">
                {item === "Contact" ? (
                  <>
                    <li><a href="https://www.linkedin.com/company/cyber-protect-solutions" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a></li>
                  </>
                ) : (
                  <li><a href="javascript:void(0);">Coming Soon</a></li>
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes className="menu-icon close" /> : <FaBars className="menu-icon open" />}
      </div>
    </nav>
  );
};

export default Navbar;
