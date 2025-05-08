import React from "react";
import "../styles/compliance_assessment.css";
import {
  FaFileAlt,
  FaUserShield,
  FaPlayCircle,
  // FaServer,
  // FaShieldAlt,
  // FaCloudUploadAlt,
  // FaRobot,
  // FaCode,
  // FaDatabase,
} from "react-icons/fa";

const ComplianceAssessment = () => {
  const handleComplianceClick = (type) => {
    alert(`You selected: ${type}`);
  };

  return (
    <div className="service-page-container">
      {/* Main Content */}
      <main className="main-section">
        {/* Header */}
        <div className="header-section">
          <h1 className="main-title">Compliance Assessments</h1>
          <div className="header-line"></div>
        </div>

        {/* Service Overview */}
        <section className="service-overview">
          <div className="tech-icon-main">
            <FaFileAlt />
          </div>

          <p className="service-intro">
            Boost Your Compliance Success with Expert Guidance and Support
          </p>

          {/* About Section */}
          <div className="content-block">
            <h3>The Compliance Assessment Expert</h3>
            <p>
              DigiDefense excels in compliance assessments, continuously evaluating your data, platforms, and procedures to
              meet industry and regulatory standards. Our experts conduct pre-assessment planning, gap analysis, and provide
              actionable recommendations to address risks, ensuring compliance with regulations like GDPR, HIPAA, and PCI DSS.
              With a tailored project plan, DigiDefense supports you throughout the compliance process, keeping you aligned
              with best practices.
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div className="content-block">
            <h3>Why Choose DigiDefense for Your Compliance Assessments?</h3>
            <p>
              Compliance requirements can be complex and constantly evolving. DigiDefense simplifies the process with continuous
              assessments of your data, platforms, and procedures, ensuring alignment with standards like PCI DSS and GDPR. We
              assess your controls, identify gaps, and provide a clear path to compliance, helping you avoid penalties. With
              tailored guidance and dedicated support, DigiDefense ensures your compliance journey is seamless and effective.
            </p>
            
            <div className="services-list">
              <div className="service-item">
                <div className="service-icon">
                  <FaFileAlt />
                </div>
                <div className="service-content">
                  <h4>Stay Informed on Compliance Requirements</h4>
                  <p>
                    We keep you updated on evolving industry standards and regulations, ensuring you're always aware of compliance
                    requirements that impact your organization.
                  </p>
                </div>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <FaUserShield />
                </div>
                <div className="service-content">
                  <h4>Tailored Customer-Centric Support</h4>
                  <p>
                    We prioritize your unique needs, delivering exceptional support to address your challenges and exceed your
                    compliance expectations.
                  </p>
                </div>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <FaPlayCircle />
                </div>
                <div className="service-content">
                  <h4>Online Training for Compliance Awareness</h4>
                  <p>
                    We provide online training with up-to-date content on compliance topics, featuring current lessons and data
                    breach statistics to educate your team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="content-block">
            <h3>Secure Your Future: Uncover Compliance Risks Now!</h3>
            <p>
              Don't let compliance risks hold your organization back! Our expert assessments at DigiDefence identify
              vulnerabilities, protect your reputation, and ensure you operate responsibly. Take the first step toward a
              secure and compliant future with DigiDefence—start now and safeguard your success!
            </p>
            <div className="cta-section">
              <button className="cta-button">Get Started</button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="content-block">
            <h3>Top Compliance Assessment FAQs</h3>
            
            <div className="faq-container">
              <div className="faq-item">
                <input type="checkbox" id="faq1" className="faq-toggle" />
                <label htmlFor="faq1" className="faq-question">What is a compliance assessment?</label>
                <div className="faq-answer">
                  A compliance assessment is a process of evaluating whether an organization adheres to legal, regulatory, and
                  industry standards. It helps identify gaps and ensures that the organization operates in accordance with
                  applicable laws and ethical practices.
                </div>
              </div>
              
              <div className="faq-item">
                <input type="checkbox" id="faq2" className="faq-toggle" />
                <label htmlFor="faq2" className="faq-question">Why is a compliance assessment important?</label>
                <div className="faq-answer">
                  Compliance assessments are crucial for reducing legal and reputational risks. They ensure that organizations
                  meet regulatory requirements, avoid penalties, and maintain trust with stakeholders by demonstrating a
                  commitment to ethical practices.
                </div>
              </div>
              
              <div className="faq-item">
                <input type="checkbox" id="faq3" className="faq-toggle" />
                <label htmlFor="faq3" className="faq-question">What are the types of compliance assessments?</label>
                <div className="faq-answer">
                  <div className="compliance-types">
                    <button
                      className="compliance-button"
                      onClick={() => handleComplianceClick('PCI DSS')}
                    >
                      PCI DSS
                    </button>
                    <button
                      className="compliance-button"
                      onClick={() => handleComplianceClick('GLBA')}
                    >
                      GLBA
                    </button>
                    <button
                      className="compliance-button"
                      onClick={() => handleComplianceClick('CMMC')}
                    >
                      CMMC
                    </button>
                    <button
                      className="compliance-button"
                      onClick={() => handleComplianceClick('GDPR')}
                    >
                      GDPR
                    </button>
                    <button
                      className="compliance-button"
                      onClick={() => handleComplianceClick('HIPAA')}
                    >
                      HIPAA
                    </button>
                    <button
                      className="compliance-button"
                      onClick={() => handleComplianceClick('ACH')}
                    >
                      ACH
                    </button>
                    <button
                      className="compliance-button"
                      onClick={() => handleComplianceClick('FERPA')}
                    >
                      FERPA
                    </button>
                    <button
                      className="compliance-button"
                      onClick={() => handleComplianceClick('FACTA Red Flags')}
                    >
                      FACTA Red Flags
                    </button>
                    <button
                      className="compliance-button"
                      onClick={() => handleComplianceClick('LADMF')}
                    >
                      LADMF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ComplianceAssessment;