import React from "react";
import { Link } from "react-router-dom";
import "../../../style/CommercialCorporate.css";

// Banner
import bannerImg from "../../../assets/images/1servepro/industry/commercial-corporate/banner.jpg";

// Commercial Images
import img1 from "../../../assets/images/1servepro/industry/commercial-corporate/commercial.jpg";
import img2 from "../../../assets/images/1servepro/industry/commercial-corporate/corporate.jpg";

// Other Industry Images
import residentialImg from "../../../assets/images/1servepro/industry/Residential-Area/residential 1.jpg";
import manufacturingImg from "../../../assets/images/1servepro/industry/Manifacturing-Units/manufacture1.jpg";
import healthcareImg from "../../../assets/images/1servepro/industry/Health-sector/Health sector 2.jpg";
import educationImg from "../../../assets/images/1servepro/industry/Educational-Sector/collage.jpg";


const CommercialCorporate = () => {
  return (
    <div className="commercial-corporate-page">

      {/* =====================================================
          BANNER
      ====================================================== */}
      <section
        className="commercial-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      />


      {/* =====================================================
          MAIN SECTION
      ====================================================== */}
      <section className="commercial-section">
        <div className="commercial-container">

          {/* =====================================================
              INTRO
          ====================================================== */}
          <div className="commercial-intro">

            <div className="commercial-title">
              <h1>
                Commercial Premises & Corporate Office Facility Services
              </h1>

              <span className="commercial-title-border"></span>
            </div>

            <div className="commercial-description">
              <p>
                We deliver comprehensive facility management solutions for
                commercial premises and corporate offices, ensuring a clean,
                safe, and highly efficient workspace. Our services are
                designed to enhance employee productivity, maintain hygiene
                standards, and support seamless business operations through
                professional management of infrastructure and support
                services.
              </p>
            </div>


            {/* =====================================================
                MAIN IMAGES
            ====================================================== */}
            <div className="commercial-images">

              <div className="commercial-image-item">
                <div className="commercial-image-holder">
                  <img
                    src={img1}
                    alt="Commercial Facility"
                  />
                </div>
              </div>

              <div className="commercial-image-item">
                <div className="commercial-image-holder">
                  <img
                    src={img2}
                    alt="Corporate Office Facility"
                  />
                </div>
              </div>

            </div>

          </div>


          {/* =====================================================
              SERVICES
          ====================================================== */}
          <div className="commercial-services">

            <div className="commercial-section-header">
              <h2>Our Services</h2>
              <div className="commercial-section-divider"></div>
            </div>


            {/* =====================================================
                CORE SERVICES
            ====================================================== */}
            <div className="commercial-category">

              <h3 className="commercial-category-title">
                Core Services
              </h3>

              <div className="commercial-service-grid">

                {/* Cleaning */}
                <div className="commercial-service-card">
                  <img
                    src="https://img.icons8.com/fluency/48/clean.png"
                    className="commercial-service-icon"
                    alt="Cleaning"
                  />

                  <div className="commercial-service-text">
                    <h4>Cleaning & Janitorial</h4>
                    <p>
                      Daily cleaning and hygiene maintenance for offices and
                      commercial spaces.
                    </p>
                  </div>
                </div>


                {/* Maintenance */}
                <div className="commercial-service-card">
                  <img
                    src="https://img.icons8.com/fluency/48/maintenance.png"
                    className="commercial-service-icon"
                    alt="Maintenance"
                  />

                  <div className="commercial-service-text">
                    <h4>Maintenance Services</h4>
                    <p>
                      Upkeep of building systems ensuring smooth and
                      uninterrupted operations.
                    </p>
                  </div>
                </div>


                {/* Electrical */}
                <div className="commercial-service-card">
                  <img
                    src="https://img.icons8.com/fluency/48/electrical.png"
                    className="commercial-service-icon"
                    alt="Electrical"
                  />

                  <div className="commercial-service-text">
                    <h4>Electrical Systems</h4>
                    <p>
                      Efficient management of lighting, power systems, and
                      electrical safety.
                    </p>
                  </div>
                </div>


                {/* Plumbing */}
                <div className="commercial-service-card">
                  <img
                    src="https://img.icons8.com/fluency/48/plumbing.png"
                    className="commercial-service-icon"
                    alt="Plumbing"
                  />

                  <div className="commercial-service-text">
                    <h4>Plumbing</h4>
                    <p>
                      Routine inspection and repair of water systems and
                      plumbing fixtures.
                    </p>
                  </div>
                </div>


                {/* Fire */}
                <div className="commercial-service-card">
                  <img
                    src="https://img.icons8.com/fluency/48/fire-extinguisher.png"
                    className="commercial-service-icon"
                    alt="Fire Protection"
                  />

                  <div className="commercial-service-text">
                    <h4>Fire Protection</h4>
                    <p>
                      Fire safety systems, compliance checks, and emergency
                      preparedness.
                    </p>
                  </div>
                </div>


                {/* Lifts */}
                <div className="commercial-service-card">
                  <img
                    src="https://img.icons8.com/fluency/48/elevator.png"
                    className="commercial-service-icon"
                    alt="Lifts and Escalators"
                  />

                  <div className="commercial-service-text">
                    <h4>Lifts & Escalators</h4>
                    <p>
                      Maintenance and safety checks for elevators and
                      escalator systems.
                    </p>
                  </div>
                </div>

              </div>
            </div>


            {/* =====================================================
                SUPPORTING SERVICES
            ====================================================== */}
            <div className="commercial-category">

              <h3 className="commercial-category-title">
                Supporting Services
              </h3>

              <div className="commercial-service-grid">

                {/* Reception */}
                <div className="commercial-service-card">
                  <img
                    src="https://img.icons8.com/color/48/front-desk.png"
                    className="commercial-service-icon"
                    alt="Reception"
                  />

                  <div className="commercial-service-text">
                    <h4>Reception Services</h4>
                    <p>
                      Front desk management ensuring smooth visitor handling
                      and assistance.
                    </p>
                  </div>
                </div>


                {/* Mailroom */}
                <div className="commercial-service-card">
                  <img
                    src="https://img.icons8.com/color/48/delivery.png"
                    className="commercial-service-icon"
                    alt="Mailroom"
                  />

                  <div className="commercial-service-text">
                    <h4>Mailroom Services</h4>
                    <p>
                      Handling office communication, courier, and internal
                      mail operations.
                    </p>
                  </div>
                </div>


                {/* Pantry */}
                <div className="commercial-service-card">
                  <img
                    src="https://img.icons8.com/color/48/tea.png"
                    className="commercial-service-icon"
                    alt="Pantry"
                  />

                  <div className="commercial-service-text">
                    <h4>Pantry Services</h4>
                    <p>
                      Pantry management ensuring cleanliness and smooth
                      refreshment services.
                    </p>
                  </div>
                </div>


                {/* Event */}
                <div className="commercial-service-card">
                  <img
                    src="https://img.icons8.com/fluency/48/conference.png"
                    className="commercial-service-icon"
                    alt="Event Support"
                  />

                  <div className="commercial-service-text">
                    <h4>Event Support</h4>
                    <p>
                      Support for meetings, conferences, and corporate event
                      arrangements.
                    </p>
                  </div>
                </div>


                {/* Landscaping */}
                <div className="commercial-service-card">
                  <img
                    src="https://img.icons8.com/color/48/garden.png"
                    className="commercial-service-icon"
                    alt="Landscaping"
                  />

                  <div className="commercial-service-text">
                    <h4>Landscaping & Horticulture</h4>
                    <p>
                      Maintenance of indoor and outdoor green spaces for
                      better environments.
                    </p>
                  </div>
                </div>


                {/* Pest Control */}
                <div className="commercial-service-card">
                  <img
                    src="https://img.icons8.com/color/48/ant.png"
                    className="commercial-service-icon"
                    alt="Pest Control"
                  />

                  <div className="commercial-service-text">
                    <h4>Pest Control</h4>
                    <p>
                      Regular pest management ensuring a safe and hygienic
                      workspace.
                    </p>
                  </div>
                </div>


                {/* Help Desk */}
                <div className="commercial-service-card">
                  <img
                    src="https://img.icons8.com/color/48/customer-support.png"
                    className="commercial-service-icon"
                    alt="Help Desk"
                  />

                  <div className="commercial-service-text">
                    <h4>Help Desk Management</h4>
                    <p>
                      Centralized support for employee requests and facility
                      issues.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>


          {/* =====================================================
              OTHER INDUSTRIES
          ====================================================== */}
          <div className="commercial-other-industries">

            <div className="commercial-other-title">
              <h2>Other Industries we serve….</h2>
              <span></span>
            </div>


            <div className="commercial-industry-grid">

              {/* Residential */}
              <div className="commercial-industry-card">

                <div className="commercial-industry-image">
                  <img
                    src={residentialImg}
                    alt="Residential"
                  />
                </div>

                <div className="commercial-industry-text">
                  <h3>Residential</h3>

                  <p>
                    Facility services for homes ensuring cleanliness, safety,
                    and smooth living.
                  </p>

                  <span className="commercial-industry-border"></span>

                  <Link to="/industry-residential-facility">
                    View <i className="fa fa-angle-right"></i>
                  </Link>
                </div>

              </div>


              {/* Manufacturing */}
              <div className="commercial-industry-card">

                <div className="commercial-industry-image">
                  <img
                    src={manufacturingImg}
                    alt="Manufacturing"
                  />
                </div>

                <div className="commercial-industry-text">
                  <h3>Manufacturing</h3>

                  <p>
                    Facility services for industries ensuring safety,
                    maintenance, and operations.
                  </p>

                  <span className="commercial-industry-border"></span>

                  <Link to="/industry-manufacturing-facility">
                    View <i className="fa fa-angle-right"></i>
                  </Link>
                </div>

              </div>


              {/* Healthcare */}
              <div className="commercial-industry-card">

                <div className="commercial-industry-image">
                  <img
                    src={healthcareImg}
                    alt="Healthcare"
                  />
                </div>

                <div className="commercial-industry-text">
                  <h3>Healthcare</h3>

                  <p>
                    Facility services for hospitals ensuring hygiene, safety,
                    and proper care..
                  </p>

                  <span className="commercial-industry-border"></span>

                  <Link to="/industry-healthcare-facility">
                    View <i className="fa fa-angle-right"></i>
                  </Link>
                </div>

              </div>


              {/* Education */}
              <div className="commercial-industry-card">

                <div className="commercial-industry-image">
                  <img
                    src={educationImg}
                    alt="Education"
                  />
                </div>

                <div className="commercial-industry-text">
                  <h3>Education</h3>

                  <p>
                    Facility services for schools ensuring clean, safe, and
                    learning environments.
                  </p>

                  <span className="commercial-industry-border"></span>

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

export default CommercialCorporate;