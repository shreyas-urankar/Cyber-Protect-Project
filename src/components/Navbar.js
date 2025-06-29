import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { FaBars, FaChevronDown } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true); // Start visible
  const [isInteracting, setIsInteracting] = useState(false);
  const [isAtTop, setIsAtTop] = useState(window.scrollY === 0); // Track if at top
  const lastMouseY = useRef(window.scrollY);
  const lastScrollY = useRef(window.scrollY); // Track last scroll position
  const hideTimeout = useRef(null);
  const navbarRef = useRef(null);

  const startHideTimeout = useCallback(() => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
    hideTimeout.current = setTimeout(() => {
      if (!isInteracting && !isAtTop) {
        setShowNavbar(false);
      }
    }, 1300);
  }, [isInteracting, isAtTop]);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const atTop = currentScrollY === 0;
    setIsAtTop(atTop);

    if (atTop) {
      setShowNavbar(true);
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    } else if (currentScrollY < lastScrollY.current) {
      setShowNavbar(true); // Show immediately when scrolling up
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    } else if (!isInteracting) {
      startHideTimeout(); // Start 1.3s delay when scrolling down
    }
    lastScrollY.current = currentScrollY;
  }, [isInteracting, startHideTimeout]);

  const handleMouseMove = useCallback(
    (e) => {
      if (isAtTop || isInteracting) {
        return; // Ignore mouse movement when at top or interacting
      }
      const currentMouseY = e.clientY;
      if (currentMouseY < lastMouseY.current || currentMouseY < 100) {
        setShowNavbar(true);
        if (hideTimeout.current) {
          clearTimeout(hideTimeout.current);
        }
      }
      lastMouseY.current = currentMouseY;
    },
    [isAtTop, isInteracting]
  );

  const handleMouseEnter = useCallback(() => {
    setIsInteracting(true);
    setShowNavbar(true);
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsInteracting(false);
    if (!isAtTop) {
      startHideTimeout(); // Start 1.3s delay when leaving
    }
  }, [isAtTop, startHideTimeout]);

  const handleClick = useCallback(() => {
    setIsInteracting(true);
    setShowNavbar(true);
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleMouseMove, handleScroll]);

  return (
    <nav
      ref={navbarRef}
      className={`navbar ${showNavbar ? "visible" : "hidden"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
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
                <Link to="/cloudsecurity">Cloud Security</Link>
              </li>
              <li>
                <Link to="/aiml">AI/ML Security</Link>
              </li>
              <li>
                <Link to="/iot-security">IOT Security</Link>
              </li>
              <li>
                <Link to="/mobilewebsecurity">
                  Mobile and Web Development Security
                </Link>
              </li>
            </ul>
          )}
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
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
