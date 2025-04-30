import React from "react";
import { Link } from "react-router-dom";
import "../styles/CaseStudies.css";
import CaseStudyImg from "../assets/caseStudy.png";
import Navbar from "../components/Navbar";

const CaseStudies = () => {
  return (
    <>
      <Navbar />
      <div className="case-studies-container">
        {/* Hero Section */}
        <div className="case-studies-hero">
          <div className="case-studies-hero-content">
            <h1 className="case-studies-hero-h1">Case Studies</h1>
            <hr className="case-studies-hero-hr" />
            <p className="case-studies-hero-p">Study of professional cases</p>
            <button className="case-studies-hero-button">GET STARTED TODAY</button>
          </div>
        </div>

        {/* Main Content Section */}
        <section className="case-studies-DigiDefense-section">
          <h2 className="case-studies-section-title case-studies-red-heading case-studies-same-heading">
            Our Successful Case Studies
          </h2>
          <p className="case-studies-section-subtext">
            Explore how we've helped organizations strengthen their cybersecurity posture through our comprehensive risk assessment solutions.
          </p>
          
          <div className="case-studies-image-wrapper">
            <img 
              src={CaseStudyImg} 
              alt="Case Study Examples" 
              className="case-studies-main-image"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="case-studies-cta-section">
          <div className="case-studies-cta-content-wrapper">
            <div className="case-studies-cta-content">
              <h2 className="case-studies-cta-content-h2">Ready to Secure Your Organization?</h2>
              <p className="case-studies-cta-content-p">
                Contact us today to learn how our risk assessment services can protect your business from evolving cybersecurity threats.
              </p>
            </div>
            <Link to="/contact" className="case-studies-cta-button">
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;