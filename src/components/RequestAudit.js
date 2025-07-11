import React from "react";
import "../styles/RequestAudit.css";
import { FaClipboardCheck } from "react-icons/fa";

const RequestAudit = () => {
  return (
    <div className="rservice-page-container">
      <main className="rmain-section">
        <div className="rheader-section">
          <h1 className="rmain-title">Request AI Security Audit</h1>
          <div className="rheader-line"></div>
        </div>

        <section className="rservice-overview">
          <div className="r-tech-icon-main">
            <FaClipboardCheck />
          </div>

          <p className="rservice-intro">
            Begin securing your AI systems today by requesting our comprehensive 
            security audit. Our experts will evaluate your models, data pipelines, 
            and deployment infrastructure for vulnerabilities.
          </p>

          <div className="rcontent-block" style={{ paddingTop: "30px" }}>
            <h3>Our Audit Process</h3>
            <div className="rprocess-steps">
              <div className="rprocess-step">
                <div className="rstep-number">1</div>
                <div className="rstep-content">
                  <h4>Initial Consultation</h4>
                  <p>
                    We'll discuss your AI systems, security concerns, and specific 
                    requirements to tailor our audit approach.
                  </p>
                </div>
              </div>
              <div className="rprocess-step">
                <div className="rstep-number">2</div>
                <div className="rstep-content">
                  <h4>System Assessment</h4>
                  <p>
                    Our team will conduct a thorough evaluation of your AI 
                    infrastructure, models, and data handling processes.
                  </p>
                </div>
              </div>
              <div className="rprocess-step">
                <div className="rstep-number">3</div>
                <div className="rstep-content">
                  <h4>Detailed Report</h4>
                  <p>
                    You'll receive a comprehensive report with findings, risk 
                    assessments, and actionable recommendations.
                  </p>
                </div>
              </div>
              <div className="rprocess-step">
                <div className="rstep-number">4</div>
                <div className="rstep-content">
                  <h4>Remediation Support</h4>
                  <p>
                    We offer guidance and support to help you implement the 
                    recommended security improvements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rcontent-block">
            <h3>Request Your Audit</h3>
            <form className="raudit-request-form">
              <div className="rform-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" required />
              </div>
              <div className="rform-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" required />
              </div>
              <div className="rform-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="rform-group">
                <label htmlFor="details">Project Details</label>
                <textarea id="details" rows="5" required></textarea>
              </div>
              <button type="submit" className="rcta-button-primary">
                Submit Request
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RequestAudit;