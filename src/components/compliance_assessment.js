import React from "react";
import "../styles/compliance_assessment.css";
import {
  FaFileAlt,
  FaUserShield,
  FaClipboardCheck,
  FaShieldAlt,
  FaLaptopCode,
  FaHandshake,
  FaBalanceScale,
  FaRegChartBar,
  FaSearchPlus,
  FaUsers,
  FaLock, // Added for Data Security Compliance
  FaCloud, // Added for Cloud Compliance
} from "react-icons/fa";
import { FaScrewdriverWrench, FaArrowTrendUp } from "react-icons/fa6";

const ComplianceAssessment = () => {
  return (
    <div className="compliance-service-page-container">
      <main className="compliance-main-section">
        <div className="compliance-header-section">
          <h1 className="compliance-main-title">Compliance Assessments</h1>
          <div className="compliance-header-line"></div>
        </div>

        <section className="compliance-service-overview">
          <div className="compliance-tech-icon-main">
            <FaFileAlt />
          </div>

          <p className="compliance-service-intro">
            In today's regulatory environment, organizations face increasingly
            complex compliance requirements across various standards and
            regulations. Our Compliance Assessment services help businesses
            evaluate their data handling practices, security controls, and
            operational procedures to ensure alignment with industry regulations
            and standards. We identify compliance gaps, develop remediation
            strategies, and provide ongoing support to maintain compliance in an
            ever-changing regulatory landscape.
          </p>

          <div className="compliance-content-block">
            <h3>Our Services</h3>
            <p>
              We offer comprehensive compliance assessment services tailored to
              your industry and specific regulatory requirements. Our experts
              work closely with your team to evaluate your current compliance
              posture and provide actionable recommendations.
            </p>
            <div className="compliance-services-list">
              <div className="compliance-service-item">
                <div className="compliance-service-icon">
                  <FaClipboardCheck />
                </div>
                <div className="compliance-service-content">
                  <h4>Gap Analysis</h4>
                  <p>
                    Comprehensive evaluation of your current controls against
                    compliance requirements, identifying areas that need
                    improvement to achieve full compliance.
                  </p>
                </div>
              </div>
              <div className="compliance-service-item">
                <div className="compliance-service-icon">
                  <FaShieldAlt />
                </div>
                <div className="compliance-service-content">
                  <h4>Risk Assessment</h4>
                  <p>
                    Identification and evaluation of compliance risks, their
                    potential impact, and development of mitigation strategies
                    to address them effectively.
                  </p>
                </div>
              </div>
              <div className="compliance-service-item">
                <div className="compliance-service-icon">
                  <FaScrewdriverWrench />
                </div>
                <div className="compliance-service-content">
                  <h4>Remediation Planning</h4>
                  <p>
                    Development of detailed remediation roadmaps with
                    prioritized action items to address compliance gaps
                    efficiently and cost-effectively.
                  </p>
                </div>
              </div>
              <div className="compliance-service-item">
                <div className="compliance-service-icon">
                  <FaUserShield />
                </div>
                <div className="compliance-service-content">
                  <h4>Compliance Training</h4>
                  <p>
                    Customized training programs to educate your team on
                    compliance requirements, best practices, and their role in
                    maintaining organizational compliance.
                  </p>
                </div>
              </div>
              <div className="compliance-service-item">
                <div className="compliance-service-icon">
                  <FaSearchPlus />
                </div>
                <div className="compliance-service-content">
                  <h4>Compliance Monitoring</h4>
                  <p>
                    Implementation of ongoing monitoring processes to maintain
                    compliance posture and quickly identify and address new
                    compliance issues.
                  </p>
                </div>
              </div>
              <div className="compliance-service-item">
                <div className="compliance-service-icon">
                  <FaRegChartBar />
                </div>
                <div className="compliance-service-content">
                  <h4>Compliance Reporting</h4>
                  <p>
                    Development of comprehensive compliance reports for internal
                    stakeholders, regulatory bodies, and business partners,
                    demonstrating your commitment to compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="compliance-content-block">
            <h3>Types of Compliance Assessments</h3>
            <p>
              Our compliance assessment services cover various regulatory
              frameworks and industry standards. We tailor our approach based on
              your specific industry and compliance requirements, ensuring
              comprehensive coverage of all applicable regulations.
            </p>
            <div className="compliance-compliance-types">
              <div className="compliance-compliance-card">
                <h4>
                  <FaBalanceScale /> Industry Standards
                </h4>
                <ul>
                  <li>PCI DSS - Payment Card Industry</li>
                  <li>CMMC - Cybersecurity Maturity Model</li>
                  <li>SOC 2 - Service Organization Control</li>
                  <li>ISO 27001 - Information Security</li>
                </ul>
              </div>
              <div className="compliance-compliance-card">
                <h4>
                  <FaShieldAlt /> Regulatory Compliance
                </h4>
                <ul>
                  <li>GDPR - General Data Protection</li>
                  <li>HIPAA - Healthcare</li>
                  <li>GLBA - Financial Services</li>
                  <li>FERPA - Educational Institutions</li>
                </ul>
              </div>
              <div className="compliance-compliance-card">
                <h4>
                  <FaLaptopCode /> Financial Compliance
                </h4>
                <ul>
                  <li>ACH - Automated Clearing House</li>
                  <li>FACTA - Fair Credit Reporting</li>
                  <li>LADMF - Limited Access Death Master File</li>
                  <li>SOX - Sarbanes-Oxley Act</li>
                </ul>
              </div>
              <div className="compliance-compliance-card">
                <h4>
                  <FaUsers /> Privacy Regulations
                </h4>
                <ul>
                  <li>CCPA - California Consumer Privacy</li>
                  <li>CPRA - California Privacy Rights</li>
                  <li>VCDPA - Virginia Consumer Data Protection</li>
                  <li>CTDPA - Connecticut Data Privacy</li>
                </ul>
              </div>
              <div className="compliance-compliance-card">
                <h4>
                  <FaLock /> Data Security Compliance
                </h4>
                <ul>
                  <li>NIST SP 800-53 - Security Controls</li>
                  <li>CIS Controls - Critical Security Controls</li>
                  <li>FIPS 140-2 - Cryptographic Standards</li>
                  <li>DFARS - Defense Federal Acquisition Regulation</li>
                </ul>
              </div>
              <div className="compliance-compliance-card">
                <h4>
                  <FaCloud /> Cloud Compliance
                </h4>
                <ul>
                  <li>ISO 27017 - Cloud Security</li>
                  <li>CSA STAR - Cloud Security Alliance</li>
                  <li>FedRAMP - Federal Risk and Authorization</li>
                  <li>HITRUST CSF - Cloud Healthcare Compliance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="compliance-content-block">
            <h3>Why Choose Us ❓</h3>
            <p>
              Selecting the right compliance partner is crucial for your
              organization's success. We differentiate ourselves through our
              expertise, methodology, and commitment to your compliance journey.
            </p>
            <div className="compliance-benefits-grid">
              <div className="compliance-benefit-item">
                <h4>
                  <FaUserShield /> Expert Knowledge
                </h4>
                <p>
                  Our team consists of certified compliance professionals with
                  deep understanding of regulatory frameworks and industry
                  standards.
                </p>
              </div>
              <div className="compliance-benefit-item">
                <h4>
                  <FaScrewdriverWrench /> Tailored Approach
                </h4>
                <p>
                  We customize our compliance assessment methodology to address
                  your specific industry requirements and organizational needs.
                </p>
              </div>
              <div className="compliance-benefit-item">
                <h4>
                  <FaArrowTrendUp /> Continuous Improvement
                </h4>
                <p>
                  Our solutions focus on building a sustainable compliance
                  program that evolves with changing regulations and business
                  needs.
                </p>
              </div>
              <div className="compliance-benefit-item">
                <h4>
                  <FaHandshake /> Dedicated Support
                </h4>
                <p>
                  We provide ongoing guidance and support throughout your
                  compliance journey, ensuring you maintain compliance over
                  time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ComplianceAssessment;
