import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import Navbar from "../components/Navbar";
import ScrollAnimation from "../components/ScrollAnimation";
import {
  FaShieldAlt,
  FaUserCheck,
  FaChartLine,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <ScrollAnimation />
      {/* Hero Section */}
      <section className="homehero">
        <div className="homeoverlay"></div>
        <div className="homehero-content">
          <h1>
            Your <span className="homehighlight">Shield</span> in the Digital{" "}
            <span className="homehighlight">Realm</span>
          </h1>
          <p className="homehero-description">
            At <span className="homehighlight-text">DigiDefence</span>, we're
            your vigilant guardians in the ever-evolving landscape of digital
            threats.
          </p>
          <div className="hero-cta">
            <Link to="/case-studies" className="primary-button">
              Get Started
            </Link>
            <Link to="/technologyconsultant" className="secondary-button">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <FaShieldAlt className="stat-icon" />
            <h3>500+</h3>
            <p>Security Audits</p>
          </div>
          <div className="stat-item">
            <FaUserCheck className="stat-icon" />
            <h3>200+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <FaChartLine className="stat-icon" />
            <h3>98%</h3>
            <p>Success Rate</p>
          </div>
          <div className="stat-item">
            <FaClock className="stat-icon" />
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>Who We Are</h2>
        <p>
          We're a passionate team of cyber knights—experts from services,
          industry, compliance, and academia—armed with cutting-edge solutions
          to defend your organization's data, processes, IT platforms, and
          brand. Our mission is to keep your digital castle safe from dragons,
          trolls, and mischievous imps.
        </p>
        <Link to="/aboutus" className="about-button">
          About Us
        </Link>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>What We Offer</h2>
        <div className="services-grid">
          <Link to="/technologyconsultant" className="service-card-link">
            <div className="service-card">
              <h3>Technology Consultancy</h3>
              <p>
                Leveraging best-in-class tools and technologies tailored to your
                unique needs.
              </p>
            </div>
          </Link>
          <Link to="/compliance_assessment" className="service-card-link">
            <div className="service-card">
              <h3>Compliance Assessments</h3>
              <p>
                Continuous assessments of your data, platforms, and procedures
                to meet industry and regulatory requirements.
              </p>
            </div>
          </Link>
          <Link to="/risk-management" className="service-card-link">
            <div className="service-card">
              <h3>Risk Assessments</h3>
              <p>
                Like seasoned fortune tellers, we identify process gaps and help
                you fortify them.
              </p>
            </div>
          </Link>
          <Link to="/devsecops" className="service-card-link">
            <div className="service-card">
              <h3>DevSecOps Security</h3>
              <p>
                We deliver integrated security throughout your software
                development lifecycle, "shifting left" to proactively identify
                and mitigate vulnerabilities as a convenient, managed service.
              </p>
            </div>
          </Link>
          <Link to="/cloudsecurity" className="service-card-link">
            <div className="service-card">
              <h3>Cloud Security</h3>
              <p>
                We provide proactive, integrated security monitoring and
                protection for your cloud environments, delivered as a fully
                managed service.
              </p>
            </div>
          </Link>
          <Link to="/aiml" className="service-card-link">
            <div className="service-card">
              <h3>AI/ML Security</h3>
              <p>
                We deliver specialized security solutions to protect your
                Artificial Intelligence and Machine Learning models and data
                from adversarial attacks and vulnerabilities, provided as a
                managed service.
              </p>
            </div>
          </Link>
          <Link to="/iot-security" className="service-card-link">
            <div className="service-card">
              <h3>IOT Security</h3>
              <p>
                We offer end-to-end security for your Internet of Things devices
                and ecosystems, encompassing identification, monitoring, and
                threat response as a managed offering.
              </p>
            </div>
          </Link>
          <Link to="/mobilewebsecurity" className="service-card-link">
            <div className="service-card">
              <h3>Mobile and Web Development Security</h3>
              <p>
                We embed security best practices and continuous testing into
                your mobile and web application development lifecycle, ensuring
                secure code and resilient applications.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="featured-cases">
        <h2>Success Stories</h2>
        <div className="cases-grid">
          <div className="case-card">
            <div className="case-content">
              <h3>Financial Institution</h3>
              <p>
                Strengthened security infrastructure resulting in 99.9% threat
                prevention
              </p>
              <Link to="/case-studies" className="read-more">
                Read More <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className="case-card">
            <div className="case-content">
              <h3>Healthcare Provider</h3>
              <p>
                Implemented HIPAA-compliant security measures across 50+
                facilities
              </p>
              <Link to="/case-studies" className="read-more">
                Read More <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className="case-card">
            <div className="case-content">
              <h3>Tech Startup</h3>
              <p>
                Secured cloud infrastructure and DevOps pipeline for rapid
                scaling
              </p>
              <Link to="/case-studies" className="read-more">
                Read More <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Security Insights Section - Replacing Trust Bar */}
      <section className="security-insights">
        <h2>Latest Security Insights</h2>
        <div className="insights-grid">
          <div className="insight-card">
            <div className="insight-icon">
              <FaShieldAlt />
            </div>
            <div className="insight-content">
              <h3>AI-Powered Threats</h3>
              <p>
                Learn how organizations are combating sophisticated AI-driven
                cyber attacks with advanced detection systems.
              </p>
              <div className="insight-stats">
                <span>Trend Impact: High</span>
                <span className="trend-up">↑ 85% YoY</span>
              </div>
            </div>
          </div>

          <div className="insight-card">
            <div className="insight-icon">
              <FaChartLine />
            </div>
            <div className="insight-content">
              <h3>Zero Trust Security</h3>
              <p>
                Discover why companies are rapidly adopting zero trust
                architectures for enhanced security posture.
              </p>
              <div className="insight-stats">
                <span>Adoption Rate: Rising</span>
                <span className="trend-up">↑ 60% Growth</span>
              </div>
            </div>
          </div>

          <div className="insight-card">
            <div className="insight-icon">
              <FaClock />
            </div>
            <div className="insight-content">
              <h3>Quick Security Tips</h3>
              <ul className="security-tips">
                <li>Enable Multi-Factor Authentication</li>
                <li>Regular Security Audits</li>
                <li>Employee Training Programs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="insights-cta">
          <Link to="/blog" className="insight-button">
            View All Insights
          </Link>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="hcta">
        <div className="hcta-card">
          <div className="hcta-badge">100+ Businesses Secured</div>
          <h1>Ready to Secure Your Digital Future?</h1>
          <p className="hcta-subheading">
            Get a free, no-obligation security assessment from our experts.
          </p>
          <ul className="hcta-benefits">
            <li>✔️ No sales pitch</li>
            <li>✔️ Expert advice</li>
            <li>✔️ Actionable insights</li>
          </ul>
          <Link to="/contact" className="hcta-primary redesigned">
            <span className="hcta-icon">🔒</span>
            <span className="hcta-text">Book Your Free Consultation</span>
            <span className="hcta-arrow">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
