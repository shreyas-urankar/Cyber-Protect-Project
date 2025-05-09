import React from "react";
import "../styles/TechnologyConsultant.css";
import {
  FaLaptopCode,
  FaShieldAlt,
  FaServer,
  FaCloudUploadAlt,
  FaRobot,
  FaCode,
  FaDatabase,
  FaTeamspeak,
  FaHandsHelping,
  
} from "react-icons/fa";
import { FaArrowDownUpAcrossLine, FaMoneyBillTrendUp } from "react-icons/fa6";

const TechnologyConsultant = () => {
  return (
    <div className="service-page-container">
      {/* Main Content */}
      <main className="main-section">
        {/* Header */}
        <div className="header-section">
          <h1 className="main-title">Technology Consultancy</h1>
          <div className="header-line"></div>
        </div>

        {/* Service Overview */}
        <section className="service-overview">
          <div className="tech-icon-main">
            <FaLaptopCode />
          </div>

          <p className="service-intro">
            In today's fast-paced digital world, businesses need to stay ahead
            with the latest technologies to enhance efficiency, security, and
            growth. Our Technology Consultancy services help organizations
            implement the best tools and solutions to drive innovation and
            success. We analyze your business needs and recommend the most
            effective technologies to optimize your IT infrastructure and
            digital transformation journey.
          </p>

          {/* Our Services Section */}
          <div className="content-block">
            <h3>Our Services</h3>
            <p>
              We offer a range of consultancy services to help businesses adopt
              the right technologies. Our experts work closely with you to
              understand your requirements and deliver customized solutions.
            </p>
            <div className="services-list">
              <div className="service-item">
                <div className="service-icon">
                  <FaServer />
                </div>
                <div className="service-content">
                  <h4>IT Infrastructure Consulting</h4>
                  <p>
                    Optimize your IT systems, migrate to the cloud, and enhance
                    operational efficiency with scalable solutions.
                  </p>
                </div>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <FaShieldAlt />
                </div>
                <div className="service-content">
                  <h4>Cybersecurity Solutions</h4>
                  <p>
                    Protect your business from cyber threats with advanced
                    security strategies, risk assessments, and data protection
                    measures.
                  </p>
                </div>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <FaRobot />
                </div>
                <div className="service-content">
                  <h4>Digital Transformation</h4>
                  <p>
                    Implement AI, automation, and modern technology stacks to
                    drive innovation and efficiency.
                  </p>
                </div>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <FaCode />
                </div>
                <div className="service-content">
                  <h4>Custom Software & App Development</h4>
                  <p>
                    Build high-performance applications tailored to your
                    business needs, from mobile apps to enterprise software.
                  </p>
                </div>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <FaDatabase />
                </div>
                <div className="service-content">
                  <h4>Data Security & Compliance</h4>
                  <p>
                    Ensure your organization meets regulatory standards such as
                    GDPR, ISO 27001, and industry-specific compliance
                    requirements.
                  </p>
                </div>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <FaCloudUploadAlt />
                </div>
                <div className="service-content">
                  <h4>Cloud Migration & Management</h4>
                  <p>
                    Seamlessly transition your infrastructure to cloud platforms
                    with our end-to-end migration services, ongoing
                    optimization, and cloud-native solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Expertise */}
          <div className="content-block">
            <h3>Industry Expertise</h3>
            <p>
              Our consultancy services are designed for businesses across
              various industries. We have successfully assisted companies in
              sectors such as finance, healthcare, government, e-commerce, and
              IT. Our expertise allows us to develop industry-specific solutions
              that align with your unique challenges and goals.
            </p>

            <div className="industry-expertise">
              <div className="industry-item">
                <h4>Finance</h4>
              </div>
              <div className="industry-item">
                <h4>Healthcare</h4>
              </div>
              <div className="industry-item">
                <h4>Government</h4>
              </div>
              <div className="industry-item">
                <h4>E-commerce</h4>
              </div>
              <div className="industry-item">
                <h4>Information Technology</h4>
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="content-block">
            <h3>Tools & Technologies</h3>
            <p>
              We use industry-leading technologies to provide the best solutions
              for your business. Whether you're looking for cloud solutions,
              cybersecurity enhancements, or AI-driven applications, we ensure
              you have access to the best tools available.
            </p>

            <div className="tools-grid">
              <div className="tool-category">
                <h4>
                  <FaCloudUploadAlt /> Cloud
                </h4>
                <ul>
                  <li>AWS</li>
                  <li>Azure</li>
                  <li>Google Cloud</li>
                </ul>
              </div>

              <div className="tool-category">
                <h4>
                  <FaShieldAlt /> Security
                </h4>
                <ul>
                  <li>Firewalls</li>
                  <li>SIEM</li>
                  <li>Endpoint Protection</li>
                  <li>Penetration Testing</li>
                </ul>
              </div>

              <div className="tool-category">
                <h4>
                  <FaCode /> Development
                </h4>
                <ul>
                  <li>React</li>
                  <li>Python</li>
                  <li>Swift</li>
                  <li>Kotlin</li>
                </ul>
              </div>

              <div className="tool-category">
                <h4>
                  <FaRobot /> Data & AI
                </h4>
                <ul>
                  <li>Machine Learning</li>
                  <li>Data Analytics</li>
                  <li>Big Data</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Us? */}
          <div className="content-block">
            <h3>Why Choose Us ❓</h3>
            <p>
              Choosing the right technology consultancy partner is crucial for
              your business success. We differentiate ourselves by providing
              strategic, results-driven solutions tailored to your needs.
            </p>

            <div className="benefits-grid">
              <div className="benefit-item">
                <h4> <FaTeamspeak/> Expertise</h4>
                <p>
                  Our team consists of industry-certified professionals with
                  years of experience.
                </p>
              </div>

              <div className="benefit-item">
                <h4> <FaArrowDownUpAcrossLine/> Tailored Solutions</h4>
                <p>
                  We analyze your requirements and develop customized technology
                  solutions.
                </p>
              </div>

              <div className="benefit-item">
                <h4> <FaMoneyBillTrendUp/> Cost-Efficiency</h4>
                <p>
                  Optimize your IT investments while reducing operational costs.
                </p>
              </div>

              <div className="benefit-item">
                <h4> <FaHandsHelping/> End-to-End Support</h4>
                <p>
                  From consultation to implementation and ongoing support, we're
                  with you at every step.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TechnologyConsultant;
