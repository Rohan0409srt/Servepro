import React from "react";
import "../../../style/OperationMaintance.css";

import banner from "../../../assets/images/1servepro/service-main-banner/tech-main-banner.jpeg";

import img1 from "../../../assets/images/1servepro/Technical_service/Operation-Maintenance/1 Machine Operation & Production Control.jpg";

const OperationMaintance = () => {
  return (
    <div className="technical-service-page">
      <section
        className="technical-service-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="technical-service-banner-overlay"></div>
      </section>

      <section className="technical-service-section">
        <div className="technical-service-container">

          <div className="technical-service-intro">
            <h1>
              How does professional operation and maintenance service ensure
              smooth facility operations, equipment reliability, and maximum
              efficiency?
            </h1>

            <span className="technical-service-border"></span>

            <p>
              Operation and Maintenance Services focus on regular inspections,
              preventive maintenance, repairs, troubleshooting, asset
              management, and technical support. These services help identify
              operational problems, reduce downtime, maintain equipment
              performance, and ensure smooth and efficient facility
              operations.
            </p>
          </div>

          <div className="technical-service-list">

            <div className="technical-service-card">
              <div className="technical-service-text">
                <h2>Inspection &amp; Preventive Maintenance</h2>
                <ul>
                  <li>Regular inspections, maintenance, and repairs</li>
                  <li>Preventive maintenance planning</li>
                  <li>Equipment condition monitoring</li>
                  <li>Routine facility system inspection</li>
                </ul>
              </div>

              <div className="technical-service-image">
                <img src={img1} alt="Operation and Maintenance" />
              </div>
            </div>

            <div className="technical-service-card reverse">
              <div className="technical-service-text">
                <h2>Breakdown &amp; Troubleshooting Support</h2>
                <ul>
                  <li>Addressing breakdowns and malfunctions</li>
                  <li>Provide support in troubleshooting &amp; assistance</li>
                  <li>Technical fault identification</li>
                  <li>Repair and restoration support</li>
                </ul>
              </div>

              <div className="technical-service-image">
                <img src={img1} alt="Troubleshooting Support" />
              </div>
            </div>

            <div className="technical-service-card">
              <div className="technical-service-text">
                <h2>Asset Lifecycle Management</h2>
                <ul>
                  <li>Track and manage the lifecycle of assets</li>
                  <li>Asset performance monitoring</li>
                  <li>Maintenance history management</li>
                  <li>Equipment replacement planning</li>
                </ul>
              </div>

              <div className="technical-service-image">
                <img src={img1} alt="Asset Management" />
              </div>
            </div>

            <div className="technical-service-card reverse">
              <div className="technical-service-text">
                <h2>Technical Support &amp; Operational Efficiency</h2>
                <ul>
                  <li>Providing technical support &amp; assistance to users</li>
                  <li>Ensure smooth operation and maximize efficiency</li>
                  <li>Operational performance monitoring</li>
                  <li>Continuous maintenance support</li>
                </ul>
              </div>

              <div className="technical-service-image">
                <img src={img1} alt="Operational Efficiency" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default OperationMaintance;