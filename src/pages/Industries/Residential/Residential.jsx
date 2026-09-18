import React from "react";
import { Link } from "react-router-dom";
import "../../../style/Residential.css";

import bannerImg from "../../../assets/images/1servepro/industry/Residential-Area/banner.jpg";

import img1 from "../../../assets/images/1servepro/industry/Residential-Area/residential 1.jpg";
import img2 from "../../../assets/images/1servepro/industry/Residential-Area/residential 2.jpg";

import commercialImg from "../../../assets/images/1servepro/industry/commercial-corporate/commercial.jpg";
import manufacturingImg from "../../../assets/images/1servepro/industry/Manifacturing-Units/manufacture1.jpg";
import healthcareImg from "../../../assets/images/1servepro/industry/Health-sector/Health sector 2.jpg";
import educationImg from "../../../assets/images/1servepro/industry/Educational-Sector/collage.jpg";


const Residential = () => {
  return (
    <div className="residential-page">

      {/* =====================================================
          BANNER
      ====================================================== */}
      <section
        className="residential-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      />


      {/* =====================================================
          MAIN SECTION
      ====================================================== */}
      <section className="residential-section">
        <div className="residential-container">

          {/* =====================================================
              INTRO
          ====================================================== */}
          <div className="residential-intro">

            <div className="residential-title">
              <h1>Residential Facility Management Services</h1>

              <span className="residential-title-border"></span>
            </div>

            <div className="residential-description">
              <p>
                We provide comprehensive facility management services for
                residential complexes, apartments, and housing societies,
                ensuring a clean, safe, and comfortable living environment.
                Our trained staff handles daily operations efficiently,
                maintaining hygiene, safety, and smooth functioning of
                residential premises.
              </p>
            </div>


            {/* =====================================================
                RESIDENTIAL IMAGES
            ====================================================== */}
            <div className="residential-images">

              <div className="residential-image-item">
                <div className="residential-image-holder">
                  <img
                    src={img1}
                    alt="Residential Facility"
                  />
                </div>
              </div>

              <div className="residential-image-item">
                <div className="residential-image-holder">
                  <img
                    src={img2}
                    alt="Residential Area"
                  />
                </div>
              </div>

            </div>

          </div>


          {/* =====================================================
              OUR SERVICES
          ====================================================== */}
          <div className="residential-services">

            <div className="residential-section-header">
              <h2>Our Services</h2>
              <div className="residential-section-divider"></div>
            </div>


            {/* =====================================================
                CORE SERVICES
            ====================================================== */}
            <div className="residential-category">

              <h3 className="residential-category-title">
                Core Services
              </h3>

              <div className="residential-service-grid">

                {/* Housekeeping */}
                <div className="residential-service-card">
                  <img
                    src="https://img.icons8.com/color/48/broom.png"
                    className="residential-service-icon"
                    alt="Housekeeping Service"
                  />

                  <div className="residential-service-text">
                    <h4>Housekeeping & Cleaning</h4>

                    <p>
                      Daily cleaning and upkeep of common areas ensuring
                      hygiene and cleanliness.
                    </p>
                  </div>
                </div>


                {/* Maintenance */}
                <div className="residential-service-card">
                  <img
                    src="https://img.icons8.com/color/48/maintenance.png"
                    className="residential-service-icon"
                    alt="Maintenance Service"
                  />

                  <div className="residential-service-text">
                    <h4>Maintenance Services</h4>

                    <p>
                      Routine maintenance of electrical, plumbing, and
                      building infrastructure.
                    </p>
                  </div>
                </div>


                {/* Electrical */}
                <div className="residential-service-card">
                  <img
                    src="https://img.icons8.com/color/48/electrical.png"
                    className="residential-service-icon"
                    alt="Electrical Service"
                  />

                  <div className="residential-service-text">
                    <h4>Electrical Systems</h4>

                    <p>
                      Maintenance of lighting, power supply, and electrical
                      systems.
                    </p>
                  </div>
                </div>


                {/* Plumbing */}
                <div className="residential-service-card">
                  <img
                    src="https://img.icons8.com/color/48/plumbing.png"
                    className="residential-service-icon"
                    alt="Plumbing Service"
                  />

                  <div className="residential-service-text">
                    <h4>Plumbing</h4>

                    <p>
                      Repair and maintenance of pipelines, fixtures, and water
                      systems.
                    </p>
                  </div>
                </div>


                {/* Security */}
                <div className="residential-service-card">
                  <img
                    src="https://img.icons8.com/color/48/security-checked.png"
                    className="residential-service-icon"
                    alt="Security Service"
                  />

                  <div className="residential-service-text">
                    <h4>Security Services</h4>

                    <p>
                      Trained staff ensuring safety and controlled access to
                      residential premises.
                    </p>
                  </div>
                </div>


                {/* Waste */}
                <div className="residential-service-card">
                  <img
                    src="https://img.icons8.com/color/48/trash.png"
                    className="residential-service-icon"
                    alt="Waste Management"
                  />

                  <div className="residential-service-text">
                    <h4>Waste Management</h4>

                    <p>
                      Efficient garbage collection, segregation, and disposal
                      systems.
                    </p>
                  </div>
                </div>

              </div>
            </div>


            {/* =====================================================
                SUPPORTING SERVICES
            ====================================================== */}
            <div className="residential-category">

              <h3 className="residential-category-title">
                Supporting Services
              </h3>

              <div className="residential-service-grid">

                {/* Helpdesk */}
                <div className="residential-service-card">
                  <img
                    src="https://img.icons8.com/color/48/customer-support.png"
                    className="residential-service-icon"
                    alt="Helpdesk Services"
                  />

                  <div className="residential-service-text">
                    <h4>Helpdesk Services</h4>

                    <p>
                      Handling resident requests and coordinating support
                      services.
                    </p>
                  </div>
                </div>


                {/* Garden */}
                <div className="residential-service-card">
                  <img
                    src="https://img.icons8.com/color/48/garden.png"
                    className="residential-service-icon"
                    alt="Garden and Landscaping"
                  />

                  <div className="residential-service-text">
                    <h4>Garden & Landscaping</h4>

                    <p>
                      Maintenance of gardens, lawns, and green spaces.
                    </p>
                  </div>
                </div>


                {/* Pest Control */}
                <div className="residential-service-card">
                  <img
                    src="https://img.icons8.com/color/48/ant.png"
                    className="residential-service-icon"
                    alt="Pest Control"
                  />

                  <div className="residential-service-text">
                    <h4>Pest Control</h4>

                    <p>
                      Regular pest control ensuring a safe and hygienic
                      environment.
                    </p>
                  </div>
                </div>


                {/* Water Tank */}
                <div className="residential-service-card">
                  <img
                    src="https://img.icons8.com/color/48/water.png"
                    className="residential-service-icon"
                    alt="Water Tank Cleaning"
                  />

                  <div className="residential-service-text">
                    <h4>Water Tank Cleaning</h4>

                    <p>
                      Periodic cleaning of tanks to maintain hygiene
                      standards.
                    </p>
                  </div>
                </div>


                {/* Parking */}
                <div className="residential-service-card">
                  <img
                    src="https://img.icons8.com/color/48/parking.png"
                    className="residential-service-icon"
                    alt="Parking Management"
                  />

                  <div className="residential-service-text">
                    <h4>Parking Management</h4>

                    <p>
                      Organized parking ensuring smooth vehicle movement.
                    </p>
                  </div>
                </div>


                {/* Society Support */}
                <div className="residential-service-card">
                  <img
                    src="https://img.icons8.com/color/48/organization.png"
                    className="residential-service-icon"
                    alt="Society Support Services"
                  />

                  <div className="residential-service-text">
                    <h4>Society Support Services</h4>

                    <p>
                      Operational and administrative support for housing
                      societies.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>


          {/* =====================================================
              OTHER INDUSTRIES
          ====================================================== */}
          <div className="residential-other-industries">

            <div className="residential-other-title">
              <h2>Other Industries we serve….</h2>
              <span></span>
            </div>


            <div className="residential-industry-grid">

              {/* Commercial */}
              <div className="residential-industry-card">

                <div className="residential-industry-image">
                  <img
                    src={commercialImg}
                    alt="Commercial and Corporate"
                  />
                </div>

                <div className="residential-industry-text">
                  <h3>Commercial & Corporate</h3>

                  <p>
                    Facility services for offices ensuring productivity and
                    efficiency.
                  </p>

                  <span className="residential-industry-border"></span>

                  <Link to="/industry-commercial-corporate-facility">
                    View <i className="fa fa-angle-right"></i>
                  </Link>
                </div>

              </div>


              {/* Manufacturing */}
              <div className="residential-industry-card">

                <div className="residential-industry-image">
                  <img
                    src={manufacturingImg}
                    alt="Manufacturing"
                  />
                </div>

                <div className="residential-industry-text">
                  <h3>Manufacturing</h3>

                  <p>
                    Facility services for industries ensuring safety,
                    maintenance, and operations.
                  </p>

                  <span className="residential-industry-border"></span>

                  <Link to="/industry-manufacturing-facility">
                    View <i className="fa fa-angle-right"></i>
                  </Link>
                </div>

              </div>


              {/* Healthcare */}
              <div className="residential-industry-card">

                <div className="residential-industry-image">
                  <img
                    src={healthcareImg}
                    alt="Healthcare"
                  />
                </div>

                <div className="residential-industry-text">
                  <h3>Healthcare</h3>

                  <p>
                    Facility services for hospitals ensuring hygiene, safety,
                    and proper care..
                  </p>

                  <span className="residential-industry-border"></span>

                  <Link to="/industry-healthcare-facility">
                    View <i className="fa fa-angle-right"></i>
                  </Link>
                </div>

              </div>


              {/* Education */}
              <div className="residential-industry-card">

                <div className="residential-industry-image">
                  <img
                    src={educationImg}
                    alt="Education"
                  />
                </div>

                <div className="residential-industry-text">
                  <h3>Education</h3>

                  <p>
                    Facility services for schools ensuring clean, safe, and
                    learning environments.
                  </p>

                  <span className="residential-industry-border"></span>

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

export default Residential;