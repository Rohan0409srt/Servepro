import React from "react";
import "../../../style/WarehouseCleaning.css";

import banner from "../../../assets/images/1servepro/special-service/Warehouse-Cleaning/banner.jpg";

import img1 from "../../../assets/images/1servepro/special-service/Warehouse-Cleaning/1 Daily Warehouse Housekeeping (2).jpg";
import img2 from "../../../assets/images/1servepro/special-service/Warehouse-Cleaning/2 Flooring 1.jpg";
import img3 from "../../../assets/images/1servepro/special-service/Warehouse-Cleaning/3 Storage Area.jpg";
import img4 from "../../../assets/images/1servepro/special-service/Warehouse-Cleaning/4 Hygiene.jpg";

const WarehouseCleaning = () => {
  return (
    <div className="warehouse-cleaning-page">

      <section
        className="warehouse-cleaning-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="warehouse-cleaning-banner-overlay"></div>
      </section>

      <section className="warehouse-cleaning-section">
        <div className="warehouse-cleaning-container">

          <div className="warehouse-cleaning-intro">
            <h1>
              How does professional warehouse cleaning service improve
              safety, hygiene, and operational efficiency in industrial
              facilities?
            </h1>

            <span className="warehouse-cleaning-border"></span>

            <p>
              Warehouse Cleaning Service ensures a clean, safe, and
              well-organized industrial environment by maintaining floors,
              equipment, storage areas, and common facilities through
              systematic daily and periodic cleaning. Using specialized tools
              and trained staff, the service focuses on dust control, waste
              management, sanitation, and deep cleaning of high-traffic and
              critical areas. A well-maintained warehouse enhances safety
              compliance, improves workflow efficiency, protects machinery,
              and creates a healthier workplace for employees.
            </p>
          </div>

          <div className="warehouse-cleaning-service-list">

            <div className="warehouse-cleaning-card">
              <div className="warehouse-cleaning-text">
                <h2>Daily Warehouse Housekeeping</h2>

                <ul>
                  <li>Warehouse Cleaning Service</li>
                  <li>Daily Warehouse Cleaning Operations</li>
                  <li>Warehouse Floor Cleaning and Spill Management</li>
                  <li>High-Touch Surface Sanitization</li>
                </ul>
              </div>

              <div className="warehouse-cleaning-image">
                <img
                  src={img1}
                  alt="Daily Warehouse Housekeeping"
                />
              </div>
            </div>

            <div className="warehouse-cleaning-card reverse">
              <div className="warehouse-cleaning-text">
                <h2>Equipment, Safety &amp; Deep Cleaning</h2>

                <ul>
                  <li>Machinery and Equipment Cleaning</li>
                  <li>Periodic Deep Cleaning Services</li>
                  <li>Industrial Floor Scrubbing and Pressure Washing</li>
                  <li>Safety Equipment Inspection and Cleaning</li>
                </ul>
              </div>

              <div className="warehouse-cleaning-image">
                <img
                  src={img2}
                  alt="Equipment, Safety & Deep Cleaning"
                />
              </div>
            </div>

            <div className="warehouse-cleaning-card">
              <div className="warehouse-cleaning-text">
                <h2>Storage, Racking &amp; Exterior Areas</h2>

                <ul>
                  <li>Pallet and Racking Area Cleaning</li>
                  <li>Storage Area Organization and Maintenance</li>
                  <li>Exterior Warehouse and Loading Dock Cleaning</li>
                  <li>Waste Collection and Disposal</li>
                </ul>
              </div>

              <div className="warehouse-cleaning-image">
                <img
                  src={img3}
                  alt="Storage, Racking & Exterior Areas"
                />
              </div>
            </div>

            <div className="warehouse-cleaning-card reverse">
              <div className="warehouse-cleaning-text">
                <h2>Hygiene, Air Quality &amp; Compliance</h2>

                <ul>
                  <li>Restroom Cleaning and Hygiene Maintenance</li>
                  <li>Ventilation and Air Duct Cleaning</li>
                  <li>Industrial Warehouse Cleaning Solutions</li>
                  <li>Improved Safety and Operational Efficiency</li>
                </ul>
              </div>

              <div className="warehouse-cleaning-image">
                <img
                  src={img4}
                  alt="Hygiene, Air Quality & Compliance"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default WarehouseCleaning;