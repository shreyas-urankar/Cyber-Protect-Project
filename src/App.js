import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import RiskAssessments from "./components/RiskAssessments";
import RiskAssessmentsFAQs from "./components/RiskAssessmentFAQs"; // Corrected from RiskAssessments_FAQs
import RiskAssessmentsTestimonials from "./components/RiskAssessmentsTestimonials"; // Corrected from RiskAssessments_Testimonials
import CaseStudies from "./components/CaseStudies";
import GetStarted from "./components/GetStarted";
import TecnologyConsultant from "./components/TechnologyConsultant";
import Blog from "./components/Blog";
import ComplianceAssessment from "./components/compliance_assessment";
import AIML from "./components/AIML";
import IotSecurity from "./components/IotSecurity";
import ContactPage from "./components/Contact";
import CloudSecurity from "./components/CloudSecurity";
import MobileWebSecurity from "./components/MobileWebSecurity";
import ScrollToTop from "./components/ScrollToTop";
import AIModelAudit from './components/AIModelAudit';
import AICompliance from './components/AICompliance';
import AIThreatProtection from './components/AIThreatProtection';
import AISecurityTools from './components/AISecurityTools';
import RequestAudit from './components/RequestAudit';
import ContactExpert from './components/ContactExpert';
import DownloadBrochure from './components/DownloadBrochure';
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/risk-management" element={<RiskAssessments />} />
        <Route path="/faqs" element={<RiskAssessmentsFAQs />} />
        <Route path="/testimonials" element={<RiskAssessmentsTestimonials />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/technologyconsultant" element={<TecnologyConsultant />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aiml" element={<AIML />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/compliance_assessment" element={<ComplianceAssessment />} />
        <Route path="/iot-security" element={<IotSecurity />} />
        <Route path="/cloudsecurity" element={<CloudSecurity />} />
        <Route path="/mobilewebsecurity" element={<MobileWebSecurity />} />
        <Route path="/ai-model-audit" element={<AIModelAudit />} />
        <Route path="/ai-compliance" element={<AICompliance />} />
        <Route path="/ai-threats" element={<AIThreatProtection />} />
        <Route path="/ai-tools" element={<AISecurityTools />} />
        <Route path="/request-audit" element={<RequestAudit />} />
        <Route path="/contact-expert" element={<ContactExpert />} />
        <Route path="/download-brochure" element={<DownloadBrochure />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;