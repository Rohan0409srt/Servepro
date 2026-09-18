import React from "react";
import { Link } from "react-router-dom";
import "../../../style/Manufacturing.css";

import bannerImg from "../../../assets/images/1servepro/industry/Manifacturing-Units/banner.jpg";
import img1 from "../../../assets/images/1servepro/industry/Manifacturing-Units/manufacture1.jpg";
import img2 from "../../../assets/images/1servepro/industry/Manifacturing-Units/manufacture2.jpg";

import commercialImg from "../../../assets/images/1servepro/industry/commercial-corporate/commercial.jpg";
import residentialImg from "../../../assets/images/1servepro/industry/Residential-Area/residential 1.jpg";
import healthcareImg from "../../../assets/images/1servepro/industry/Health-sector/Health sector 2.jpg";
import educationImg from "../../../assets/images/1servepro/industry/Educational-Sector/collage.jpg";

const Manufacturing = () => {
  return (
    <div className="manufacturing-page">

      {/* ==================== BANNER ==================== */}
      <section
        className="manufacturing-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      />

      {/* ==================== MAIN CONTENT ==================== */}
      <section className="manufacturing-section">
        <div className="manufacturing-container">

          {/* ==================== INTRO ==================== */}
          <div className="manufacturing-intro">

            <div className="manufacturing-title">
              <h1>
                Manufacturing & Industrial Facility Management Services
              </h1>

              <span className="manufacturing-title-border"></span>
            </div>

            <div className="manufacturing-description">
              <p>
                We provide specialized facility management services for
                manufacturing units and industrial facilities, ensuring safe,
                efficient, and uninterrupted operations. Our team focuses on
                maintenance, safety compliance, and industrial cleaning to
                support smooth production processes.
              </p>
            </div>

            {/* ==================== IMAGES ==================== */}
            <div className="manufacturing-images">

              <div className="manufacturing-image-item">
                <div className="manufacturing-image-holder">
                  <img
                    src={img1}
                    alt="Manufacturing Facility"
                  />
                </div>
              </div>

              <div className="manufacturing-image-item">
                <div className="manufacturing-image-holder">
                  <img
                    src={img2}
                    alt="Industrial Facility"
                  />
                </div>
              </div>

            </div>
          </div>


          {/* ==================== SERVICES ==================== */}
          <div className="manufacturing-services">

            <div className="manufacturing-section-header">
              <h2>Our Services</h2>
              <div className="manufacturing-section-divider"></div>
            </div>


            {/* ==================== CORE SERVICES ==================== */}
            <div className="manufacturing-category">

              <h3 className="manufacturing-category-title">
                Core Services
              </h3>

              <div className="manufacturing-service-grid">

                {/* Industrial Cleaning */}
                <div className="manufacturing-service-card">
                  <img
                    src="https://img.icons8.com/color/48/industrial-scales.png"
                    className="manufacturing-service-icon"
                    alt="Industrial Cleaning"
                  />

                  <div className="manufacturing-service-text">
                    <h4>Industrial Cleaning</h4>
                    <p>
                      Cleaning of factory floors, machinery areas, and
                      production zones.
                    </p>
                  </div>
                </div>


                {/* Maintenance */}
                <div className="manufacturing-service-card">
                  <img
                    src="https://img.icons8.com/color/48/maintenance.png"
                    className="manufacturing-service-icon"
                    alt="Maintenance Service"
                  />

                  <div className="manufacturing-service-text">
                    <h4>Maintenance Services</h4>
                    <p>
                      Preventive and corrective maintenance for machinery and
                      infrastructure.
                    </p>
                  </div>
                </div>


                {/* Electrical */}
                <div className="manufacturing-service-card">
                  <img
                    src="https://img.icons8.com/color/48/electrical.png"
                    className="manufacturing-service-icon"
                    alt="Electrical Service"
                  />

                  <div className="manufacturing-service-text">
                    <h4>Electrical Systems</h4>
                    <p>
                      Maintenance of industrial electrical systems and power
                      supply.
                    </p>
                  </div>
                </div>


                {/* Mechanical */}
                <div className="manufacturing-service-card">
                  <img
                    src="https://img.icons8.com/color/48/gear.png"
                    className="manufacturing-service-icon"
                    alt="Mechanical Systems"
                  />

                  <div className="manufacturing-service-text">
                    <h4>Mechanical Systems</h4>
                    <p>
                      Inspection and servicing of mechanical equipment and
                      machinery.
                    </p>
                  </div>
                </div>


                {/* Safety */}
                <div className="manufacturing-service-card">
                  <img
                    src="https://img.icons8.com/color/48/safety-hat.png"
                    className="manufacturing-service-icon"
                    alt="Safety Compliance"
                  />

                  <div className="manufacturing-service-text">
                    <h4>Safety Compliance</h4>
                    <p>
                      Ensuring adherence to industrial safety standards and
                      protocols.
                    </p>
                  </div>
                </div>


                {/* Waste */}
                <div className="manufacturing-service-card">
                  <img
                    src="https://img.icons8.com/color/48/trash.png"
                    className="manufacturing-service-icon"
                    alt="Industrial Waste"
                  />

                  <div className="manufacturing-service-text">
                    <h4>Waste Management</h4>
                    <p>
                      Safe disposal and management of industrial waste
                      materials.
                    </p>
                  </div>
                </div>

              </div>
            </div>


            {/* ==================== SUPPORTING SERVICES ==================== */}
            <div className="manufacturing-category">

              <h3 className="manufacturing-category-title">
                Supporting Services
              </h3>

              <div className="manufacturing-service-grid">

                {/* Warehouse */}
                <div className="manufacturing-service-card">
                  <img
                    src="https://img.icons8.com/color/48/warehouse.png"
                    className="manufacturing-service-icon"
                    alt="Warehouse Management"
                  />

                  <div className="manufacturing-service-text">
                    <h4>Warehouse Management</h4>
                    <p>
                      Handling storage, inventory, and logistics within the
                      facility.
                    </p>
                  </div>
                </div>


                {/* Security */}
                <div className="manufacturing-service-card">
                  <img
                    src="https://img.icons8.com/color/48/security-checked.png"
                    className="manufacturing-service-icon"
                    alt="Security Service"
                  />

                  <div className="manufacturing-service-text">
                    <h4>Security Services</h4>
                    <p>
                      Monitoring premises and ensuring controlled access.
                    </p>
                  </div>
                </div>


                {/* Pest */}
                <div className="manufacturing-service-card">
                  <img
                    src="https://img.icons8.com/color/48/ant.png"
                    className="manufacturing-service-icon"
                    alt="Pest Control"
                  />

                  <div className="manufacturing-service-text">
                    <h4>Pest Control</h4>
                    <p>
                      Preventing infestation in industrial and storage areas.
                    </p>
                  </div>
                </div>


                {/* Water */}
                <div className="manufacturing-service-card">
                  <img
                    src="https://img.icons8.com/color/48/water.png"
                    className="manufacturing-service-icon"
                    alt="Water Management"
                  />

                  <div className="manufacturing-service-text">
                    <h4>Water Management</h4>
                    <p>
                      Maintenance of water supply and treatment systems.
                    </p>
                  </div>
                </div>


                {/* Transportation */}
                <div className="manufacturing-service-card">
                  <img
                    src="https://img.icons8.com/color/48/truck.png"
                    className="manufacturing-service-icon"
                    alt="Transportation Support"
                  />

                  <div className="manufacturing-service-text">
                    <h4>Transportation Support</h4>
                    <p>
                      Managing internal logistics and workforce transportation.
                    </p>
                  </div>
                </div>


                {/* Helpdesk */}
                <div className="manufacturing-service-card">
                  <img
                    src="https://img.icons8.com/color/48/customer-support.png"
                    className="manufacturing-service-icon"
                    alt="Helpdesk"
                  />

                  <div className="manufacturing-service-text">
                    <h4>Help Desk Services</h4>
                    <p>
                      Handling operational requests and facility-related
                      issues.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>


          {/* ==================== OTHER INDUSTRIES ==================== */}
          <div className="manufacturing-other-industries">

            <div className="manufacturing-other-title">
              <h2>Other Industries we serve….</h2>
              <span></span>
            </div>


            <div className="manufacturing-industry-grid">

              {/* Commercial */}
              <div className="manufacturing-industry-card">

                <div className="manufacturing-industry-image">
                  <img
                    src={commercialImg}
                    alt="Commercial and Corporate"
                  />
                </div>

                <div className="manufacturing-industry-text">
                  <h3>Commercial & Corporate</h3>

                  <p>
                    Facility services for offices ensuring productivity and
                    efficiency.
                  </p>

                  <span className="manufacturing-industry-border"></span>

                  <Link to="/industry-commercial-corporate-facility">
                    View <i className="fa fa-angle-right"></i>
                  </Link>
                </div>

              </div>


              {/* Residential */}
              <div className="manufacturing-industry-card">

                <div className="manufacturing-industry-image">
                  <img
                    src={residentialImg}
                    alt="Residential"
                  />
                </div>

                <div className="manufacturing-industry-text">
                  <h3>Residential</h3>

                  <p>
                    Facility services for homes ensuring cleanliness, safety,
                    and smooth living.
                  </p>

                  <span className="manufacturing-industry-border"></span>

                  <Link to="/industry-residential-facility">
                    View <i className="fa fa-angle-right"></i>
                  </Link>
                </div>

              </div>


              {/* Healthcare */}
              <div className="manufacturing-industry-card">

                <div className="manufacturing-industry-image">
                  <img
                    src={healthcareImg}
                    alt="Healthcare"
                  />
                </div>

                <div className="manufacturing-industry-text">
                  <h3>Healthcare</h3>

                  <p>
                    Facility services for hospitals ensuring hygiene, safety,
                    and proper care..
                  </p>

                  <span className="manufacturing-industry-border"></span>

                  <Link to="/industry-healthcare-facility">
                    View <i className="fa fa-angle-right"></i>
                  </Link>
                </div>

              </div>


              {/* Education */}
              <div className="manufacturing-industry-card">

                <div className="manufacturing-industry-image">
                  <img
                    src={educationImg}
                    alt="Education"
                  />
                </div>

                <div className="manufacturing-industry-text">
                  <h3>Education</h3>

                  <p>
                    Facility services for schools ensuring clean, safe, and
                    learning environments.
                  </p>

                  <span className="manufacturing-industry-border"></span>

                  <Link to="/industry-education-facility">
                    View <i className="fa fa-angle-right"></i>
                  </Link>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Manufacturing;