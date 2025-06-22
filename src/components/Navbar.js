import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { FaBars, FaChevronDown } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <div className="logo">
        <img className="logo-img" src={logo} alt="DigiDefence Logo" />
        <span>DigiDefence</span>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li
          className="dropdown"
          onMouseEnter={() => setDropdown("services")}
          onMouseLeave={() => setDropdown(null)}
        >
          <Link to="#">
            Services <FaChevronDown className="dropdown-icon" />
          </Link>
          {dropdown === "services" && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/technologyconsultant">Technology Consultancy</Link>
              </li>
              <li>
                <Link to="/compliance_assessment">Compliance Assessment</Link>
              </li>
              <li>
                <Link to="/risk-management">Risk Management</Link>
              </li>
              <li>
                <Link to="">DevSecOps Consultancy</Link>
              </li>
              <li>
                <Link to="">Cloud Security</Link>
              </li>
              <li>
                <Link to='/aiml'>AI/ML Security</Link>
              </li>
              <li>
                <Link to="">IOT Security</Link>
              </li>
              <li>
                <Link to="">Mobile and Web Development Security</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/aboutus">About Us</Link>
        </li>

        <li
          className="dropdown"
          onMouseEnter={() => setDropdown("resources")}
          onMouseLeave={() => setDropdown(null)}
        >
          <Link to="#">
            Resources <FaChevronDown className="dropdown-icon" />
          </Link>
          {dropdown === "resources" && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/case-studies">Case Studies</Link>
              </li>
            </ul>
          )}
        </li>

        <li
          className="dropdown"
          onMouseEnter={() => setDropdown("contact")}
          onMouseLeave={() => setDropdown(null)}
        >
          <Link to="#">
            Contact <FaChevronDown className="dropdown-icon" />
          </Link>
          {dropdown === "contact" && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/support">Support</Link>
              </li>
              <li>
                <Link to="/inquiries">General Inquiries</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
