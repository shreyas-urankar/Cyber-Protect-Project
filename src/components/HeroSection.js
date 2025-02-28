import React from "react";
import "../styles/HeroSection.css"; // Ensure this path is correct
import cyberVideo from "../assets/background.mp4"; // Ensure this path is correct
import logo from "../assets/Cutout of logo (2) (1).png"; // Ensure this path is correct
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="video-container">
        <video autoPlay loop muted className="video-bg">
          <source src={cyberVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Your Shield <span className="glow"> in the Digital Realm</span></h1>
        <p>Your trusted defense against digital threats, securing data, IT, and brand integrity.</p>
        <h3><span className="glow1"> Launching Soon</span></h3>
      </div>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <footer className="footer">
        <div className="footer-icons">
          <a href="https://www.linkedin.com/company/cyber-protect-solutions" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        </div>
      </footer>
    </section>
  );
};

export default HeroSection;
