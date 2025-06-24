import React from "react";
import "../styles/RiskAssessments.css";
import {
  FaBrain,
  FaShieldAlt,
  FaCode,
  FaDatabase,
  FaChartLine,
  FaRegCheckCircle,
  FaUserShield,
  FaBalanceScale,
  FaRobot,
} from "react-icons/fa";

import ai from "../assets/ai_1.jpg";
import ai2 from "../assets/ai_2.jpg";
import ai_audit from "../assets/ai_audits.jpg";
import ai_security from "../assets/ai_security.png";
const AIMLSecurityAudit = () => {
  return (
    <div className="rservice-page-container">
      <main className="rmain-section">
        <div className="rheader-section">
          <h1 className="rmain-title">AI/ML Security Audits</h1>
          <div className="rheader-line"></div>
        </div>

        <section className="rservice-overview">
          <div className="r-tech-icon-main">
            <FaRobot />
          </div>

          <p className="rservice-intro">
            Our specialized AI/ML security audit services help organizations
            identify, analyze, and mitigate the unique risks associated with
            machine learning models and pipelines. Our team evaluates every
            layer of your AI stack—data ingestion, model training, deployment,
            and inference—to ensure robust security and compliance with global
            standards like GDPR, NIST, and the EU AI Act.
          </p>

          <div className="rcontent-block">
            <h3>Our AI/ML Security Audit Methodology</h3>
            <div className="rprocess-container">
              <div className="rprocess-image">
                <img src={ai} alt="AI/ML Security Audit Process" />
              </div>
              <div className="rprocess-steps">
                <div className="rprocess-step">
                  <div className="rstep-number">1</div>
                  <div className="rstep-content">
                    <h4>AI System Mapping</h4>
                    <p>
                      Document all AI/ML components including data pipelines,
                      models, APIs, and deployment infrastructure.
                    </p>
                  </div>
                </div>
                <div className="rprocess-step">
                  <div className="rstep-number">2</div>
                  <div className="rstep-content">
                    <h4>Threat Modeling</h4>
                    <p>
                      Identify AI-specific threats including model poisoning,
                      adversarial attacks, data leakage, and bias exploitation.
                    </p>
                  </div>
                </div>
                <div className="rprocess-step">
                  <div className="rstep-number">3</div>
                  <div className="rstep-content">
                    <h4>Vulnerability Assessment</h4>
                    <p>
                      Test for vulnerabilities in model training, inference, and
                      data handling processes using specialized tools.
                    </p>
                  </div>
                </div>
                <div className="rprocess-step">
                  <div className="rstep-number">4</div>
                  <div className="rstep-content">
                    <h4>Compliance Review</h4>
                    <p>
                      Evaluate against AI ethics guidelines, data protection
                      regulations, and industry-specific AI standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rcontent-block">
            <h3>Comprehensive AI/ML Security Services</h3>
            <div className="rservices-list">
              <div className="rservice-item">
                <div className="rservice-icon">
                  <FaBrain />
                </div>
                <div className="rservice-content">
                  <h4>Model Integrity Audit</h4>
                  <p>
                    Assess ML models for robustness against adversarial attacks,
                    data poisoning, and model inversion threats.
                  </p>
                  <ul className="rservice-features">
                    <li>Adversarial robustness testing</li>
                    <li>Model fairness evaluation</li>
                    <li>Explainability analysis</li>
                  </ul>
                </div>
              </div>

              <div className="rservice-item">
                <div className="rservice-icon">
                  <FaDatabase />
                </div>
                <div className="rservice-content">
                  <h4>Data Pipeline Security</h4>
                  <p>
                    Evaluate security of data collection, storage, and
                    processing pipelines feeding your AI systems.
                  </p>
                  <ul className="rservice-features">
                    <li>Data lineage verification</li>
                    <li>PII detection in training data</li>
                    <li>Data poisoning prevention</li>
                  </ul>
                </div>
              </div>

              <div className="rservice-item">
                <div className="rservice-icon">
                  <FaCode />
                </div>
                <div className="rservice-content">
                  <h4>AI Supply Chain Review</h4>
                  <p>
                    Audit third-party AI components, frameworks, and pre-trained
                    models for security risks.
                  </p>
                  <ul className="rservice-features">
                    <li>Open-source library analysis</li>
                    <li>Pre-trained model validation</li>
                    <li>Dependency vulnerability scanning</li>
                  </ul>
                </div>
              </div>

              <div className="rservice-item">
                <div className="rservice-icon">
                  <FaShieldAlt />
                </div>
                <div className="rservice-content">
                  <h4>Deployment Security</h4>
                  <p>
                    Assess production AI systems for API security, model theft
                    risks, and inference protection.
                  </p>
                  <ul className="rservice-features">
                    <li>API endpoint testing</li>
                    <li>Model extraction prevention</li>
                    <li>Real-time monitoring review</li>
                  </ul>
                </div>
              </div>
              <div className="security-image-wrapper">
                <img
                  src={ai_security}
                  alt="AI Security Protection"
                  className="security-image"
                />
              </div>
            </div>
          </div>

          <div className="rcontent-block">
            <h3>AI/ML Security Standards We Assess Against</h3>
            <div className="rindustry-expertise">
              <div className="rindustry-item">
                <h4>Technical Standards</h4>
                <ul>
                  <li>NIST AI Risk Management</li>
                  <li>MITRE ATLAS Framework</li>
                  <li>OWASP ML Security Top 10</li>
                </ul>
              </div>
              <div className="rindustry-item">
                <h4>Compliance</h4>
                <ul>
                  <li>GDPR AI Provisions</li>
                  <li>EU AI Act</li>
                  <li>Algorithmic Accountability</li>
                </ul>
              </div>
              <div className="rindustry-item">
                <h4>Ethical AI</h4>
                <ul>
                  <li>IEEE Ethically Aligned Design</li>
                  <li>AI Ethics Guidelines</li>
                  <li>Fairness Metrics</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rcontent-block">
            <h3>Our AI Security Testing Tools</h3>
            <div className="rtools-grid">
              <div className="rtool-category">
                <h4>Adversarial Testing</h4>
                <ul>
                  <li>CleverHans</li>
                  <li>IBM Adversarial Robustness Toolbox</li>
                  <li>Foolbox</li>
                </ul>
              </div>
              <div className="rtool-category">
                <h4>
                  <FaChartLine /> Model Analysis
                </h4>
                <ul>
                  <li>TensorFlow Privacy</li>
                  <li>AI Fairness 360</li>
                  <li>SHAP/SALib</li>
                </ul>
              </div>
              <div className="rtool-category">
                <h4>
                  <FaShieldAlt /> Security
                </h4>
                <ul>
                  <li>MLSecOps frameworks</li>
                  <li>Model Signing Tools</li>
                  <li>AI Firewalls</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rcontent-block">
            <h3>Why Choose Our AI/ML Security Services?</h3>
            <div className="rbenefits-grid">
              <div className="rbenefit-item">
                <h4>
                  <FaUserShield /> AI Security Experts
                </h4>
                <p>
                  Our team includes certified AI security specialists with
                  experience across multiple industries and ML frameworks.
                </p>
              </div>
              <div className="rbenefit-item">
                <h4>
                  <FaBalanceScale /> Holistic Approach
                </h4>
                <p>
                  We assess technical security, compliance, and ethical
                  considerations for complete AI system protection.
                </p>
              </div>
              <div className="rbenefit-item">
                <h4>
                  <FaRegCheckCircle /> Actionable Results
                </h4>
                <p>
                  Receive prioritized recommendations tailored to your AI stack
                  with clear implementation guidance.
                </p>
              </div>
            </div>
          </div>

          <div className="rcontent-block">
            <h2>Why is AI/ML Security Audit Important?</h2>
            <p>
              Incorrectly implemented AI/ML systems can lead to security and
              privacy issues. The severity of which depends on how critical the
              use case is. The repercussions of the same include
              misclassification of unauthorized entities, theft of intellectual
              property such as application train models, etc.
            </p>

            <div className="rbenefits-grid" style={{ marginTop: "2rem" }}>
              <div className="rbenefit-item">
                <h4>
                  <FaUserShield /> Establish Trust with Your Users
                </h4>
                <p>
                  Make your AI/ML system stand out by implementing a security
                  shield against cyber-attacks and offering safety & peace of
                  mind.
                </p>
              </div>

              <div className="rbenefit-item">
                <h4>
                  <FaBalanceScale /> Save Yourself from the Cost of Lawsuits
                </h4>
                <p>
                  A security breach can bring a lawsuit that can compromise your
                  business' reputation. Prevent this scenario and save your
                  limited time, money, and resources.
                </p>
              </div>

              <div className="rbenefit-item">
                <h4>
                  <FaRegCheckCircle /> Achieve Certifications & Compliance
                  Standards
                </h4>
                <p>
                  Pass the auditing process and let your business build its
                  credibility by acquiring several internationally recognized
                  standards. Increase your business' credibility and make it
                  more trustworthy.
                </p>
              </div>
            </div>
          </div>

          {/* New Section: Our Process, Your Success */}
          <div className="rcontent-block">
            <h2>OUR PROCESS, YOUR SUCCESS</h2>
            <p>
              With a dedicated team capable of effectively assessing and
              strengthening AI/ML systems, we can provide specific methods to
              prevent potentially damaging threats before they potentially
              derail your project.
            </p>

            <div className="rprocess-container" style={{ marginTop: "2rem" }}>
              <div className="rprocess-steps">
                <div className="rprocess-step">
                  <div className="rstep-number">
                    <FaChartLine />
                  </div>
                  <div className="rstep-content">
                    <h4>Organizational Goals</h4>
                    <p>
                      Our industry-leading, research-oriented AI/ML product
                      security assessment, training, and consultation, helps our
                      clients identify and establish their cybersecurity goals.
                    </p>
                  </div>
                </div>

                <div className="rprocess-step">
                  <div className="rstep-number">
                    <FaUserShield />
                  </div>
                  <div className="rstep-content">
                    <h4>Dynamic Teamwork</h4>
                    <p>
                      Our bandits educate and up-skill your team on various
                      AI/ML threats, teach the Payout-orchestrated ways to test
                      the AI/ML systems against these attacks and identify
                      potential security and privacy threats.
                    </p>
                  </div>
                </div>

                <div className="rprocess-step">
                  <div className="rstep-number">
                    <FaShieldAlt />
                  </div>
                  <div className="rstep-content">
                    <h4>Assess Your AI/ML System</h4>
                    <p>
                      We cover various processes to address your AI/ML product
                      security concerns and help you safeguard your technology
                      against attacks.
                    </p>
                    <ul
                      className="rservice-features"
                      style={{ marginTop: "1rem" }}
                    >
                      <li>Define</li>
                      <li>Underline</li>
                      <li>Collaborate</li>
                      <li>Comply</li>
                      <li>Safeguard</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rcontent-block">
            <h2>THEY TRUST US</h2>
            <p style={{ marginBottom: "2rem" }}>
              Don't just take our word for it. See what our other customers are
              saying
            </p>

            <div className="rtestimonials-grid">
              <div className="rtestimonial-card">
                <div className="rtestimonial-content">
                  <p>
                    "We were looking for a company specialized in application
                    security and infrastructure testing for our new product,
                    mTrust.io. We found the perfect match with Payatur
                    Technologies. Payatur is not a typical customer provider
                    association; they are more of a reliable partner. Their
                    profound experience and comprehensive range of security
                    expertise helped us immensely."
                  </p>
                  <div className="rtestimonial-author">
                    <strong>Christian Fever</strong>
                    <span>
                      Managing Director - M-way Consulting GmbH, Germany
                    </span>
                  </div>
                </div>
              </div>

              <div className="rtestimonial-card">
                <div className="rtestimonial-content">
                  <p>
                    "When you build software, you consider all the
                    vulnerabilities you think one can exploit but getting
                    Payatur to do a comprehensive test on our product was the
                    best idea. This gave us an in-depth analysis of the latest
                    vulnerabilities and helped us fix them. And great guys to
                    work with."
                  </p>
                  <div className="rtestimonial-author">
                    <strong>Mikhail Yabliraj</strong>
                    <span>Co-Founder - Docurthy, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rcta-section"
              style={{ marginTop: "2rem", textAlign: "center" }}
            >
              <h3>Our Assessment Report Contains</h3>
              <p>
                Detailed, Deeply Analyzed Content, Combined With Actionable
                Advice.
              </p>
            </div>
          </div>

          <div className="rcontent-block">
            <h3>Our AI/ML Security Audit Methodology</h3>
            <div className="rsolutions-showcase">
              <div className="rsolution-card">
                <div className="rsolution-image">
                  <img src={ai_audit} alt="AI Security Implementation" />
                </div>
                <div className="rsolution-content">
                  <h4>AI Security Framework</h4>
                  <p>
                    Implement comprehensive security controls for your AI
                    systems covering development, deployment, and monitoring.
                  </p>
                  <ul className="rsolution-features">
                    <li>Secure model development lifecycle</li>
                    <li>Adversarial defense mechanisms</li>
                    <li>Continuous monitoring solutions</li>
                  </ul>
                </div>
              </div>
              <div className="rsolution-card">
                <div className="rsolution-image">
                  <img src={ai2} alt="AI Compliance Standards" />
                </div>
                <div className="rsolution-content">
                  <h4>AI Governance Program</h4>
                  <p>
                    Establish policies, procedures, and controls to ensure
                    responsible and compliant AI usage across your organization.
                  </p>
                  <ul className="rsolution-features">
                    <li>AI risk management framework</li>
                    <li>Ethical AI guidelines</li>
                    <li>Regulatory compliance mapping</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rcontent-block">
            <h3>Secure Your AI Systems Today</h3>
            <p>
              Protect your organization from emerging AI security risks with our
              comprehensive audit services.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AIMLSecurityAudit;
