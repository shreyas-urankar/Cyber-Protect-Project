import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import Navbar from "../components/Navbar";
import ScrollAnimation from "../components/ScrollAnimation";

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
            At <span className="homehighlight-text">CyberProtect Solutions</span>,
            we're your vigilant guardians in the ever-evolving landscape of
            digital threats.
          </p>
        </div>
      </section>


      {/* About Section */}
      <section className="about">
        <h2>Who We Are</h2>
        <p>
          We're a passionate team of cyber knights—experts from services,
          industry, compliance, and academia—armed with cutting-edge solutions
          to defend your organization’s data, processes, IT platforms, and
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
          <div className="service-card">
            <h3>Technology Consultancy</h3>
            <p>
              Leveraging best-in-class tools and technologies tailored to your
              unique needs.
            </p>
          </div>
          <div className="service-card">
            <h3>Compliance Assessments</h3>
            <p>
              Continuous assessments of your data, platforms, and procedures to
              meet industry and regulatory requirements.
            </p>
          </div>
          <div className="service-card">
            <h3>Risk Assessments</h3>
            <p>
              Like seasoned fortune tellers, we identify process gaps and help
              you fortify them.
            </p>
          </div>
          <div className="service-card">
            <h3>DevSecOps Security</h3>
            <p>
              We deliver integrated security throughout your software
              development lifecycle, "shifting left" to proactively identify and
              mitigate vulnerabilities as a convenient, managed service.
            </p>
          </div>
          <div className="service-card">
            <h3>Cloud Security</h3>
            <p>
              We provide proactive, integrated security monitoring and
              protection for your cloud environments, delivered as a fully
              managed service.
            </p>
          </div>
          <div className="service-card">
            <h3>AI/ML Security</h3>
            <p>
              We deliver specialized security solutions to protect your
              Artificial Intelligence and Machine Learning models and data from
              adversarial attacks and vulnerabilities, provided as a managed
              service.
            </p>
          </div>
          <div className="service-card">
            <h3>IOT Security</h3>
            <p>
              We offer end-to-end security for your Internet of Things devices
              and ecosystems, encompassing identification, monitoring, and
              threat response as a managed offering.
            </p>
          </div>
          <div className="service-card">
            <h3>Mobile and Web Development Security</h3>
            <p>
              We embed security best practices and continuous testing into your
              mobile and web application development lifecycle, ensuring secure
              code and resilient applications.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h1>Join Our Quest ⚜</h1>
        <h4>
          Ready to embark on this epic adventure ❔ Watch this space and follow
          us ❕
        </h4>
      </section>
    </div>
  );
};

export default HomePage;
