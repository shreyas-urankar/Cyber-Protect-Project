import React from "react";
import "../styles/IotSecurity.css";
import {
  FiWifi,
  FiCloud,
  FiCheck,
  FiCpu,
  FiAlertCircle,
  FiDatabase,
  FiActivity,
  FiServer,
  FiHeart,
  FiTruck,
  FiShoppingCart,
  FiGlobe,
  FiHome,
} from "react-icons/fi";
import IotImage from "../assets/iot.png";
import { FaThinkPeaks } from "react-icons/fa";

const IOT_Security = () => {
  return (
    <div className="iot-page">
      {/* Hero Banner */}
      <section className="iot-hero">
        <div className="iot-hero-content">
          <h1>IoT Security Solutions</h1>
          <div className="iot-headerline"></div>
          <div className="iot-icon-main">
            <FaThinkPeaks />
          </div>
          <p className="iot-hero-subtitle">
            End-to-end protection for your connected devices and infrastructure
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="iot-container">
        {/* Why IoT Security Section */}
        <section className="iot-section">
          <h2 className="iot-section-title">
            The Critical Need for IoT Security
          </h2>
          <div className="iot-section-divider"></div>
          <p className="iot-section-text">
            The Internet of Things (IoT) is transforming industries, but with
            this transformation comes significant security risks. Unsecured IoT
            devices serve as entry points for cyber attacks, potentially leading
            to data breaches, operational disruptions, and compromised networks.
            Our specialized solutions provide comprehensive protection for your
            entire IoT ecosystem.
          </p>

          <div className="iot-risk-grid">
            <div className="iot-risk-card">
              <div className="iot-risk-icon">
                <FiAlertCircle />
              </div>
              <h3>Growing Threat Landscape</h3>
              <p>
                IoT attacks increased by 300% in 2022, with botnets targeting
                vulnerable devices
              </p>
            </div>

            <div className="iot-risk-card">
              <div className="iot-risk-icon">
                <FiDatabase />
              </div>
              <h3>Data Vulnerability</h3>
              <p>
                60% of IoT devices expose sensitive data due to inadequate
                security measures
              </p>
            </div>

            <div className="iot-risk-card">
              <div className="iot-risk-icon">
                <FiActivity />
              </div>
              <h3>Regulatory Compliance</h3>
              <p>
                New regulations mandate strict IoT security standards with heavy
                penalties for non-compliance
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="iot-section">
          <h2 className="iot-section-title">
            Our Comprehensive IoT Security Services
          </h2>
          <div className="iot-section-divider"></div>
          <p className="iot-section-text">
            We offer a full suite of security services tailored specifically for
            IoT environments, addressing vulnerabilities at every layer of your
            technology stack.
          </p>

          <div className="iot-services-grid">
            <div className="iot-service-card">
              <div className="iot-service-icon">
                <FiCpu />
              </div>
              <h3>Device Protection</h3>
              <p>Hardware-level security for your IoT endpoints</p>
              <ul className="iot-feature-list">
                <li>
                  <FiCheck /> Secure boot implementation with cryptographic
                  verification
                </li>
                <li>
                  <FiCheck /> Firmware integrity checks and over-the-air update
                  security
                </li>
                <li>
                  <FiCheck /> Hardware security modules (HSMs) for key
                  protection
                </li>
                <li>
                  <FiCheck /> Physical tamper detection and response mechanisms
                </li>
                <li>
                  <FiCheck /> Secure element integration for sensitive
                  operations
                </li>
              </ul>
            </div>

            <div className="iot-service-card">
              <div className="iot-service-icon">
                <FiWifi />
              </div>
              <h3>Network Security</h3>
              <p>Protection for data in transit between devices</p>
              <ul className="iot-feature-list">
                <li>
                  <FiCheck /> End-to-end encrypted communications (TLS 1.3,
                  DTLS)
                </li>
                <li>
                  <FiCheck /> Network segmentation and micro-segmentation
                  strategies
                </li>
                <li>
                  <FiCheck /> AI-powered anomaly detection and behavior analysis
                </li>
                <li>
                  <FiCheck /> Protocol-specific protections for MQTT, CoAP, AMQP
                </li>
                <li>
                  <FiCheck /> Secure device onboarding and authentication
                </li>
              </ul>
            </div>

            <div className="iot-service-card">
              <div className="iot-service-icon">
                <FiCloud />
              </div>
              <h3>Cloud & Platform Security</h3>
              <p>Security for your IoT platform and data storage</p>
              <ul className="iot-feature-list">
                <li>
                  <FiCheck /> Secure API gateways with rate limiting and DDoS
                  protection
                </li>
                <li>
                  <FiCheck /> Data encryption at rest (AES-256) and in transit
                </li>
                <li>
                  <FiCheck /> Fine-grained access controls and RBAC
                  implementation
                </li>
                <li>
                  <FiCheck /> Secure device management and provisioning
                </li>
                <li>
                  <FiCheck /> Compliance with cloud security best practices
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Security Approach */}
        <section className="iot-section iot-approach-section">
          <div className="iot-approach-content">
            <h2 className="iot-section-title">Our Security Approach</h2>
            <div className="iot-section-divider"></div>

            <div className="iot-process-steps">
              <div className="iot-process-step">
                <div className="iot-step-number">1</div>
                <div className="iot-step-content">
                  <h3>Assessment</h3>
                  <p>
                    Comprehensive evaluation of your IoT ecosystem
                    vulnerabilities
                  </p>
                </div>
              </div>

              <div className="iot-process-step">
                <div className="iot-step-number">2</div>
                <div className="iot-step-content">
                  <h3>Protection</h3>
                  <p>
                    Implementation of tailored security controls and protocols
                  </p>
                </div>
              </div>

              <div className="iot-process-step">
                <div className="iot-step-number">3</div>
                <div className="iot-step-content">
                  <h3>Monitoring</h3>
                  <p>24/7 surveillance with real-time threat detection</p>
                </div>
              </div>
            </div>
          </div>
          <div className="iot-approach-image">
            <img src={IotImage} alt="IoT Security Process" />
          </div>
        </section>

        {/* Industries Protected */}
        <section className="iot-section">
          <h2 className="iot-section-title">
            Industry-Specific IoT Protection
          </h2>
          <div className="iot-section-divider"></div>
          <p className="iot-section-text">
            We provide specialized security solutions tailored to the unique
            requirements of different industries.
          </p>

          <div className="iot-industries-grid">
            <div className="iot-industry-card">
              <div className="iot-industry-icon">
                <FiServer />
              </div>
              <h3>Industrial IoT (IIoT)</h3>
              <p>
                Securing manufacturing equipment, SCADA systems, and industrial
                control systems against operational technology (OT) threats with
                minimal downtime impact.
              </p>
              <div className="iot-industry-features">
                <span>
                  <FiCheck /> OT network segmentation
                </span>
                <span>
                  <FiCheck /> PLC security hardening
                </span>
                <span>
                  <FiCheck /> Industrial protocol protection
                </span>
              </div>
            </div>

            <div className="iot-industry-card">
              <div className="iot-industry-icon">
                <FiHeart />
              </div>
              <h3>Healthcare (IoMT)</h3>
              <p>
                Protecting medical devices, patient monitoring systems, and
                healthcare data with HIPAA-compliant security measures that
                don't interfere with critical care functions.
              </p>
              <div className="iot-industry-features">
                <span>
                  <FiCheck /> Medical device hardening
                </span>
                <span>
                  <FiCheck /> PHI data protection
                </span>
                <span>
                  <FiCheck /> Emergency mode security
                </span>
              </div>
            </div>

            <div className="iot-industry-card">
              <div className="iot-industry-icon">
                <FiHome />
              </div>
              <h3>Smart Cities</h3>
              <p>
                Securing traffic management systems, public safety
                infrastructure, and municipal services against large-scale
                attacks that could disrupt essential services.
              </p>
              <div className="iot-industry-features">
                <span>
                  <FiCheck /> Critical infrastructure protection
                </span>
                <span>
                  <FiCheck /> Public safety system security
                </span>
                <span>
                  <FiCheck /> Mass-scale device management
                </span>
              </div>
            </div>

            <div className="iot-industry-card">
              <div className="iot-industry-icon">
                <FiTruck />
              </div>
              <h3>Transportation</h3>
              <p>
                Protecting connected vehicles, fleet management systems, and
                logistics IoT with real-time security that doesn't impact
                operational performance.
              </p>
              <div className="iot-industry-features">
                <span>
                  <FiCheck /> Vehicle network security
                </span>
                <span>
                  <FiCheck /> Telematics protection
                </span>
                <span>
                  <FiCheck /> Supply chain integrity
                </span>
              </div>
            </div>

            <div className="iot-industry-card">
              <div className="iot-industry-icon">
                <FiShoppingCart />
              </div>
              <h3>Retail</h3>
              <p>
                Securing point-of-sale systems, inventory management, and
                customer tracking devices while maintaining PCI DSS compliance
                and protecting customer data.
              </p>
              <div className="iot-industry-features">
                <span>
                  <FiCheck /> Payment system security
                </span>
                <span>
                  <FiCheck /> Beacon security
                </span>
                <span>
                  <FiCheck /> Inventory protection
                </span>
              </div>
            </div>

            <div className="iot-industry-card">
              <div className="iot-industry-icon">
                <FiGlobe />
              </div>
              <h3>Energy & Utilities</h3>
              <p>
                Protecting smart grids, metering infrastructure, and energy
                management systems against attacks that could disrupt power
                distribution or enable fraud.
              </p>
              <div className="iot-industry-features">
                <span>
                  <FiCheck /> Smart meter security
                </span>
                <span>
                  <FiCheck /> Grid protection
                </span>
                <span>
                  <FiCheck /> Remote monitoring security
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default IOT_Security;
