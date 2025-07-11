import React from "react";
import { Link } from "react-router-dom";
import "../styles/RiskAssessmentFAQs.css";
import { FaArrowRight, FaQuestionCircle } from "react-icons/fa";

const FAQs = () => {
  return (
    <div className="fservice-page-container">
      <main className="fmain-section">
        <div className="fheader-section">
          <h1 className="fmain-title">Risk Assessment FAQs</h1>
          <div className="fheader-line"></div>
        </div>

        <section className="fservice-overview">
          <div className="f-tech-icon-main">
            <FaQuestionCircle />
          </div>

          <p className="fservice-intro">
            Answers to common questions about our risk assessment services to help
            you understand our process and benefits.
          </p>

          <div className="fcontent-block">
            <h3>Frequently Asked Questions</h3>
            <div className="ffaqs-list">
              <div className="ffaq-item">
                <h4>
                  <FaQuestionCircle /> What is a cybersecurity risk assessment?
                </h4>
                <p>
                  A cybersecurity risk assessment identifies, evaluates, and
                  prioritizes risks to your organization's information assets,
                  helping you mitigate potential threats.
                </p>
              </div>
              <div className="ffaq-item">
                <h4>
                  <FaQuestionCircle /> How long does a risk assessment take?
                </h4>
                <p>
                  The duration depends on the scope and complexity, typically
                  ranging from 2 weeks to 2 months for comprehensive assessments.
                </p>
              </div>
              <div className="ffaq-item">
                <h4>
                  <FaQuestionCircle /> What deliverables can we expect?
                </h4>
                <p>
                  You’ll receive a detailed report with risk findings, prioritized
                  recommendations, and a remediation roadmap tailored to your
                  organization.
                </p>
              </div>
              <div className="ffaq-item">
                <h4>
                  <FaQuestionCircle /> Do you offer ongoing support?
                </h4>
                <p>
                  Yes, we provide continuous monitoring and reassessments to ensure
                  your security posture evolves with emerging threats.
                </p>
              </div>
            </div>
          </div>

          <div className="fcontent-block">
            <h3>Have More Questions?</h3>
            <p>
              Contact our team for personalized answers to your cybersecurity
              queries.
            </p>
            <div className="fcta-section">
              <Link to="/contact" className="fcta-button">
                Ask a Question <FaArrowRight style={{ marginLeft: "8px" }} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FAQs;