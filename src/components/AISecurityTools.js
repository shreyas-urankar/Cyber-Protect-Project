import React from "react";
import "../styles/AISecurityTools.css";
import { FaTools, FaRobot, FaCodeBranch, FaChartBar } from "react-icons/fa";

const AISecurityTools = () => {
  return (
    <div className="security-page-container">
      <main className="security-main-section">
        <div className="security-header-section">
          <h1 className="security-main-title">AI Security Tools</h1>
          <div className="security-header-line"></div>
        </div>

        <section className="security-service-overview">
          <div className="security-tech-icon-main">
            <FaTools />
          </div>

          <p className="security-service-intro">
            Leverage our specialized tools and frameworks to secure your AI 
            systems throughout their lifecycle.
          </p>

          <div className="security-content-block">
            <h3>Our Tool Categories</h3>
            <div className="security-tools-grid">
              <div className="security-tool-category">
                <h4><FaRobot /> Adversarial Testing</h4>
                <ul>
                  <li>CleverHans</li>
                  <li>IBM Adversarial Robustness Toolbox</li>
                  <li>Foolbox</li>
                  <li>TextAttack</li>
                </ul>
              </div>
              <div className="security-tool-category">
                <h4><FaCodeBranch /> Model Analysis</h4>
                <ul>
                  <li>TensorFlow Privacy</li>
                  <li>AI Fairness 360</li>
                  <li>SHAP/SALib</li>
                  <li>Alibi Explain</li>
                </ul>
              </div>
              <div className="security-tool-category">
                <h4><FaChartBar /> Monitoring</h4>
                <ul>
                  <li>MLSecOps frameworks</li>
                  <li>Model Signing Tools</li>
                  <li>AI Firewalls</li>
                  <li>Drift Detection</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="security-content-block">
            <h3>Tool Integration Services</h3>
            <div className="security-services-list">
              <div className="security-service-item">
                <div className="security-service-content">
                  <h4>Custom Tool Development</h4>
                  <p>
                    Build specialized tools tailored to your unique AI 
                    security requirements.
                  </p>
                </div>
              </div>

              <div className="security-service-item">
                <div className="security-service-content">
                  <h4>Existing Tool Integration</h4>
                  <p>
                    Implement and configure open-source or commercial 
                    AI security tools in your environment.
                  </p>
                </div>
              </div>

              <div className="security-service-item">
                <div className="security-service-content">
                  <h4>Tool Training</h4>
                  <p>
                    Comprehensive training for your team on using AI 
                    security tools effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="security-cta-buttons">
            <h3>Enhance Your AI Security Posture</h3>
            <div className="security-cta-button-group">
              <button className="security-cta-button-primary">
                Request Tools Demo
              </button>
              <button className="security-cta-button-secondary">
                Download Tools Guide
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AISecurityTools;