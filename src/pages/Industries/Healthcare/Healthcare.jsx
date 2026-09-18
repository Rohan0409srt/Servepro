import React from "react";
import { Link } from "react-router-dom";
import "../../../style/Healthcare.css";

import bannerImg from "../../../assets/images/1servepro/industry/Health-sector/banner.jpg";
import img1 from "../../../assets/images/1servepro/industry/Health-sector/health sector1.jpg";
import img2 from "../../../assets/images/1servepro/industry/Health-sector/Health sector 2.jpg";

import commercialImg from "../../../assets/images/1servepro/industry/commercial-corporate/commercial.jpg";
import residentialImg from "../../../assets/images/1servepro/industry/Residential-Area/residential 1.jpg";
import manufacturingImg from "../../../assets/images/1servepro/industry/Manifacturing-Units/manufacture1.jpg";
import educationImg from "../../../assets/images/1servepro/industry/Educational-Sector/collage.jpg";

const Healthcare = () => {
  return (
    <div className="healthcare-page">

      {/* ==================== BANNER ==================== */}
      <section
        className="healthcare-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      />

      {/* ==================== MAIN CONTENT ==================== */}
      <section className="healthcare-section">
        <div className="healthcare-container">

          {/* ==================== INTRO ==================== */}
          <div className="healthcare-intro">

            <div className="healthcare-title">
              <h1>Healthcare Facility Management Services</h1>

              <span className="healthcare-title-border"></span>
            </div>

            <div className="healthcare-description">
              <p>
                We provide specialized facility management services for
                hospitals, clinics, and healthcare centers, ensuring high
                standards of hygiene, safety, and infection control. Our
                trained team supports smooth operations while maintaining a
                safe environment for patients, staff, and visitors.
              </p>
            </div>

            {/* ==================== IMAGES ==================== */}
            <div className="healthcare-images">

              <div className="healthcare-image-item">
                <div className="healthcare-image-holder">
                  <img
                    src={img1}
                    alt="Health Sector"
                  />
                </div>
              </div>

              <div className="healthcare-image-item">
                <div className="healthcare-image-holder">
                  <img
                    src={img2}
                    alt="Healthcare Facility"
                  />
                </div>
              </div>

            </div>
          </div>


          {/* ==================== SERVICES ==================== */}
          <div className="healthcare-services">

            <div className="healthcare-section-header">
              <h2>Our Services</h2>
              <div className="healthcare-section-divider"></div>
            </div>


            {/* ==================== CORE SERVICES ==================== */}
            <div className="healthcare-category">

              <h3 className="healthcare-category-title">
                Core Services
              </h3>

              <div className="healthcare-service-grid">

                {/* Hospital Cleaning */}
                <div className="healthcare-service-card">
                  <img
                    src="https://img.icons8.com/color/48/hospital-room.png"
                    className="healthcare-service-icon"
                    alt="Hospital Cleaning"
                  />

                  <div className="healthcare-service-text">
                    <h4>Hospital Cleaning</h4>
                    <p>
                      Thorough cleaning of wards, ICUs, and medical areas
                      ensuring hygiene.
                    </p>
                  </div>
                </div>


                {/* Infection Control */}
                <div className="healthcare-service-card">
                  <img
                    src="https://img.icons8.com/color/48/sanitizer.png"
                    className="healthcare-service-icon"
                    alt="Infection Control"
                  />

                  <div className="healthcare-service-text">
                    <h4>Infection Control</h4>
                    <p>
                      Strict sanitization and disinfection protocols to
                      prevent infections.
                    </p>
                  </div>
                </div>


                {/* Maintenance */}
                <div className="healthcare-service-card">
                  <img
                    src="https://img.icons8.com/color/48/maintenance.png"
                    className="healthcare-service-icon"
                    alt="Maintenance Services"
                  />

                  <div className="healthcare-service-text">
                    <h4>Maintenance Services</h4>
                    <p>
                      Upkeep of medical facilities, equipment areas, and
                      infrastructure.
                    </p>
                  </div>
                </div>


                {/* Electrical */}
                <div className="healthcare-service-card">
                  <img
                    src="https://img.icons8.com/color/48/electrical.png"
                    className="healthcare-service-icon"
                    alt="Electrical Systems"
                  />

                  <div className="healthcare-service-text">
                    <h4>Electrical Systems</h4>
                    <p>
                      Reliable power systems maintenance for uninterrupted
                      healthcare operations.
                    </p>
                  </div>
                </div>


                {/* Biomedical Waste */}
                <div className="healthcare-service-card">
                  <img
                    src="https://img.icons8.com/color/48/biohazard.png"
                    className="healthcare-service-icon"
                    alt="Biomedical Waste"
                  />

                  <div className="healthcare-service-text">
                    <h4>Biomedical Waste Management</h4>
                    <p>
                      Safe handling and disposal of medical and hazardous
                      waste.
                    </p>
                  </div>
                </div>


                {/* Safety */}
                <div className="healthcare-service-card">
                  <img
                    src="https://img.icons8.com/color/48/fire-extinguisher.png"
                    className="healthcare-service-icon"
                    alt="Safety Compliance"
                  />

                  <div className="healthcare-service-text">
                    <h4>Safety Compliance</h4>
                    <p>
                      Ensuring healthcare safety standards and emergency
                      readiness.
                    </p>
                  </div>
                </div>

              </div>
            </div>


            {/* ==================== SUPPORTING SERVICES ==================== */}
            <div className="healthcare-category">

              <h3 className="healthcare-category-title">
                Supporting Services
              </h3>

              <div className="healthcare-service-grid">

                {/* Reception */}
                <div className="healthcare-service-card">
                  <img
                    src="https://img.icons8.com/color/48/reception.png"
                    className="healthcare-service-icon"
                    alt="Reception Services"
                  />

                  <div className="healthcare-service-text">
                    <h4>Reception Services</h4>
                    <p>
                      Patient assistance, visitor handling, and front desk
                      operations.
                    </p>
                  </div>
                </div>


                {/* Housekeeping */}
                <div className="healthcare-service-card">
                  <img
                    src="https://img.icons8.com/color/48/cleaning-a-surface.png"
                    className="healthcare-service-icon"
                    alt="Housekeeping Services"
                  />

                  <div className="healthcare-service-text">
                    <h4>Housekeeping Services</h4>
                    <p>
                      Maintaining cleanliness across all healthcare areas.
                    </p>
                  </div>
                </div>


                {/* Laundry */}
                <div className="healthcare-service-card">
                  <img
                    src="https://img.icons8.com/color/48/washing-machine.png"
                    className="healthcare-service-icon"
                    alt="Laundry Services"
                  />

                  <div className="healthcare-service-text">
                    <h4>Laundry Services</h4>
                    <p>
                      Cleaning and management of hospital linens and uniforms.
                    </p>
                  </div>
                </div>


                {/* Pest Control */}
                <div className="healthcare-service-card">
                  <img
                    src="https://img.icons8.com/color/48/ant.png"
                    className="healthcare-service-icon"
                    alt="Pest Control"
                  />

                  <div className="healthcare-service-text">
                    <h4>Pest Control</h4>
                    <p>
                      Ensuring pest-free and hygienic medical environments.
                    </p>
                  </div>
                </div>


                {/* Security */}
                <div className="healthcare-service-card">
                  <img
                    src="https://img.icons8.com/color/48/security-checked.png"
                    className="healthcare-service-icon"
                    alt="Security Services"
                  />

                  <div className="healthcare-service-text">
                    <h4>Security Services</h4>
                    <p>
                      Managing safety and controlled access within healthcare
                      premises.
                    </p>
                  </div>
                </div>


                {/* Help Desk */}
                <div className="healthcare-service-card">
                  <img
                    src="https://img.icons8.com/color/48/customer-support.png"
                    className="healthcare-service-icon"
                    alt="Help Desk Services"
                  />

                  <div className="healthcare-service-text">
                    <h4>Help Desk Services</h4>
                    <p>
                      Handling patient and staff queries efficiently.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>


          {/* ==================== OTHER INDUSTRIES ==================== */}
          <div className="healthcare-other-industries">

            <div className="healthcare-other-title">
              <h2>Other Industries we serve….</h2>
              <span></span>
            </div>

            <div className="healthcare-industry-grid">

              {/* Commercial */}
              <div className="healthcare-industry-card">

                <div className="healthcare-industry-image">
                  <img
                    src={commercialImg}
                    alt="Commercial and Corporate"
                  />
                </div>

                <div className="healthcare-industry-text">
                  <h3>Commercial & Corporate</h3>

                  <p>
                    Facility services for offices ensuring productivity and
                    efficiency.
                  </p>

                  <span className="healthcare-industry-border"></span>

                  <Link to="/industry-commercial-corporate-facility">
                    View <i className="fa fa-angle-right"></i>
                  </Link>
                </div>

              </div>


              {/* Residential */}
              <div className="healthcare-industry-card">

                <div className="healthcare-industry-image">
                  <img
                    src={residentialImg}
                    alt="Residential"
                  />
                </div>

                <div className="healthcare-industry-text">
                  <h3>Residential</h3>

                  <p>
                    Facility services for homes ensuring cleanliness, safety,
                    and smooth living.
                  </p>

                  <span className="healthcare-industry-border"></span>

                  <Link to="/industry-residential-facility">
                    View <i className="fa fa-angle-right"></i>
                  </Link>
                </div>

              </div>


              {/* Manufacturing */}
              <div className="healthcare-industry-card">

                <div className="healthcare-industry-image">
                  <img
                    src={manufacturingImg}
                    alt="Manufacturing"
                  />
                </div>

                <div className="healthcare-industry-text">
                  <h3>Manufacturing</h3>

                  <p>
                    Facility services for industries ensuring safety,
                    maintenance, and operations.
                  </p>

                  <span className="healthcare-industry-border"></span>

                  <Link to="/industry-manufacturing-facility">
                    View <i className="fa fa-angle-right"></i>
                  </Link>
                </div>

              </div>


              {/* Education */}
              <div className="healthcare-industry-card">

                <div className="healthcare-industry-image">
                  <img
                    src={educationImg}
                    alt="Education"
                  />
                </div>

                <div className="healthcare-industry-text">
                  <h3>Education</h3>

                  <p>
                    Facility services for schools ensuring clean, safe, and
                    learning environments.
                  </p>

                  <span className="healthcare-industry-border"></span>

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

export default Healthcare;