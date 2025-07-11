import React from "react";
import "../styles/AIModelAudit.css";
import { FaBrain, FaShieldAlt, FaChartLine, FaCheckCircle } from "react-icons/fa";

const AIModelAudit = () => {
  return (
    <div className="audit-page-container">
      <main className="audit-main-section">
        <div className="audit-header-section">
          <h1 className="audit-main-title">AI Model Integrity Audit</h1>
          <div className="audit-header-line"></div>
        </div>

        <section className="audit-service-overview">
          <div className="audit-tech-icon-main">
            <FaBrain />
          </div>

          <p className="audit-service-intro">
            Our AI Model Integrity Audit ensures your machine learning models are robust, 
            secure, and free from vulnerabilities that could compromise their performance 
            or lead to security breaches.
          </p>

          <div className="audit-content-block">
            <h3>Comprehensive Model Assessment</h3>
            <div className="audit-services-list">
              <div className="audit-service-item">
                <div className="audit-service-icon">
                  <FaShieldAlt />
                </div>
                <div className="audit-service-content">
                  <h4>Adversarial Robustness Testing</h4>
                  <p>
                    Evaluate your model's resistance to adversarial attacks designed 
                    to manipulate its outputs.
                  </p>
                  <ul className="audit-service-features">
                    <li>FGSM, PGD, and CW attack simulations</li>
                    <li>Decision boundary analysis</li>
                    <li>Robustness score calculation</li>
                  </ul>
                </div>
              </div>

              <div className="audit-service-item">
                <div className="audit-service-icon">
                  <FaChartLine />
                </div>
                <div className="audit-service-content">
                  <h4>Model Fairness Evaluation</h4>
                  <p>
                    Identify and mitigate biases in your model that could lead to 
                    discriminatory outcomes.
                  </p>
                  <ul className="audit-service-features">
                    <li>Demographic parity analysis</li>
                    <li>Equal opportunity assessment</li>
                    <li>Bias mitigation recommendations</li>
                  </ul>
                </div>
              </div>

              <div className="audit-service-item">
                <div className="audit-service-icon">
                  <FaCheckCircle />
                </div>
                <div className="audit-service-content">
                  <h4>Explainability Audit</h4>
                  <p>
                    Ensure your model's decisions can be explained and justified, 
                    meeting regulatory requirements.
                  </p>
                  <ul className="audit-service-features">
                    <li>SHAP/LIME analysis</li>
                    <li>Feature importance ranking</li>
                    <li>Decision path visualization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="audit-content-block">
            <h3>Our Model Audit Process</h3>
            <div className="audit-process-steps">
              <div className="audit-process-step">
                <div className="audit-step-number">1</div>
                <div className="audit-step-content">
                  <h4>Model Analysis</h4>
                  <p>
                    Comprehensive review of model architecture, training data, 
                    and decision logic.
                  </p>
                </div>
              </div>
              <div className="audit-process-step">
                <div className="audit-step-number">2</div>
                <div className="audit-step-content">
                  <h4>Vulnerability Testing</h4>
                  <p>
                    Systematic testing for adversarial vulnerabilities, 
                    backdoors, and data poisoning.
                  </p>
                </div>
              </div>
              <div className="audit-process-step">
                <div className="audit-step-number">3</div>
                <div className="audit-step-content">
                  <h4>Performance Validation</h4>
                  <p>
                    Verification of model accuracy, fairness, and robustness 
                    across diverse inputs.
                  </p>
                </div>
              </div>
              <div className="audit-process-step">
                <div className="audit-step-number">4</div>
                <div className="audit-step-content">
                  <h4>Remediation Plan</h4>
                  <p>
                    Detailed recommendations to address identified vulnerabilities 
                    and improve model security.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="audit-cta-buttons">
            <h3>Secure Your AI Models Today</h3>
            <div className="audit-cta-button-group">
              <button className="audit-cta-button-primary">
                Request Model Audit
              </button>
              <button className="audit-cta-button-secondary">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AIModelAudit;