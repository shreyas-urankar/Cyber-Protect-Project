import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RiskAssessments.css';
import {
  FaShieldAlt,
  FaSearch,
  FaChartLine,
  FaTasks,
  FaArrowRight
} from 'react-icons/fa';

const RiskAssessments = () => {
  return (
    <div className="service-page-container">
      {/* Main Content */}
      <main className="main-section">
        {/* Header */}
        <div className="header-section">
          <h1 className="main-title">Risk Assessments</h1>
          <div className="header-line"></div>
        </div>

        {/* Service Overview */}
        <section className="service-overview">
          <div className="tech-icon-main">
            <FaShieldAlt />
          </div>

          <p className="service-intro">
            Identifying and mitigating cybersecurity risks effectively. Our risk assessment services 
            help you identify vulnerabilities in your IT infrastructure, analyze potential threats, 
            and implement effective mitigation strategies to protect your organization from cybersecurity risks.
          </p>

          {/* Cards Section */}
          <div className="content-block">
            <h3>Comprehensive Risk Assessment Solutions</h3>
            <div className="services-list">
              {/* Threat Identification Card */}
              <div className="service-item">
                <div className="service-icon">
                  <FaShieldAlt />
                </div>
                <div className="service-content">
                  <h4>Threat Identification</h4>
                  <p>
                    Detecting potential vulnerabilities in your IT infrastructure to prevent security breaches
                    before they occur.
                  </p>
                </div>
              </div>

              {/* Vulnerability Analysis Card */}
              <div className="service-item">
                <div className="service-icon">
                  <FaSearch />
                </div>
                <div className="service-content">
                  <h4>Vulnerability Analysis</h4>
                  <p>
                    Examining weak points in your systems to enhance security layers and protect against
                    potential attacks.
                  </p>
                </div>
              </div>

              {/* Impact Assessment Card */}
              <div className="service-item">
                <div className="service-icon">
                  <FaChartLine />
                </div>
                <div className="service-content">
                  <h4>Impact Assessment</h4>
                  <p>
                    Evaluating risk severity and potential consequences to prioritize security improvements
                    effectively.
                  </p>
                </div>
              </div>

              {/* Action Plan Card */}
              <div className="service-item">
                <div className="service-icon">
                  <FaTasks />
                </div>
                <div className="service-content">
                  <h4>Action Plan</h4>
                  <p>
                    Implementing mitigation strategies to build future resilience against cybersecurity threats.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Assessment Section */}
          <div className="content-block">
            <h3>Impact Assessment</h3>
            <p>
              Evaluating risk severity and potential consequences to prioritize security improvements effectively.
              Our comprehensive impact assessment methodology helps organizations understand the potential business
              impact of security risks and allocate resources appropriately.
            </p>
            <div className="tools-grid">
              <div className="tool-category">
                <h4>Risk Levels</h4>
                <ul>
                  <li>Critical Risks</li>
                  <li>High Priority</li>
                  <li>Medium Priority</li>
                  <li>Low Priority</li>
                </ul>
              </div>
              <div className="tool-category">
                <h4>Assessment Methods</h4>
                <ul>
                  <li>Qualitative Analysis</li>
                  <li>Quantitative Analysis</li>
                  <li>Hybrid Approaches</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Plan Section */}
          <div className="content-block">
            <h3>Action Plan</h3>
            <p>
              Implementing mitigation strategies to build future resilience against cybersecurity threats.
              We develop customized action plans that address your organization's specific risk profile
              and business objectives.
            </p>
            <div className="benefits-grid">
              <div className="benefit-item">
                <h4>Immediate Remediation</h4>
                <p>
                  Quick fixes for critical vulnerabilities that require urgent attention.
                </p>
              </div>
              <div className="benefit-item">
                <h4>Strategic Planning</h4>
                <p>
                  Long-term security roadmaps aligned with business growth objectives.
                </p>
              </div>
              <div className="benefit-item">
                <h4>Continuous Monitoring</h4>
                <p>
                  Ongoing risk assessment and adjustment of security measures.
                </p>
              </div>
              <div className="benefit-item">
                <h4>Compliance Alignment</h4>
                <p>
                  Ensuring all actions meet relevant regulatory requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Case Study Section */}
          <div className="content-block">
            <h3>See How We Help Mitigate Cybersecurity Risks</h3>
            <p>
              Discover how organizations like yours are using our expert risk assessments to strengthen
              their security posture and protect against evolving threats.
            </p>
            <div className="cta-section">
              <Link to="/case-studies" className="cta-button">
                Read Case Studies <FaArrowRight style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RiskAssessments;