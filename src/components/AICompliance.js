import React from "react";
import "../styles/AICompliance.css";
import { FaBalanceScale, FaGavel, FaFileSignature } from "react-icons/fa";

const AICompliance = () => {
  return (
    <div className="aicservice-page-container">
      <main className="aicmain-section">
        <div className="aicheader-section">
          <h1 className="aicmain-title">AI Compliance & Regulations</h1>
          <div className="aicheader-line"></div>
        </div>

        <section className="aicservice-overview">
          <div className="aic-tech-icon-main">
            <FaBalanceScale />
          </div>

          <p className="aicservice-intro">
            Ensure your AI systems meet all regulatory requirements and ethical 
            guidelines with our comprehensive compliance audit services.
          </p>

          <div className="aiccontent-block">
            <h3>Key Compliance Frameworks</h3>
            <div className="aicindustry-expertise">
              <div className="aicindustry-item">
                <h4>EU AI Act</h4>
                <ul>
                  <li>Risk classification assessment</li>
                  <li>Transparency requirements</li>
                  <li>High-risk system compliance</li>
                </ul>
              </div>
              <div className="aicindustry-item">
                <h4>GDPR & Data Privacy</h4>
                <ul>
                  <li>Data protection impact assessments</li>
                  <li>Right to explanation</li>
                  <li>Automated decision-making rules</li>
                </ul>
              </div>
              <div className="aicindustry-item">
                <h4>Industry-Specific</h4>
                <ul>
                  <li>Healthcare (FDA, HIPAA)</li>
                  <li>Financial (FCRA, ECOA)</li>
                  <li>Public sector (Algorithmic Accountability)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="aiccontent-block">
            <h3>Our Compliance Services</h3>
            <div className="aicservices-list">
              <div className="aicservice-item">
                <div className="aicservice-icon">
                  <FaGavel />
                </div>
                <div className="aicservice-content">
                  <h4>Regulatory Gap Analysis</h4>
                  <p>
                    Identify where your AI systems fall short of current and 
                    upcoming regulations.
                  </p>
                </div>
              </div>

              <div className="aicservice-item">
                <div className="aicservice-icon">
                  <FaFileSignature />
                </div>
                <div className="aicservice-content">
                  <h4>Documentation Review</h4>
                  <p>
                    Audit your technical documentation, data sheets, and 
                    model cards for compliance.
                  </p>
                </div>
              </div>

              <div className="aicservice-item">
                <div className="aicservice-icon">
                  <FaBalanceScale />
                </div>
                <div className="aicservice-content">
                  <h4>Ethical AI Assessment</h4>
                  <p>
                    Evaluate your systems against ethical AI principles and 
                    responsible AI frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="aiccta-buttons">
            <h3>Ensure Your AI Meets All Regulations</h3>
            <div className="aiccta-button-group">
              <button className="aiccta-button-primary">
                Get Compliance Audit
              </button>
              <button className="aiccta-button-secondary">
                Download Compliance Checklist
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AICompliance;