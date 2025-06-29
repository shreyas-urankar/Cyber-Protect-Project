import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isAtTop, setIsAtTop] = useState(window.scrollY === 0);
  const [activeLink, setActiveLink] = useState("");
  const lastMouseY = useRef(window.scrollY);
  const lastScrollY = useRef(window.scrollY);
  const hideTimeout = useRef(null);
  const navbarRef = useRef(null);
  const location = useLocation();

  // Update active link based on current location
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

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
      setShowNavbar(true);
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    } else if (!isInteracting) {
      startHideTimeout();
    }
    lastScrollY.current = currentScrollY;
  }, [isInteracting, startHideTimeout]);

  const handleMouseMove = useCallback(
    (e) => {
      if (isAtTop || isInteracting) {
        return;
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
      startHideTimeout();
    }
  }, [isAtTop, startHideTimeout]);

  const handleClick = useCallback(() => {
    setIsInteracting(true);
    setShowNavbar(true);
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    // Close dropdown when menu is toggled
    setDropdown(null);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdown(null);
  };

  const handleDropdownToggle = (dropdownName) => {
    if (dropdown === dropdownName) {
      setDropdown(null);
    } else {
      setDropdown(dropdownName);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleMouseMove, handleScroll]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
        setDropdown(null);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

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
          <Link 
            to="/" 
            className={activeLink === "/" ? "active" : ""}
            onClick={handleLinkClick}
          >
            Home
          </Link>
        </li>

        <li
          className="dropdown"
          onMouseEnter={() => !menuOpen && setDropdown("services")}
          onMouseLeave={() => !menuOpen && setDropdown(null)}
        >
          <Link 
            to="#" 
            onClick={() => handleDropdownToggle("services")}
            className={activeLink.includes("services") ? "active" : ""}
          >
            Services <FaChevronDown className="dropdown-icon" />
          </Link>
          {(dropdown === "services" || (menuOpen && dropdown === "services")) && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/technologyconsultant" onClick={handleLinkClick}>
                  Technology Consultancy
                </Link>
              </li>
              <li>
                <Link to="/compliance_assessment" onClick={handleLinkClick}>
                  Compliance Assessment
                </Link>
              </li>
              <li>
                <Link to="/risk-management" onClick={handleLinkClick}>
                  Risk Management
                </Link>
              </li>
              <li>
                <Link to="/cloudsecurity" onClick={handleLinkClick}>
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link to="/aiml" onClick={handleLinkClick}>
                  AI/ML Security
                </Link>
              </li>
              <li>
                <Link to="/iot-security" onClick={handleLinkClick}>
                  IOT Security
                </Link>
              </li>
              <li>
                <Link to="/mobilewebsecurity" onClick={handleLinkClick}>
                  Mobile and Web Development Security
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li
          className="dropdown"
          onMouseEnter={() => !menuOpen && setDropdown("resources")}
          onMouseLeave={() => !menuOpen && setDropdown(null)}
        >
          <Link 
            to="#" 
            onClick={() => handleDropdownToggle("resources")}
            className={activeLink.includes("resources") ? "active" : ""}
          >
            Resources <FaChevronDown className="dropdown-icon" />
          </Link>
          {(dropdown === "resources" || (menuOpen && dropdown === "resources")) && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/blog" onClick={handleLinkClick}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/case-studies" onClick={handleLinkClick}>
                  Case Studies
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link 
            to="/contact" 
            className={activeLink === "/contact" ? "active" : ""}
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </li>
      </ul>

      <button 
        className="menu-toggle" 
        onClick={handleMenuToggle}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
