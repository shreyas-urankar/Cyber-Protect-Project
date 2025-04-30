import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RiskAssessments.css';
import logo from '../assets/logo.jpg';

const RiskAssessments = () => {
  return (
    <div className="risk-assessment-container">
      {/* Hero Section */}
      <div className="risk-hero">
        <div className="risk-hero-content">
          <h1 className="risk-hero-h1">Risk Assessments</h1>
          <hr className="risk-hero-hr" />
          <p className="risk-hero-p">Identifying and mitigating cybersecurity risks effectively</p>
          <button className="risk-hero-button">Contact Us</button>
        </div>
      </div>

      {/* Cards Section */}
      <section className="risk-DigiDefense-section">
        <h2 className="risk-section-title risk-red-heading risk-same-heading">
          Comprehensive Risk Assessment Solutions
        </h2>
        <p className="risk-section-subtext">
          Our risk assessment services help you identify vulnerabilities in your IT infrastructure,
          analyze potential threats, and implement effective mitigation strategies to protect your
          organization from cybersecurity risks.
        </p>
        <div className="risk-cards-container">
          {/* Threat Identification Card */}
          <div className="risk-card">
            <div className="risk-card-icon-wrapper">
              <img
                src="https://img.icons8.com/ios-filled/50/FF6B6B/security-checked.png"
                alt="Threat Identification"
                className="risk-card-icon"
              />
            </div>
            <h3 className="risk-card-title">Threat Identification</h3>
            <p className="risk-card-text">
              Detecting potential vulnerabilities in your IT infrastructure to prevent security breaches
              before they occur.
            </p>
          </div>

          {/* Vulnerability Analysis Card */}
          <div className="risk-card">
            <div className="risk-card-icon-wrapper">
              <img
                src="https://img.icons8.com/ios-filled/50/4ECDC4/search.png"
                alt="Vulnerability Analysis"
                className="risk-card-icon"
              />
            </div>
            <h3 className="risk-card-title">Vulnerability Analysis</h3>
            <p className="risk-card-text">
              Examining weak points in your systems to enhance security layers and protect against
              potential attacks.
            </p>
          </div>

          {/* Impact Assessment Card */}
          <div className="risk-card">
            <div className="risk-card-icon-wrapper">
              <img
                src="https://img.icons8.com/ios-filled/50/45B7D1/analytics.png"
                alt="Impact Assessment"
                className="risk-card-icon"
              />
            </div>
            <h3 className="risk-card-title">Impact Assessment</h3>
            <p className="risk-card-text">
              Evaluating risk severity and potential consequences to prioritize security improvements
              effectively.
            </p>
          </div>

          {/* Action Plan Card */}
          <div className="risk-card">
            <div className="risk-card-icon-wrapper">
              <img
                src="https://img.icons8.com/ios-filled/50/FFBE5D/task-completed.png"
                alt="Action Plan"
                className="risk-card-icon"
              />
            </div>
            <h3 className="risk-card-title">Action Plan</h3>
            <p className="risk-card-text">
              Implementing mitigation strategies to build future resilience against cybersecurity threats.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Assessment Section */}
      <section className="risk-image-section">
        <div className="risk-image-content">
          <div className="risk-image-text">
            <h2 className="risk-image-title">Impact Assessment</h2>
            <p className="risk-image-description">
              Evaluating risk severity and potential consequences to prioritize security improvements effectively.
            </p>
          </div>
          <div className="risk-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Impact Assessment Visualization" 
              className="risk-section-image"
            />
          </div>
        </div>
      </section>

      {/* Action Plan Section */}
      <section className="risk-image-section alt">
        <div className="risk-image-content">
          <div className="risk-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Action Plan Visualization" 
              className="risk-section-image"
            />
          </div>
          <div className="risk-image-text">
            <h2 className="risk-image-title">Action Plan</h2>
            <p className="risk-image-description">
              Implementing mitigation strategies to build future resilience against cybersecurity threats.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="risk-case-study-section">
        <div className="risk-case-study-content-wrapper">
          <div className="risk-case-study-content">
            <h2 className="risk-case-study-content-h2">See How We Help Mitigate Cybersecurity Risks</h2>
            <p className="risk-case-study-content-p">
              Discover how organizations like yours are using our expert risk assessments to strengthen
              their security posture and protect against evolving threats.
            </p>
          </div>
          <Link to="/case-studies" className="risk-case-study-button">
            Read Case Studies
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RiskAssessments;