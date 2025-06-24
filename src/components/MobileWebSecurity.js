import React from "react";
import "../styles/MobileWebSecurity.css";
import {
  FaMobileAlt,
  FaGlobe,
  FaLock,
  FaUserShield,
  FaShieldAlt,
  FaBug,
  FaSyncAlt,
  FaTools,
  FaHandsHelping,
} from "react-icons/fa";
import { FaArrowDownUpAcrossLine, FaMoneyBillTrendUp } from "react-icons/fa6";
import mobile_security from "../assets/mwsecurity.jpg";
import web_security from "../assets/websecurity.jpg";

const MobileWebSecurity = () => {
  return (
    <div className="mwsecurity-page-container">
      <main className="mwmain-section">
        {/* Header */}
        <div className="mwheader-section">
          <h1 className="mwmain-title">Mobile & Web Application Security</h1>
          <div className="mwheader-line"></div>
        </div>

        {/* Service Overview */}
        <section className="mwservice-overview">
          <div className="mw-icon-main">
            <FaMobileAlt /> <FaGlobe />
          </div>
          <p className="mwservice-intro">
            In a mobile-first, web-connected world, robust security for your
            applications is essential. Our Mobile & Web Security services
            protect your apps, APIs, and user data from evolving threats,
            ensuring compliance and user trust across all platforms.
          </p>

          {/* Our Security Services */}
          <div className="mwcontent-block">
            <h3>Our Mobile & Web Security Services</h3>
            <p>
              We deliver comprehensive security solutions for mobile and web
              applications, tailored to your business and regulatory needs.
            </p>
            <div className="mwservices-list">
              <div className="mwservice-item">
                <div className="mwservice-icon">
                  <FaShieldAlt />
                </div>
                <div className="mwservice-content">
                  <h4>App Penetration Testing</h4>
                  <p>
                    Identify vulnerabilities in your mobile/web apps with
                    advanced manual and automated testing (OWASP MASVS, OWASP
                    Top 10).
                  </p>
                </div>
              </div>
              <div className="mwservice-item">
                <div className="mwservice-icon">
                  <FaLock />
                </div>
                <div className="mwservice-content">
                  <h4>Data Protection & Encryption</h4>
                  <p>
                    Encrypt sensitive data at rest and in transit. Implement
                    secure key management and certificate pinning.
                  </p>
                </div>
              </div>
              <div className="mwservice-item">
                <div className="mwservice-icon">
                  <FaUserShield />
                </div>
                <div className="mwservice-content">
                  <h4>Identity & Access Management</h4>
                  <p>
                    Enforce MFA, RBAC, and secure authentication for all users
                    and APIs.
                  </p>
                </div>
              </div>
              <div className="mwservice-item">
                <div className="mwservice-icon">
                  <FaBug />
                </div>
                <div className="mwservice-content">
                  <h4>Vulnerability Management</h4>
                  <p>
                    Continuous scanning, patching, and monitoring for new
                    threats and vulnerabilities.
                  </p>
                </div>
              </div>
              <div className="mwservice-item">
                <div className="mwservice-icon">
                  <FaSyncAlt />
                </div>
                <div className="mwservice-content">
                  <h4>DevSecOps Integration</h4>
                  <p>
                    Embed security into your CI/CD pipelines for ongoing
                    protection and compliance.
                  </p>
                </div>
              </div>
              <div className="mwservice-item">
                <div className="mwservice-icon">
                  <FaTools />
                </div>
                <div className="mwservice-content">
                  <h4>API Security</h4>
                  <p>
                    Secure your APIs with gateways, input validation, and
                    regular audits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits of Mobile & Web Security */}
          <div className="mwcontent-block">
            <h3>Why Invest in Mobile & Web Security?</h3>
            <div className="mwbenefits-grid">
              <div className="mwbenefit-item">
                <h4>
                  <FaShieldAlt /> Comprehensive Protection
                </h4>
                <p>
                  Defend against malware, phishing, and zero-day attacks with
                  multi-layered security.
                </p>
              </div>
              <div className="mwbenefit-item">
                <h4>
                  <FaArrowDownUpAcrossLine /> Regulatory Compliance
                </h4>
                <p>
                  Meet GDPR, PCI DSS, HIPAA, and other standards with
                  audit-ready solutions.
                </p>
              </div>
              <div className="mwbenefit-item">
                <h4>
                  <FaMoneyBillTrendUp /> Cost Efficiency
                </h4>
                <p>
                  Reduce breach costs and downtime with proactive security and
                  managed services.
                </p>
              </div>
              <div className="mwbenefit-item">
                <h4>
                  <FaHandsHelping /> User Trust
                </h4>
                <p>
                  Build user confidence with secure, privacy-focused apps and
                  transparent practices.
                </p>
              </div>
            </div>
          </div>

          {/* Security Trends */}
          <div className="mwcontent-block">
            <h3>Mobile & Web Security Trends</h3>
            <div className="mwtrends-container">
              <div className="mwtrend-content">
                <p>
                  Stay ahead with the latest trends in application security. We
                  help you adopt new technologies and strategies to keep your
                  apps secure.
                </p>
                <ul className="mwtrend-list">
                  <li>Zero Trust Security Models</li>
                  <li>AI-Driven Threat Detection</li>
                  <li>API Security & Microservices</li>
                  <li>Automated Compliance Monitoring</li>
                  <li>Mobile App Shielding & RASP</li>
                </ul>
              </div>
              <div className="mwtrend-image">
                <img src={mobile_security} alt="Mobile & Web Security Trends" />
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="mwcontent-block">
            <h3>Best Practices for Mobile & Web Security (2025)</h3>
            <ul className="mw-best-practices-list">
              <li>
                <strong>Adopt Zero Trust:</strong> Enforce MFA, device
                attestation, and continuous monitoring for all users and
                endpoints.
              </li>
              <li>
                <strong>Encrypt Data Everywhere:</strong> Use AES-256 for
                storage, TLS 1.3 for transmission, and secure key management.
              </li>
              <li>
                <strong>Secure APIs & Interfaces:</strong> Use OAuth 2.0, JWT,
                API gateways, and WAFs. Regularly rotate API keys and monitor
                for abuse.
              </li>
              <li>
                <strong>Continuous Monitoring & SIEM:</strong> Aggregate logs,
                use machine learning for anomaly detection, and automate
                compliance checks.
              </li>
              <li>
                <strong>Automate Security & Compliance:</strong> Integrate
                SAST/DAST, IaC scanning, and compliance checks into CI/CD
                pipelines.
              </li>
              <li>
                <strong>Incident Response Planning:</strong> Maintain a tested,
                app-specific IR plan with automated detection, escalation, and
                forensics.
              </li>
              <li>
                <strong>App Hardening & Obfuscation:</strong> Use code
                obfuscation, RASP, and anti-tampering to protect against reverse
                engineering.
              </li>
              <li>
                <strong>Employee Security Training:</strong> Run regular
                phishing simulations and app-specific security awareness
                programs.
              </li>
              <li>
                <strong>Backup & Disaster Recovery:</strong> Use secure backup
                tools, test recovery, and store backups in multiple regions.
              </li>
            </ul>
          </div>

          {/* Our Security Process */}
          <div className="mwcontent-block">
            <h3>Our Security Process</h3>
            <div className="mwprocess-container">
              <div className="mwprocess-image">
                <img src={web_security} alt="Security Process" />
              </div>
              <div className="mwprocess-steps">
                <div className="mwprocess-step">
                  <div className="mwstep-number">1</div>
                  <div className="mwstep-content">
                    <h4>Assessment & Planning</h4>
                    <p>
                      We analyze your app's architecture and identify security
                      gaps.
                    </p>
                  </div>
                </div>
                <div className="mwprocess-step">
                  <div className="mwstep-number">2</div>
                  <div className="mwstep-content">
                    <h4>Implementation</h4>
                    <p>
                      We deploy security controls, encryption, and monitoring
                      tools.
                    </p>
                  </div>
                </div>
                <div className="mwprocess-step">
                  <div className="mwstep-number">3</div>
                  <div className="mwstep-content">
                    <h4>Continuous Monitoring</h4>
                    <p>
                      We provide ongoing threat detection, compliance, and
                      reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance & Certifications */}
          <div className="mwcontent-block">
            <h3>Compliance & Certifications (2025)</h3>
            <p>
              Stay ahead of evolving regulations with a proactive compliance
              strategy. Key frameworks and certifications include:
            </p>
            <ul className="mw-compliance-list">
              <li>
                <strong>GDPR, HIPAA, PCI DSS:</strong> For data privacy,
                healthcare, and payment security.
              </li>
              <li>
                <strong>OWASP MASVS & Top 10:</strong> Industry standards for
                mobile/web app security.
              </li>
              <li>
                <strong>ISO/IEC 27001:</strong> International standard for
                information security management.
              </li>
              <li>
                <strong>SOC 2, CSA STAR:</strong> For SaaS and cloud-specific
                assurance.
              </li>
              <li>
                <strong>Automated Compliance Tools:</strong> Use MAST, SAST,
                DAST, and automated evidence collection for audits.
              </li>
            </ul>
            <p className="mw-compliance-note">
              Tip: Choose providers with transparent compliance documentation
              and native tools for audit readiness.
            </p>
          </div>

          {/* Common Security Issues & Solutions */}
          <div className="mwcontent-block">
            <h3>Common Security Issues & Solutions</h3>
            <ul className="mw-issues-list">
              <li>
                <strong>Misconfiguration:</strong> Use automated tools to detect
                and remediate. Enforce policy-as-code.
              </li>
              <li>
                <strong>Insecure APIs:</strong> Secure with gateways, rate
                limiting, and regular key rotation.
              </li>
              <li>
                <strong>Insufficient IAM:</strong> Enforce MFA, RBAC, and
                regular access reviews.
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
                <strong>Outdated Libraries:</strong> Regularly update
                dependencies and monitor for vulnerabilities.
              </li>
              <li>
                <strong>Session Management:</strong> Use secure cookies, session
                timeouts, and token rotation.
              </li>
            </ul>
          </div>

          {/* Case Studies / Success Stories */}
          <div className="mwcontent-block">
            <h3>Case Studies & Success Stories</h3>
            <div className="mw-case-studies-grid">
              <div className="mw-case-card">
                <h4>Fintech: Secure Mobile Banking</h4>
                <p>
                  After implementing MFA and app shielding, a leading bank
                  reduced fraud by 70% and achieved PCI DSS compliance.
                </p>
              </div>
              <div className="mw-case-card">
                <h4>Healthcare: HIPAA-Compliant App</h4>
                <p>
                  A healthcare provider used encryption and secure APIs to
                  protect patient data, passing audits with zero findings.
                </p>
              </div>
              <div className="mw-case-card">
                <h4>Retail: Web App DDoS Resilience</h4>
                <p>
                  A global retailer leveraged WAFs and automated monitoring to
                  maintain uptime during peak sales, even under attack.
                </p>
              </div>
            </div>
          </div>

          {/* Trusted Partners & Certifications */}
          <div className="mwcontent-block">
            <h3>Trusted Partners & Certifications</h3>
            <ul className="mw-certifications-list">
              <li>OWASP MASVS</li>
              <li>PCI DSS</li>
              <li>ISO/IEC 27001</li>
              <li>GDPR</li>
              <li>CSA STAR</li>
            </ul>
          </div>

          {/* FAQs */}
          <div className="mwcontent-block">
            <h3>Frequently Asked Questions (FAQs)</h3>
            <div className="mw-faq-list">
              <div className="mw-faq-item">
                <h4>
                  What is the most important mobile/web security best practice?
                </h4>
                <p>
                  Implementing MFA, secure coding, and regular testing are
                  foundational for app security.
                </p>
              </div>
              <div className="mw-faq-item">
                <h4>How do I ensure compliance for my app?</h4>
                <p>
                  Use automated compliance tools, keep up with regulations, and
                  choose providers with strong certifications (PCI DSS, ISO
                  27001, etc.).
                </p>
              </div>
              <div className="mw-faq-item">
                <h4>What are the top threats in 2025?</h4>
                <p>
                  Misconfiguration, insecure APIs, account hijacking, insider
                  threats, and supply chain attacks.
                </p>
              </div>
              <div className="mw-faq-item">
                <h4>What is app shielding?</h4>
                <p>
                  App shielding uses obfuscation, RASP, and anti-tampering to
                  protect apps from reverse engineering and runtime attacks.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mwcontent-block">
            <h3>What Our Clients Say</h3>
            <div className="mw-testimonials-grid">
              <div className="mw-testimonial-card">
                <p>
                  "We achieved full PCI DSS compliance for our mobile app thanks
                  to your security team's expertise and automation tools."
                </p>
                <span>- CTO, FinTech Startup</span>
              </div>
              <div className="mw-testimonial-card">
                <p>
                  "Their proactive monitoring and incident response helped us
                  stop a phishing attack before any data was lost."
                </p>
                <span>- CISO, Healthcare SaaS</span>
              </div>
              <div className="mw-testimonial-card">
                <p>
                  "The app launch was seamless, and our audit passed with zero
                  findings. Highly recommended!"
                </p>
                <span>- IT Director, Retail Enterprise</span>
              </div>
            </div>
          </div>

          {/* Resources & Learning */}
          <div className="mwcontent-block">
            <h3>Resources & Learning</h3>
            <ul className="mw-resources-list">
              <li>
                <a
                  href="https://owasp.org/www-project-mobile-security/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OWASP Mobile Security Project
                </a>
              </li>
              <li>
                <a
                  href="https://mas.owasp.org/MASVS/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OWASP MASVS Standard
                </a>
              </li>
              <li>
                <a
                  href="https://owasp.org/www-project-top-ten/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OWASP Top 10 Web App Risks
                </a>
              </li>
              <li>
                <a
                  href="https://www.sentinelone.com/cybersecurity-101/mobile-application-security/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SentinelOne: Mobile App Security
                </a>
              </li>
              <li>
                <a
                  href="https://www.qualysec.com/web-application-security-best-practices/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Web Application Security Best Practices
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MobileWebSecurity;
