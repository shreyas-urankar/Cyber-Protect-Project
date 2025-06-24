import React from "react";
import "../styles/CloudSecurity.css";
import {
  FaCloudUploadAlt,
  FaShieldAlt,
  FaLock,
  FaServer,
  FaTools,
  FaUserShield,
  FaChartLine,
  FaHandsHelping,
} from "react-icons/fa";
import { FaArrowDownUpAcrossLine, FaMoneyBillTrendUp } from "react-icons/fa6";
import cloud_trends from "../assets/cloudtrends.png";
import cloud_approach from "../assets/cloudapproach.jpg";

const CloudSecurity = () => {
  return (
    <div className="cloudsecurity-page-container">
      <main className="cmain-section">
        {/* Header */}
        <div className="cheader-section">
          <h1 className="cmain-title">Cloud Security</h1>
          <div className="cheader-line"></div>
        </div>

        {/* Service Overview */}
        <section className="cservice-overview">
          <div className="c-cloud-icon-main">
            <FaCloudUploadAlt />
          </div>
          <p className="cservice-intro">
            As organizations migrate to the cloud, robust security becomes
            essential to protect sensitive data, ensure compliance, and maintain
            business continuity. Our Cloud Security services provide
            comprehensive protection for your cloud infrastructure,
            applications, and data, enabling you to innovate with confidence.
          </p>

          {/* Our Cloud Security Services */}
          <div className="ccontent-block">
            <h3>Our Cloud Security Services</h3>
            <p>
              We deliver end-to-end cloud security solutions tailored to your
              business needs. Our experts help you secure every layer of your
              cloud environment.
            </p>
            <div className="cservices-list">
              <div className="cservice-item">
                <div className="cservice-icon">
                  <FaShieldAlt />
                </div>
                <div className="cservice-content">
                  <h4>Cloud Risk Assessment</h4>
                  <p>
                    Identify vulnerabilities and assess risks in your cloud
                    infrastructure to ensure proactive protection.
                  </p>
                </div>
              </div>
              <div className="cservice-item">
                <div className="cservice-icon">
                  <FaLock />
                </div>
                <div className="cservice-content">
                  <h4>Data Protection & Encryption</h4>
                  <p>
                    Safeguard sensitive data with advanced encryption, access
                    controls, and secure storage solutions.
                  </p>
                </div>
              </div>
              <div className="cservice-item">
                <div className="cservice-icon">
                  <FaServer />
                </div>
                <div className="cservice-content">
                  <h4>Cloud Security Architecture</h4>
                  <p>
                    Design and implement secure cloud architectures following
                    industry best practices and compliance standards.
                  </p>
                </div>
              </div>
              <div className="cservice-item">
                <div className="cservice-icon">
                  <FaTools />
                </div>
                <div className="cservice-content">
                  <h4>DevSecOps Integration</h4>
                  <p>
                    Embed security into your CI/CD pipelines for continuous
                    protection throughout the development lifecycle.
                  </p>
                </div>
              </div>
              <div className="cservice-item">
                <div className="cservice-icon">
                  <FaUserShield />
                </div>
                <div className="cservice-content">
                  <h4>Identity & Access Management</h4>
                  <p>
                    Control user access and manage identities to prevent
                    unauthorized activities in your cloud environment.
                  </p>
                </div>
              </div>
              <div className="cservice-item">
                <div className="cservice-icon">
                  <FaChartLine />
                </div>
                <div className="cservice-content">
                  <h4>Cloud Monitoring & Incident Response</h4>
                  <p>
                    Monitor cloud activity, detect threats in real time, and
                    respond rapidly to security incidents.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits of Cloud Security */}
          <div className="ccontent-block">
            <h3>Why Invest in Cloud Security?</h3>
            <div className="cbenefits-grid">
              <div className="cbenefit-item">
                <h4>
                  <FaShieldAlt /> Enhanced Protection
                </h4>
                <p>
                  Defend against evolving cyber threats with multi-layered
                  security controls.
                </p>
              </div>
              <div className="cbenefit-item">
                <h4>
                  <FaArrowDownUpAcrossLine /> Regulatory Compliance
                </h4>
                <p>
                  Meet industry standards such as GDPR, HIPAA, and ISO 27001
                  with robust compliance solutions.
                </p>
              </div>
              <div className="cbenefit-item">
                <h4>
                  <FaMoneyBillTrendUp /> Cost Efficiency
                </h4>
                <p>
                  Reduce security costs with scalable, cloud-native security
                  tools and managed services.
                </p>
              </div>
              <div className="cbenefit-item">
                <h4>
                  <FaHandsHelping /> Business Continuity
                </h4>
                <p>
                  Ensure uptime and data availability with disaster recovery and
                  backup strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Cloud Security Trends */}
          <div className="ccontent-block">
            <h3>Cloud Security Trends</h3>
            <div className="ctrends-container">
              <div className="ctrend-content">
                <p>
                  Stay ahead with the latest trends in cloud security. We help
                  you adopt new technologies and strategies to keep your cloud
                  environment secure.
                </p>
                <ul className="ctrend-list">
                  <li>Zero Trust Security Models</li>
                  <li>AI-Driven Threat Detection</li>
                  <li>Cloud-Native Security Tools</li>
                  <li>Automated Compliance Monitoring</li>
                </ul>
              </div>
              <div className="ctrend-image">
                <img src={cloud_trends} alt="Cloud Security Trends" />
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="ccontent-block">
            <h3>Our Approach</h3>
            <div className="cprocess-container">
              <div className="cprocess-image">
                <img src={cloud_approach} alt="Cloud Security Process" />
              </div>
              <div className="cprocess-steps">
                <div className="cprocess-step">
                  <div className="cstep-number">1</div>
                  <div className="cstep-content">
                    <h4>Assessment & Planning</h4>
                    <p>
                      Analyze your current cloud setup and define security
                      requirements.
                    </p>
                  </div>
                </div>
                <div className="cprocess-step">
                  <div className="cstep-number">2</div>
                  <div className="cstep-content">
                    <h4>Solution Design</h4>
                    <p>
                      Develop a tailored cloud security strategy and
                      architecture.
                    </p>
                  </div>
                </div>
                <div className="cprocess-step">
                  <div className="cstep-number">3</div>
                  <div className="cstep-content">
                    <h4>Implementation</h4>
                    <p>
                      Deploy security controls and integrate with your cloud
                      environment.
                    </p>
                  </div>
                </div>
                <div className="cprocess-step">
                  <div className="cstep-number">4</div>
                  <div className="cstep-content">
                    <h4>Continuous Monitoring</h4>
                    <p>
                      Ongoing monitoring, threat detection, and incident
                      response.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Security Best Practices */}
        <div className="ccontent-block">
          <h3>Cloud Security Best Practices (2025)</h3>
          <ul className="c-best-practices-list">
            <li>
              <strong>Adopt Zero Trust:</strong> Treat every access request as
              untrusted. Enforce MFA, conditional access, and continuous
              monitoring for all users and devices.
            </li>
            <li>
              <strong>Encrypt Data at Rest & In Transit:</strong> Use AES-256
              for storage, TLS 1.3 for transmission, and robust key management
              (HSMs, regular rotation).
            </li>
            <li>
              <strong>Identity & Access Management (IAM):</strong> Apply least
              privilege, RBAC, and regular audits. Use cloud-native IAM tools
              for granular control.
            </li>
            <li>
              <strong>Continuous Monitoring & SIEM:</strong> Aggregate logs, use
              machine learning for anomaly detection, and automate compliance
              checks.
            </li>
            <li>
              <strong>Secure APIs & Interfaces:</strong> Use OAuth 2.0, JWT, API
              gateways, and WAFs. Regularly rotate API keys and monitor for
              abuse.
            </li>
            <li>
              <strong>Automate Security & Compliance:</strong> Integrate
              SAST/DAST, IaC scanning, and compliance checks into CI/CD
              pipelines.
            </li>
            <li>
              <strong>Incident Response Planning:</strong> Maintain a tested,
              cloud-specific IR plan with automated detection, escalation, and
              forensics.
            </li>
            <li>
              <strong>Vendor & Third-Party Risk Management:</strong> Vet
              partners, require certifications (SOC 2, ISO 27001), and monitor
              for compliance.
            </li>
            <li>
              <strong>Employee Security Training:</strong> Run regular phishing
              simulations and cloud-specific security awareness programs.
            </li>
            <li>
              <strong>Backup & Disaster Recovery:</strong> Use cloud-native
              backup tools, test recovery, and store backups in multiple
              regions.
            </li>
          </ul>
        </div>

        {/* Compliance & Certifications */}
        <div className="ccontent-block">
          <h3>Cloud Compliance & Certifications (2025)</h3>
          <p>
            Stay ahead of evolving regulations with a proactive compliance
            strategy. Key frameworks and certifications include:
          </p>
          <ul className="c-compliance-list">
            <li>
              <strong>GDPR, HIPAA, PCI DSS:</strong> For data privacy,
              healthcare, and payment security.
            </li>
            <li>
              <strong>ISO/IEC 27001 & 27017:</strong> International standards
              for information and cloud security management.
            </li>
            <li>
              <strong>SOC 2, FedRAMP, CSA STAR:</strong> For SaaS, government,
              and cloud-specific assurance.
            </li>
            <li>
              <strong>Shared Responsibility Model:</strong> Understand what your
              cloud provider secures (infrastructure) vs. what you must secure
              (data, configs, access).
            </li>
            <li>
              <strong>Automated Compliance Tools:</strong> Use CSPM, CIEM, and
              automated evidence collection for audits.
            </li>
          </ul>
          <p className="c-compliance-note">
            Tip: Choose cloud providers with transparent compliance
            documentation and native tools for audit readiness.
          </p>
        </div>

        {/* Common Cloud Security Issues & Solutions */}
        <div className="ccontent-block">
          <h3>Common Cloud Security Issues & Solutions</h3>
          <ul className="c-issues-list">
            <li>
              <strong>Misconfiguration:</strong> Use automated tools to detect
              and remediate. Enforce policy-as-code.
            </li>
            <li>
              <strong>Insecure APIs:</strong> Secure with gateways, rate
              limiting, and regular key rotation.
            </li>
            <li>
              <strong>Insufficient IAM:</strong> Enforce MFA, RBAC, and regular
              access reviews.
            </li>
            <li>
              <strong>Account Hijacking:</strong> Monitor for unusual logins,
              enforce strong passwords, and run phishing training.
            </li>
            <li>
              <strong>Insider Threats:</strong> Deploy user behavior analytics
              and DLP tools.
            </li>
            <li>
              <strong>Shadow IT:</strong> Discover and monitor unauthorized
              cloud usage with CASBs.
            </li>
          </ul>
        </div>

        {/* Case Studies / Success Stories */}
        <div className="ccontent-block">
          <h3>Case Studies & Success Stories</h3>
          <div className="c-case-studies-grid">
            <div className="c-case-card">
              <h4>Financial Services: Zero Trust Rollout</h4>
              <p>
                After a major bank implemented Zero Trust and continuous
                monitoring, they reduced unauthorized access incidents by 80%
                and passed their PCI DSS audit with zero findings.
              </p>
            </div>
            <div className="c-case-card">
              <h4>Healthcare: HIPAA Compliance in the Cloud</h4>
              <p>
                A healthcare SaaS provider used automated compliance tools and
                encryption to achieve HIPAA compliance, enabling secure patient
                data management and rapid audit response.
              </p>
            </div>
            <div className="c-case-card">
              <h4>Retail: DDoS Resilience</h4>
              <p>
                A global retailer leveraged cloud-native DDoS protection and
                backup strategies to maintain 99.99% uptime during peak shopping
                seasons, even under attack.
              </p>
            </div>
          </div>
        </div>

        {/* Trusted Partners & Certifications */}
        <div className="ccontent-block">
          <h3>Trusted Partners & Certifications</h3>
          <ul className="c-certifications-list">
            <li>SOC 2 Type II</li>
            <li>ISO/IEC 27001</li>
            <li>PCI DSS</li>
            <li>HIPAA</li>
            <li>CSA STAR</li>
          </ul>
        </div>

        {/* FAQs */}
        <div className="ccontent-block">
          <h3>Frequently Asked Questions (FAQs)</h3>
          <div className="c-faq-list">
            <div className="c-faq-item">
              <h4>What is the most important cloud security best practice?</h4>
              <p>
                Implementing multi-factor authentication (MFA) and least
                privilege access are foundational for cloud security.
              </p>
            </div>
            <div className="c-faq-item">
              <h4>How do I ensure compliance in the cloud?</h4>
              <p>
                Use automated compliance tools, keep up with regulations, and
                choose providers with strong certifications (SOC 2, ISO 27001,
                etc.).
              </p>
            </div>
            <div className="c-faq-item">
              <h4>What are the top cloud security threats in 2025?</h4>
              <p>
                Misconfiguration, insecure APIs, account hijacking, insider
                threats, and supply chain attacks.
              </p>
            </div>
            <div className="c-faq-item">
              <h4>What is the shared responsibility model?</h4>
              <p>
                Cloud providers secure the infrastructure; you are responsible
                for your data, access, and configurations.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="ccontent-block">
          <h3>What Our Clients Say</h3>
          <div className="c-testimonials-grid">
            <div className="c-testimonial-card">
              <p>
                “We achieved full PCI DSS compliance in record time thanks to
                your cloud security team's expertise and automation tools.”
              </p>
              <span>- CTO, FinTech Startup</span>
            </div>
            <div className="c-testimonial-card">
              <p>
                “Their proactive monitoring and incident response helped us stop
                a ransomware attack before any data was lost.”
              </p>
              <span>- CISO, Healthcare SaaS</span>
            </div>
            <div className="c-testimonial-card">
              <p>
                “The cloud migration was seamless, and our audit passed with
                zero findings. Highly recommended!”
              </p>
              <span>- IT Director, Retail Enterprise</span>
            </div>
          </div>
        </div>

        {/* Resources & Learning */}
        <div className="ccontent-block">
          <h3>Resources & Learning</h3>
          <ul className="c-resources-list">
            <li>
              <a
                href="https://cloud.google.com/security/best-practices"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Cloud Security Best Practices
              </a>
            </li>
            <li>
              <a
                href="https://aws.amazon.com/security/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AWS Security Center
              </a>
            </li>
            <li>
              <a
                href="https://www.sentinelone.com/cybersecurity-101/cloud-security/cloud-security-best-practices/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SentinelOne: Cloud Security Best Practices
              </a>
            </li>
            <li>
              <a
                href="https://cloudsecurityalliance.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cloud Security Alliance (CSA)
              </a>
            </li>
            <li>
              <a
                href="https://devsecopsai.today/cloud-compliance-updates-for-2025-whats-changed-and-how-to-respond-9346d9fbde25"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cloud Compliance Updates 2025
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default CloudSecurity;
