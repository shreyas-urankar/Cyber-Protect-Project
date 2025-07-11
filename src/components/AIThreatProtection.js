import React from "react";
import "../styles/AIThreatProtection.css";
import { FaShieldAlt, FaBug, FaUserSecret, FaLock } from "react-icons/fa";

const AIThreatProtection = () => {
  return (
    <div className="threat-service-page-container">
      <main className="threat-main-section">
        <div className="threat-header-section">
          <h1 className="threat-main-title">AI Threat Protection</h1>
          <div className="threat-header-line"></div>
        </div>

        <section className="threat-service-overview">
          <div className="threat-tech-icon-main">
            <FaShieldAlt />
          </div>

          <p className="threat-service-intro">
            Protect your AI systems from evolving threats with our comprehensive 
            security solutions tailored for machine learning environments.
          </p>

          <div className="threat-content-block">
            <h3>Common AI Security Threats</h3>
            <div className="threat-services-list">
              <div className="threat-service-item">
                <div className="threat-service-icon">
                  <FaBug />
                </div>
                <div className="threat-service-content">
                  <h4>Adversarial Attacks</h4>
                  <p>
                    Inputs designed to fool your model into making incorrect 
                    predictions or classifications.
                  </p>
                </div>
              </div>

              <div className="threat-service-item">
                <div className="threat-service-icon">
                  <FaUserSecret />
                </div>
                <div className="threat-service-content">
                  <h4>Model Inversion</h4>
                  <p>
                    Attacks that attempt to reconstruct training data or 
                    extract sensitive information from your model.
                  </p>
                </div>
              </div>

              <div className="threat-service-item">
                <div className="threat-service-icon">
                  <FaLock />
                </div>
                <div className="threat-service-content">
                  <h4>Data Poisoning</h4>
                  <p>
                    Malicious manipulation of training data to compromise 
                    model performance or insert backdoors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="threat-content-block">
            <h3>Our Protection Solutions</h3>
            <div className="threat-process-steps">
              <div className="threat-process-step">
                <div className="threat-step-number">1</div>
                <div className="threat-step-content">
                  <h4>Threat Assessment</h4>
                  <p>
                    Identify potential vulnerabilities in your AI systems 
                    and data pipelines.
                  </p>
                </div>
              </div>
              <div className="threat-process-step">
                <div className="threat-step-number">2</div>
                <div className="threat-step-content">
                  <h4>Defense Implementation</h4>
                  <p>
                    Deploy robust protections including adversarial training, 
                    input sanitization, and model hardening.
                  </p>
                </div>
              </div>
              <div className="threat-process-step">
                <div className="threat-step-number">3</div>
                <div className="threat-step-content">
                  <h4>Continuous Monitoring</h4>
                  <p>
                    Real-time detection of anomalous inputs, model drift, 
                    and potential attacks.
                  </p>
                </div>
              </div>
              <div className="threat-process-step">
                <div className="threat-step-number">4</div>
                <div className="threat-step-content">
                  <h4>Incident Response</h4>
                  <p>
                    Rapid containment and remediation of any security 
                    incidents affecting your AI systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="threat-cta-buttons">
            <h3>Protect Your AI From Emerging Threats</h3>
            <div className="threat-cta-button-group">
              <button className="threat-cta-button-primary">
                Get Threat Assessment
              </button>
              <button className="threat-cta-button-tertiary">
                View Threat Report
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AIThreatProtection;