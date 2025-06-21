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
import future_vision from "../assets/future-vision.jpeg";
import digital_transformation from "../assets/digital-transformation.jpeg";
import cloud_computing from "../assets/cloud-computing.jpeg";
import cybersecurity_solutions from "../assets/cybersecurity-solutions.jpeg";
import implementation_process from "../assets/implementation-process.jpeg";
import technology_trends from "../assets/technology-trends.jpeg";

const TechnologyConsultant = () => {
  return (
    <div className="technology-page-container">
      {/* Main Content */}
      <main className="tmain-section">
        {/* Header */}
        <div className="theader-section">
          <h1 className="tmain-title">Technology Consultancy</h1>
          <div className="theader-line"></div>
        </div>

        {/* Service Overview */}
        <section className="tservice-overview">
          <div className="t-tech-icon-main">
            <FaLaptopCode />
          </div>

          <p className="tservice-intro">
            In today's fast-paced digital world, businesses need to stay ahead
            with the latest technologies to enhance efficiency, security, and
            growth. Our Technology Consultancy services help organizations
            implement the best tools and solutions to drive innovation and
            success. We analyze your business needs and recommend the most
            effective technologies to optimize your IT infrastructure and
            digital transformation journey.
          </p>

          {/* Our Services Section */}
          <div className="tcontent-block">
            <h3>Our Services</h3>
            <p>
              We offer a range of consultancy services to help businesses adopt
              the right technologies. Our experts work closely with you to
              understand your requirements and deliver customized solutions.
            </p>
            <div className="tservices-list">
              <div className="tservice-item">
                <div className="tservice-icon">
                  <FaServer />
                </div>
                <div className="tservice-content">
                  <h4>IT Infrastructure Consulting</h4>
                  <p>
                    Optimize your IT systems, migrate to the cloud, and enhance
                    operational efficiency with scalable solutions.
                  </p>
                </div>
              </div>

              <div className="tservice-item">
                <div className="tservice-icon">
                  <FaShieldAlt />
                </div>
                <div className="tservice-content">
                  <h4>Cybersecurity Solutions</h4>
                  <p>
                    Protect your business from cyber threats with advanced
                    security strategies, risk assessments, and data protection
                    measures.
                  </p>
                </div>
              </div>

              <div className="tservice-item">
                <div className="tservice-icon">
                  <FaRobot />
                </div>
                <div className="tservice-content">
                  <h4>Digital Transformation</h4>
                  <p>
                    Implement AI, automation, and modern technology stacks to
                    drive innovation and efficiency.
                  </p>
                </div>
              </div>

              <div className="tservice-item">
                <div className="tservice-icon">
                  <FaCode />
                </div>
                <div className="tservice-content">
                  <h4>Custom Software & App Development</h4>
                  <p>
                    Build high-performance applications tailored to your
                    business needs, from mobile apps to enterprise software.
                  </p>
                </div>
              </div>

              <div className="tservice-item">
                <div className="tservice-icon">
                  <FaDatabase />
                </div>
                <div className="tservice-content">
                  <h4>Data Security & Compliance</h4>
                  <p>
                    Ensure your organization meets regulatory standards such as
                    GDPR, ISO 27001, and industry-specific compliance
                    requirements.
                  </p>
                </div>
              </div>

              <div className="tservice-item">
                <div className="tservice-icon">
                  <FaCloudUploadAlt />
                </div>
                <div className="tservice-content">
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
          <div className="tcontent-block">
            <h3>Industry Expertise</h3>
            <p>
              Our consultancy services are designed for businesses across
              various industries. We have successfully assisted companies in
              sectors such as finance, healthcare, government, e-commerce, and
              IT. Our expertise allows us to develop industry-specific solutions
              that align with your unique challenges and goals.
            </p>

            <div className="tindustry-expertise">
              <div className="tindustry-item">
                <h4>Finance</h4>
              </div>
              <div className="tindustry-item">
                <h4>Healthcare</h4>
              </div>
              <div className="tindustry-item">
                <h4>Government</h4>
              </div>
              <div className="tindustry-item">
                <h4>E-commerce</h4>
              </div>
              <div className="tindustry-item">
                <h4>Information Technology</h4>
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="tcontent-block">
            <h3>Tools & Technologies</h3>
            <p>
              We use industry-leading technologies to provide the best solutions
              for your business. Whether you're looking for cloud solutions,
              cybersecurity enhancements, or AI-driven applications, we ensure
              you have access to the best tools available.
            </p>

            <div className="t-tools-grid">
              <div className="t-tool-category">
                <h4>
                  <FaCloudUploadAlt /> Cloud
                </h4>
                <ul>
                  <li>AWS</li>
                  <li>Azure</li>
                  <li>Google Cloud</li>
                </ul>
              </div>

              <div className="t-tool-category">
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

              <div className="t-tool-category">
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

              <div className="t-tool-category">
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
          <div className="tcontent-block">
            <h3>Why Choose Us ❓</h3>
            <p>
              Choosing the right technology consultancy partner is crucial for
              your business success. We differentiate ourselves by providing
              strategic, results-driven solutions tailored to your needs.
            </p>

            <div className="tbenefits-grid">
              <div className="tbenefit-item">
                <h4>
                  {" "}
                  <FaTeamspeak /> Expertise
                </h4>
                <p>
                  Our team consists of industry-certified professionals with
                  years of experience.
                </p>
              </div>

              <div className="tbenefit-item">
                <h4>
                  {" "}
                  <FaArrowDownUpAcrossLine /> Tailored Solutions
                </h4>
                <p>
                  We analyze your requirements and develop customized technology
                  solutions.
                </p>
              </div>

              <div className="tbenefit-item">
                <h4>
                  {" "}
                  <FaMoneyBillTrendUp /> Cost-Efficiency
                </h4>
                <p>
                  Optimize your IT investments while reducing operational costs.
                </p>
              </div>

              <div className="tbenefit-item">
                <h4>
                  {" "}
                  <FaHandsHelping /> End-to-End Support
                </h4>
                <p>
                  From consultation to implementation and ongoing support, we're
                  with you at every step.
                </p>
              </div>
            </div>
          </div>

          {/* Technology Trends Section */}
          <div className="tcontent-block">
            <h3>Emerging Technology Trends</h3>
            <div className="t-trends-container">
              <div className="t-trend-content">
                <p>
                  Stay ahead of the curve with our insights into the latest
                  technology trends. We continuously monitor and analyze
                  emerging technologies to help you make informed decisions for
                  your business.
                </p>
                <div className="t-trend-list">
                  <div className="t-trend-item">
                    <h4>Artificial Intelligence & Machine Learning</h4>
                    <p>
                      Leverage AI/ML to automate processes, gain insights, and
                      enhance decision-making.
                    </p>
                  </div>
                  <div className="t-trend-item">
                    <h4>Internet of Things (IoT)</h4>
                    <p>
                      Connect and manage devices to create smart, efficient
                      systems.
                    </p>
                  </div>
                  <div className="t-trend-item">
                    <h4>Blockchain Technology</h4>
                    <p>
                      Implement secure, transparent, and decentralized
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="t-trend-image">
                <img
                  src={technology_trends}
                  alt="Technology Trends Visualization"
                />
              </div>
            </div>
          </div>

          {/* Implementation Process Section */}
          <div className="tcontent-block">
            <h3>Our Implementation Process</h3>
            <div className="tprocess-container">
              <div className="tprocess-image">
                <img
                  src={implementation_process}
                  alt="Technology Implementation Process"
                />
              </div>
              <div className="tprocess-steps">
                <div className="tprocess-step">
                  <div className="tstep-number">1</div>
                  <div className="tstep-content">
                    <h4>Assessment & Planning</h4>
                    <p>
                      We begin with a thorough analysis of your current systems
                      and requirements.
                    </p>
                  </div>
                </div>
                <div className="tprocess-step">
                  <div className="tstep-number">2</div>
                  <div className="tstep-content">
                    <h4>Solution Design</h4>
                    <p>
                      Our experts design a customized solution tailored to your
                      needs.
                    </p>
                  </div>
                </div>
                <div className="tprocess-step">
                  <div className="tstep-number">3</div>
                  <div className="tstep-content">
                    <h4>Implementation</h4>
                    <p>
                      We execute the solution with minimal disruption to your
                      operations.
                    </p>
                  </div>
                </div>
                <div className="tprocess-step">
                  <div className="tstep-number">4</div>
                  <div className="tstep-content">
                    <h4>Training & Support</h4>
                    <p>
                      Comprehensive training and ongoing support ensure
                      successful adoption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Solutions Showcase */}
          <div className="tcontent-block">
            <h3>Technology Solutions Showcase</h3>
            <div className="tsolutions-showcase">
              <div className="tsolution-card">
                <div className="tsolution-image">
                  <img src={cloud_computing} alt="Cloud Computing Solutions" />
                </div>
                <div className="tsolution-content">
                  <h4>Cloud Computing Solutions</h4>
                  <p>
                    Transform your business with scalable cloud infrastructure.
                    Our solutions include hybrid cloud setups, cloud migration
                    strategies, and cloud-native application development.
                  </p>
                  <ul className="tsolution-features">
                    <li>Scalable Infrastructure</li>
                    <li>Cost Optimization</li>
                    <li>Enhanced Security</li>
                    <li>24/7 Monitoring</li>
                  </ul>
                </div>
              </div>
              <div className="tsolution-card">
                <div className="tsolution-image">
                  <img
                    src={cybersecurity_solutions}
                    alt="Cybersecurity Solutions"
                  />
                </div>
                <div className="tsolution-content">
                  <h4>Cybersecurity Solutions</h4>
                  <p>
                    Protect your digital assets with our comprehensive security
                    solutions. From threat detection to compliance management,
                    we ensure your business stays secure in the digital
                    landscape.
                  </p>
                  <ul className="tsolution-features">
                    <li>Threat Detection</li>
                    <li>Compliance Management</li>
                    <li>Data Protection</li>
                    <li>Security Training</li>
                  </ul>
                </div>
              </div>
              <div className="tsolution-card">
                <div className="tsolution-image">
                  <img
                    src={digital_transformation}
                    alt="Digital Transformation"
                  />
                </div>
                <div className="tsolution-content">
                  <h4>Digital Transformation</h4>
                  <p>
                    Accelerate your business growth with our digital
                    transformation services. We help you modernize operations,
                    implement automation, and leverage emerging technologies.
                  </p>
                  <ul className="tsolution-features">
                    <li>Process Automation</li>
                    <li>AI Integration</li>
                    <li>Data Analytics</li>
                    <li>IoT Solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Future Vision Section */}
          <div className="tcontent-block">
            <h3>Our Vision for the Future</h3>
            <div className="tvision-container">
              <div className="tvision-content">
                <p>
                  We envision a future where technology seamlessly integrates
                  with business operations, driving innovation and sustainable
                  growth. Our commitment to staying at the forefront of
                  technological advancements ensures that our clients are always
                  prepared for what's next.
                </p>
                <div className="tvision-points">
                  <div className="tvision-point">
                    <h4>Innovation Leadership</h4>
                    <p>
                      Pioneering new solutions and approaches in technology
                      consulting.
                    </p>
                  </div>
                  <div className="tvision-point">
                    <h4>Sustainable Technology</h4>
                    <p>
                      Implementing eco-friendly and sustainable technology
                      solutions.
                    </p>
                  </div>
                  <div className="tvision-point">
                    <h4>Global Impact</h4>
                    <p>
                      Creating positive change through technology on a global
                      scale.
                    </p>
                  </div>
                </div>
              </div>
              <div className="tvision-image">
                <img src={future_vision} alt="Future Technology Vision" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TechnologyConsultant;
