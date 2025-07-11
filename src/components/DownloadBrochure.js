import React from "react";
import "../styles/DownloadBrochure.css";
import { FaFileDownload, FaBookOpen } from "react-icons/fa";

const DownloadBrochure = () => {
  return (
    <div className="dservice-page-container">
      <main className="dmain-section">
        <div className="dheader-section">
          <h1 className="dmain-title">Download Our AI Security Brochure</h1>
          <div className="dheader-line"></div>
        </div>

        <section className="dservice-overview">
          <div className="d-tech-icon-main">
            <FaFileDownload />
          </div>

          <p className="dservice-intro">
            Get our comprehensive brochure detailing our AI/ML security services, 
            methodologies, and case studies.
          </p>

          <div className="dcontent-block">
            <h3>What's Included</h3>
            <div className="dservices-list">
              <div className="dservice-item">
                <div className="dservice-icon">
                  <FaBookOpen />
                </div>
                <div className="dservice-content">
                  <h4>Service Overview</h4>
                  <p>
                    Detailed explanation of our AI security audit and protection services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="dcontent-block">
            <h3>Get the Brochure</h3>
            <form className="dbrochure-form">
              <div className="dform-group">
                <label htmlFor="brochure-name">Name</label>
                <input type="text" id="brochure-name" required />
              </div>
              <div className="dform-group">
                <label htmlFor="brochure-email">Email</label>
                <input type="email" id="brochure-email" required />
              </div>
              <div className="dform-group">
                <label htmlFor="brochure-company">Company</label>
                <input type="text" id="brochure-company" required />
              </div>
              <button type="submit" className="dcta-button-primary">
                Download Now
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DownloadBrochure;