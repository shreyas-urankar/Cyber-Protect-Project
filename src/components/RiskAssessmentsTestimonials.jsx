import React from "react";
import { Link } from "react-router-dom";
import "../styles/RiskAssessmentTestimonials.css"; // Updated to match assumed file name
import { FaArrowRight, FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="tservice-page-container">
      <main className="tmain-section">
        <div className="theader-section">
          <h1 className="tmain-title">Client Testimonials</h1>
          <div className="theader-line"></div>
        </div>

        <section className="tservice-overview">
          <div className="t-tech-icon-main">
            <FaStar />
          </div>

          <p className="tservice-intro">
            Hear from our clients about the impact of our risk assessment services
            on their organizations.
          </p>

          <div className="tcontent-block">
            <h3>What Our Clients Say</h3>
            <div className="ttestimonials-grid">
              <div className="ttestimonial-item">
                <FaStar className="ttestimonial-star" />
                <p>
                  "Their risk assessment was thorough and provided us with a clear
                  roadmap to enhance our security posture. Highly recommend!"
                </p>
                <h4>- TechCorp CEO</h4>
              </div>
              <div className="ttestimonial-item">
                <FaStar className="ttestimonial-star" />
                <p>
                  "The team’s expertise in compliance frameworks helped us achieve
                  GDPR compliance swiftly and efficiently."
                </p>
                <h4>- HealthSys CTO</h4>
              </div>
              <div className="ttestimonial-item">
                <FaStar className="ttestimonial-star" />
                <p>
                  "Their vendor risk assessment identified critical gaps in our
                  supply chain, saving us from potential breaches."
                </p>
                <h4>- ManuCorp Security Director</h4>
              </div>
            </div>
          </div>

          <div className="tcontent-block">
            <h3>Share Your Experience</h3>
            <p>
              Have a story to share? Contact us to provide your feedback or learn
              how we can assist your organization.
            </p>
            <div className="tcta-section">
              <Link to="/contact" className="tcta-button">
                Contact Us <FaArrowRight style={{ marginLeft: "8px" }} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Testimonials;