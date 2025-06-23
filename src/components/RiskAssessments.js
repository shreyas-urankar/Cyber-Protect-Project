import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RiskAssessments.css';
import {
  FaShieldAlt,
  FaSearch,
  FaChartLine,
  FaTasks,
  FaArrowRight,
  FaRegCheckCircle,
  FaUserShield,
  FaBalanceScale,
  FaClipboardCheck
} from 'react-icons/fa';
// import riskAssessmentProcess from '../assets/risk-assessment-process.jpg';
// import securityFramework from '../assets/security-framework.jpg';
// import complianceStandards from '../assets/compliance-standards.jpg';
const riskAssessmentProcess = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
const securityFramework = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
const complianceStandards = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

const RiskAssessments = () => {
  return (
    <div className="rservice-page-container">
      <main className="rmain-section">
        <div className="rheader-section">
          <h1 className="rmain-title">Risk Assessments</h1>
          <div className="rheader-line"></div>
        </div>

        <section className="rservice-overview">
          <div className="r-tech-icon-main">
            <FaShieldAlt />
          </div>

          <p className="rservice-intro">
            Our comprehensive cybersecurity risk assessment services provide organizations with 
            actionable insights to identify, analyze, and mitigate digital threats. Through 
            rigorous evaluation methodologies, we help you understand your risk landscape, 
            prioritize security investments, and build resilient defenses against evolving 
            cyber threats.
          </p>

          <div className="rcontent-block">
            <h3>Our Risk Assessment Methodology</h3>
            <div className="rprocess-container">
              <div className="rprocess-image">
                <img src={riskAssessmentProcess} alt="Risk Assessment Process" />
              </div>
              <div className="rprocess-steps">
                <div className="rprocess-step">
                  <div className="rstep-number">1</div>
                  <div className="rstep-content">
                    <h4>Asset Identification</h4>
                    <p>
                      Catalog all critical digital assets, systems, and data flows
                      within your organization.
                    </p>
                  </div>
                </div>
                <div className="rprocess-step">
                  <div className="rstep-number">2</div>
                  <div className="rstep-content">
                    <h4>Threat Modeling</h4>
                    <p>
                      Identify potential threat actors and attack vectors specific
                      to your industry and infrastructure.
                    </p>
                  </div>
                </div>
                <div className="rprocess-step">
                  <div className="rstep-number">3</div>
                  <div className="rstep-content">
                    <h4>Vulnerability Analysis</h4>
                    <p>
                      Conduct technical scans and manual testing to uncover
                      security weaknesses.
                    </p>
                  </div>
                </div>
                <div className="rprocess-step">
                  <div className="rstep-number">4</div>
                  <div className="rstep-content">
                    <h4>Risk Calculation</h4>
                    <p>
                      Quantify risk levels based on likelihood and potential
                      business impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rcontent-block">
            <h3>Comprehensive Risk Assessment Solutions</h3>
            <div className="rservices-list">
              <div className="rservice-item">
                <div className="rservice-icon">
                  <FaShieldAlt />
                </div>
                <div className="rservice-content">
                  <h4>Enterprise Risk Assessment</h4>
                  <p>
                    Holistic evaluation of your organization's complete security
                    posture, including technical, physical, and administrative
                    controls.
                  </p>
                  <ul className="rservice-features">
                    <li>Attack surface analysis</li>
                    <li>Security control effectiveness</li>
                    <li>Risk heat mapping</li>
                  </ul>
                </div>
              </div>

              <div className="rservice-item">
                <div className="rservice-icon">
                  <FaSearch />
                </div>
                <div className="rservice-content">
                  <h4>Compliance Gap Analysis</h4>
                  <p>
                    Assessment against regulatory frameworks (ISO 27001, NIST,
                    GDPR, HIPAA) with prioritized remediation roadmap.
                  </p>
                  <ul className="rservice-features">
                    <li>Regulatory requirement mapping</li>
                    <li>Control deficiency identification</li>
                    <li>Compliance scoring</li>
                  </ul>
                </div>
              </div>

              <div className="rservice-item">
                <div className="rservice-icon">
                  <FaChartLine />
                </div>
                <div className="rservice-content">
                  <h4>Third-Party Risk Assessment</h4>
                  <p>
                    Evaluation of vendor security practices to mitigate supply
                    chain risks.
                  </p>
                  <ul className="rservice-features">
                    <li>Vendor security questionnaires</li>
                    <li>Contractual security review</li>
                    <li>Continuous monitoring</li>
                  </ul>
                </div>
              </div>

              <div className="rservice-item">
                <div className="rservice-icon">
                  <FaTasks />
                </div>
                <div className="rservice-content">
                  <h4>Cloud Security Assessment</h4>
                  <p>
                    Specialized evaluation of cloud environments (AWS, Azure,
                    GCP) for configuration risks and data protection.
                  </p>
                  <ul className="rservice-features">
                    <li>Cloud architecture review</li>
                    <li>IAM policy analysis</li>
                    <li>Data encryption assessment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rcontent-block">
            <h3>Industry-Specific Risk Frameworks</h3>
            <p>
              We apply specialized risk assessment methodologies tailored to your
              industry's unique threat landscape and regulatory requirements.
            </p>
            <div className="rindustry-expertise">
              <div className="rindustry-item">
                <h4>Financial Services</h4>
                <ul>
                  <li>FFIEC CAT</li>
                  <li>GLBA</li>
                  <li>PCI DSS</li>
                </ul>
              </div>
              <div className="rindustry-item">
                <h4>Healthcare</h4>
                <ul>
                  <li>HIPAA Security Rule</li>
                  <li>HITRUST CSF</li>
                  <li>FDA Cybersecurity</li>
                </ul>
              </div>
              <div className="rindustry-item">
                <h4>Government</h4>
                <ul>
                  <li>FISMA</li>
                  <li>NIST SP 800-53</li>
                  <li>CMMC</li>
                </ul>
              </div>
              <div className="rindustry-item">
                <h4>Critical Infrastructure</h4>
                <ul>
                  <li>NERC CIP</li>
                  <li>ISA/IEC 62443</li>
                  <li>NIST CSF</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rcontent-block">
            <h3>Our Risk Assessment Tools</h3>
            <div className="rtools-grid">
              <div className="rtool-category">
                <h4>
                  <FaSearch /> Vulnerability Scanners
                </h4>
                <ul>
                  <li>Nessus</li>
                  <li>Qualys</li>
                  <li>OpenVAS</li>
                  <li>Burp Suite</li>
                </ul>
              </div>
              <div className="rtool-category">
                <h4>
                  <FaChartLine /> Risk Analysis
                </h4>
                <ul>
                  <li>FAIR Framework</li>
                  <li>ISO 27005</li>
                  <li>NIST RMF</li>
                  <li>OCTAVE</li>
                </ul>
              </div>
              <div className="rtool-category">
                <h4>
                  <FaShieldAlt /> Compliance
                </h4>
                <ul>
                  <li>RSAM</li>
                  <li>CSAT</li>
                  <li>MetricStream</li>
                </ul>
              </div>
              <div className="rtool-category">
                <h4>
                  <FaTasks /> Governance
                </h4>
                <ul>
                  <li>Archer</li>
                  <li>ServiceNow GRC</li>
                  <li>OneTrust</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rcontent-block">
            <h3>Why Choose Our Risk Assessment Services?</h3>
            <div className="rbenefits-grid">
              <div className="rbenefit-item">
                <h4>
                  <FaUserShield /> Certified Experts
                </h4>
                <p>
                  Our team holds CISSP, CISM, CRISC, and other security
                  certifications with deep industry experience.
                </p>
              </div>
              <div className="rbenefit-item">
                <h4>
                  <FaBalanceScale /> Objective Analysis
                </h4>
                <p>
                  Vendor-agnostic assessments focused solely on your security
                  needs, not product sales.
                </p>
              </div>
              <div className="rbenefit-item">
                <h4>
                  <FaClipboardCheck /> Actionable Reporting
                </h4>
                <p>
                  Clear, prioritized findings with practical remediation steps
                  tailored to your resources.
                </p>
              </div>
              <div className="rbenefit-item">
                <h4>
                  <FaRegCheckCircle /> Continuous Improvement
                </h4>
                <p>
                  Regular reassessments to track progress and adapt to evolving
                  threats.
                </p>
              </div>
            </div>
          </div>

          <div className="rcontent-block">
            <h3>Security Framework Implementation</h3>
            <div className="rsolutions-showcase">
              <div className="rsolution-card">
                <div className="rsolution-image">
                  <img src={securityFramework} alt="Security Framework Implementation" />
                </div>
                <div className="rsolution-content">
                  <h4>Customized Security Frameworks</h4>
                  <p>
                    We help implement industry-standard security frameworks
                    tailored to your organization's specific needs and risk
                    profile.
                  </p>
                  <ul className="rsolution-features">
                    <li>NIST Cybersecurity Framework</li>
                    <li>ISO 27001/27002</li>
                    <li>CIS Critical Security Controls</li>
                    <li>COBIT</li>
                  </ul>
                </div>
              </div>
              <div className="rsolution-card">
                <div className="rsolution-image">
                  <img src={complianceStandards} alt="Compliance Standards" />
                </div>
                <div className="rsolution-content">
                  <h4>Compliance Roadmapping</h4>
                  <p>
                    Strategic planning to achieve and maintain compliance with
                    relevant regulations and standards.
                  </p>
                  <ul className="rsolution-features">
                    <li>Gap analysis against requirements</li>
                    <li>Prioritized implementation plan</li>
                    <li>Policy and procedure development</li>
                    <li>Staff training programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rcontent-block">
            <h3>Ready to Understand Your Cyber Risks?</h3>
            <p>
              Contact us today to schedule a comprehensive risk assessment and
              take the first step toward a more secure future.
            </p>
            <div className="rcta-section">
              <Link to="/contact" className="rcta-button">
                Request Assessment <FaArrowRight style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RiskAssessments;