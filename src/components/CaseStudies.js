import React from "react";
import {
  FaCloud,
  FaUserMd,
  FaCogs,
  FaMicrochip,
  FaMobileAlt,
  FaShoppingCart,
  FaRobot,
  FaUniversity,
  FaShieldAlt,
  FaChartLine,
  FaLock,
  FaServer,
} from "react-icons/fa";
import "../styles/CaseStudies.css";

const caseStudies = [
  {
    icon: <FaCloud className="cs-card-icon" />,
    title: "Cloud Security for FinTech",
    description:
      "Implemented multi-layered cloud security for a leading FinTech, achieving 99.99% uptime and zero breaches.",
    stat: "99.99% Uptime",
  },
  {
    icon: <FaUserMd className="cs-card-icon" />,
    title: "HIPAA Compliance for Healthcare",
    description:
      "Enabled HIPAA-compliant infrastructure for a hospital network, securing patient data across 50+ facilities.",
    stat: "100% Compliance",
  },
  {
    icon: <FaCogs className="cs-card-icon" />,
    title: "DevSecOps for SaaS Startup",
    description:
      "Integrated DevSecOps pipeline for a SaaS provider, reducing vulnerabilities by 85% in CI/CD.",
    stat: "85% Fewer Vulns",
  },
  {
    icon: <FaMicrochip className="cs-card-icon" />,
    title: "IoT Security for Manufacturing",
    description:
      "Secured IoT devices in a smart factory, preventing unauthorized access and downtime.",
    stat: "0 Incidents",
  },
  {
    icon: <FaMobileAlt className="cs-card-icon" />,
    title: "Mobile App Security for Banking",
    description:
      "Hardened mobile banking apps, ensuring secure transactions for 1M+ users.",
    stat: "1M+ Users Safe",
  },
  {
    icon: <FaShoppingCart className="cs-card-icon" />,
    title: "Web App Firewall for E-commerce",
    description:
      "Deployed WAF for a major e-commerce site, blocking 98% of malicious traffic.",
    stat: "98% Threats Blocked",
  },
  {
    icon: <FaRobot className="cs-card-icon" />,
    title: "AI/ML Security for Research Lab",
    description:
      "Protected AI/ML models from adversarial attacks, ensuring research integrity.",
    stat: "0 Data Leaks",
  },
  {
    icon: <FaUniversity className="cs-card-icon" />,
    title: "Risk Assessment for Government",
    description:
      "Comprehensive risk assessment for a government agency, closing 120+ security gaps.",
    stat: "120+ Gaps Closed",
  },
  {
    icon: <FaShieldAlt className="cs-card-icon" />,
    title: "Ransomware Response for Education Sector",
    description:
      "Rapidly contained and remediated a ransomware attack at a major university, restoring operations and preventing data loss.",
    stat: "24hr Recovery",
  },
];

const CaseStudies = () => {
  return (
    <div className="cs-page-container">
      <main className="cs-main-section">
        {/* Header */}
        <div className="cs-header-section">
          <h1 className="cs-main-title">Case Studies</h1>
          <div className="cs-header-line"></div>
        </div>

        {/* Overview/Intro */}
        <section className="cs-service-overview">
          <div className="cs-cloud-icon-main">
            <FaShieldAlt />
          </div>
          <p className="cs-service-intro">
            Explore real-world cybersecurity solutions across industries. See
            how DigiDefence empowers organizations to stay secure in a
            digital-first world.
          </p>
        </section>

        {/* Case Studies Grid */}
        <div className="cs-content-block">
          <h3>Featured Case Studies</h3>
          <div className="cs-case-studies-grid">
            {caseStudies.map((study, idx) => (
              <div className="cs-case-card" key={idx}>
                {study.icon}
                <h4>{study.title}</h4>
                <p>{study.description}</p>
                <div className="cs-card-stat">{study.stat}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact/Benefits Section */}
        <div className="cs-content-block">
          <h3>Our Impact</h3>
          <div className="cs-benefits-grid">
            <div className="cs-benefit-item">
              <h4>
                <FaChartLine /> Measurable Results
              </h4>
              <p>
                Clients see a significant reduction in security incidents and
                improved compliance scores.
              </p>
            </div>
            <div className="cs-benefit-item">
              <h4>
                <FaLock /> Data Protection
              </h4>
              <p>
                We ensure sensitive data is always protected, encrypted, and
                monitored.
              </p>
            </div>
            <div className="cs-benefit-item">
              <h4>
                <FaServer /> Scalable Solutions
              </h4>
              <p>
                Our security solutions grow with your business, from startups to
                enterprises.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cs-content-block">
          <h3>Ready to Secure Your Organization?</h3>
          <p>
            Contact us today to learn how our risk assessment services can
            protect your business from evolving cybersecurity threats.
          </p>
          <a href="/contact" className="cs-cta-link">
            Contact Us
          </a>
        </div>
      </main>
    </div>
  );
};

export default CaseStudies;
