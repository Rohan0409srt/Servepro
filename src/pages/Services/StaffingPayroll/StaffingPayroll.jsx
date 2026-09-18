import React from "react";
import "../../../style/StaffingPayroll.css";

import bannerImg from "../../../assets/images/1servepro/Business_Support_Services/Staffing-Payroll/banner.jpg";

import recruitmentImg from "../../../assets/images/1servepro/Business_Support_Services/Staffing-Payroll/1Recruitment.jpg";
import workforceImg from "../../../assets/images/1servepro/Business_Support_Services/Staffing-Payroll/2 Workforce Deployment.jpg";
import payrollImg from "../../../assets/images/1servepro/Business_Support_Services/Staffing-Payroll/3 Payroll Processing .png";
import complianceImg from "../../../assets/images/1servepro/Business_Support_Services/Staffing-Payroll/4 Compliance, Reporting & Governance.jpg";

const services = [
  {
    title: "Recruitment & Talent Acquisition",
    image: recruitmentImg,
    reverse: false,
    points: [
      "Connecting Candidates and Employers",
      "Matching Candidates with Job Requirements",
      "Talent Acquisition Strategy",
      "Experienced Workforce Hiring",
      "Recruitment Support Services",
    ],
  },
  {
    title: "Staffing Solutions & Workforce Deployment",
    image: workforceImg,
    reverse: true,
    points: [
      "Filling Temporary and Contract Positions",
      "Contract and Temporary Staffing Solutions",
      "Workforce Planning and Deployment",
      "Employee Onboarding and Documentation",
    ],
  },
  {
    title: "Payroll Processing & Employee Management",
    image: payrollImg,
    reverse: false,
    points: [
      "Payroll Management and Compliance Handling",
      "Payroll Processing and Salary Disbursement",
      "Attendance and Leave Management",
      "HR Records and Employee Data Management",
    ],
  },
  {
    title: "Compliance, Reporting & Governance",
    image: complianceImg,
    reverse: true,
    points: [
      "Statutory Compliance Management",
      "Compliance Reporting and Audits",
      "Regulatory Adherence and Documentation",
      "Process Accuracy and Control Measures",
    ],
  },
];

const StaffingAndPayroll = () => {
  return (
    <div className="staffing-payroll-page">

      {/* Banner */}
      <section
        className="staffing-payroll-banner"
        style={{ backgroundImage: `url("${bannerImg}")` }}
        aria-label="Staffing and Payroll Services"
      >
        <div className="staffing-payroll-banner-overlay" />
      </section>

      {/* Main Content */}
      <section className="staffing-payroll-section">
        <div className="staffing-payroll-container">

          {/* Intro */}
          <div className="staffing-payroll-intro">
            <h2>
              How does a staffing and payroll service help organizations source
              the right talent while efficiently managing payroll and statutory
              compliance?
            </h2>

            <span className="staffing-payroll-border" />

            <p>
              Staffing and Payroll Services support organizations by connecting
              employers with qualified candidates, fulfilling temporary and
              contract staffing needs, and ensuring the right talent is matched
              to job requirements. The service also manages payroll processing,
              statutory compliances, and employee compensation, enabling
              businesses to focus on core operations. By streamlining
              recruitment, workforce management, and payroll administration,
              the service ensures efficiency, accuracy, and compliance across
              the employee lifecycle.
            </p>
          </div>

          {/* Service Cards */}
          <div className="staffing-payroll-list">
            {services.map((service, index) => (
              <article
                className={`staffing-payroll-card ${
                  service.reverse ? "reverse" : ""
                }`}
                key={service.title}
              >
                <div className="staffing-payroll-card-text">
                  <h3>{service.title}</h3>

                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="staffing-payroll-card-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default StaffingAndPayroll;