import React from "react";
import { Link } from "react-router-dom";
import "../../../style/Education.css";

// Banner
import bannerImg from "../../../assets/images/1servepro/industry/Educational-Sector/banner.jpg";

// Education Images
import educationImg1 from "../../../assets/images/1servepro/industry/Educational-Sector/collage.jpg";
import educationImg2 from "../../../assets/images/1servepro/industry/Educational-Sector/school.jpg";

// Other Industry Images
import commercialImg from "../../../assets/images/1servepro/industry/commercial-corporate/commercial.jpg";
import residentialImg from "../../../assets/images/1servepro/industry/Residential-Area/residential 1.jpg";
import manufacturingImg from "../../../assets/images/1servepro/industry/Manifacturing-Units/manufacture1.jpg";
import healthcareImg from "../../../assets/images/1servepro/industry/Health-sector/Health sector 2.jpg";


const Education = () => {
  return (
    <div className="education-page">

      {/* =========================
          BANNER
      ========================== */}
      <section
        className="education-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      />

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <section className="education-content-section">
        <div className="education-container">

          {/* =========================
              INTRO
          ========================== */}
          <div className="education-intro">

            <div className="education-title">
              <h1>Educational Facility Management Services</h1>
              <span className="education-title-border"></span>
            </div>

            <div className="education-description">
              <p>
                We provide professional facility management services for
                schools, colleges, and educational institutions, ensuring
                clean, safe, and well-maintained campuses. Our services
                support a productive learning environment for students,
                faculty, and staff.
              </p>
            </div>

            {/* =========================
                EDUCATION IMAGES
            ========================== */}
            <div className="education-images">

              <div className="education-image-item">
                <div className="education-image-holder">
                  <img
                    src={educationImg1}
                    alt="Educational Facility"
                  />
                </div>
              </div>

              <div className="education-image-item">
                <div className="education-image-holder">
                  <img
                    src={educationImg2}
                    alt="Educational Campus"
                  />
                </div>
              </div>

            </div>
          </div>


          {/* =========================
              OUR SERVICES
          ========================== */}
          <div className="education-services">

            <div className="education-section-header">
              <h2>Our Services</h2>
              <div className="education-section-divider"></div>
            </div>


            {/* =========================
                CORE SERVICES
            ========================== */}
            <div className="education-category">

              <h3 className="education-category-title">
                Core Services
              </h3>

              <div className="education-service-grid">

                {/* 1 */}
                <div className="education-service-card">
                  <img
                    src="https://img.icons8.com/color/48/broom.png"
                    className="education-service-icon"
                    alt="Cleaning Service"
                  />

                  <div className="education-service-text">
                    <h4>Cleaning & Housekeeping</h4>
                    <p>
                      Daily cleaning of classrooms, corridors, and campus
                      areas.
                    </p>
                  </div>
                </div>


                {/* 2 */}
                <div className="education-service-card">
                  <img
                    src="https://img.icons8.com/color/48/maintenance.png"
                    className="education-service-icon"
                    alt="Maintenance"
                  />

                  <div className="education-service-text">
                    <h4>Maintenance Services</h4>
                    <p>
                      Upkeep of buildings, classrooms, and campus
                      infrastructure.
                    </p>
                  </div>
                </div>


                {/* 3 */}
                <div className="education-service-card">
                  <img
                    src="https://img.icons8.com/color/48/electrical.png"
                    className="education-service-icon"
                    alt="Electrical"
                  />

                  <div className="education-service-text">
                    <h4>Electrical Systems</h4>
                    <p>
                      Maintenance of lighting, power supply, and electrical
                      safety.
                    </p>
                  </div>
                </div>


                {/* 4 */}
                <div className="education-service-card">
                  <img
                    src="https://img.icons8.com/color/48/plumbing.png"
                    className="education-service-icon"
                    alt="Plumbing"
                  />

                  <div className="education-service-text">
                    <h4>Plumbing</h4>
                    <p>
                      Maintenance of water systems, washrooms, and sanitation
                      facilities.
                    </p>
                  </div>
                </div>


                {/* 5 */}
                <div className="education-service-card">
                  <img
                    src="https://img.icons8.com/color/48/security-checked.png"
                    className="education-service-icon"
                    alt="Security"
                  />

                  <div className="education-service-text">
                    <h4>Security Services</h4>
                    <p>
                      Ensuring student safety and controlled campus access.
                    </p>
                  </div>
                </div>


                {/* 6 */}
                <div className="education-service-card">
                  <img
                    src="https://img.icons8.com/color/48/trash.png"
                    className="education-service-icon"
                    alt="Waste Management"
                  />

                  <div className="education-service-text">
                    <h4>Waste Management</h4>
                    <p>
                      Proper waste collection and disposal across the campus.
                    </p>
                  </div>
                </div>

              </div>
            </div>


            {/* =========================
                SUPPORTING SERVICES
            ========================== */}
            <div className="education-category">

              <h3 className="education-category-title">
                Supporting Services
              </h3>

              <div className="education-service-grid">

                {/* 1 */}
                <div className="education-service-card">
                  <img
                    src="https://img.icons8.com/color/48/bus.png"
                    className="education-service-icon"
                    alt="Transport"
                  />

                  <div className="education-service-text">
                    <h4>Transport Management</h4>
                    <p>
                      Managing school buses and student transportation
                      systems.
                    </p>
                  </div>
                </div>


                {/* 2 */}
                <div className="education-service-card">
                  <img
                    src="https://img.icons8.com/color/48/garden.png"
                    className="education-service-icon"
                    alt="Landscaping"
                  />

                  <div className="education-service-text">
                    <h4>Garden & Landscaping</h4>
                    <p>
                      Maintaining green areas and campus surroundings.
                    </p>
                  </div>
                </div>


                {/* 3 */}
                <div className="education-service-card">
                  <img
                    src="https://img.icons8.com/color/48/ant.png"
                    className="education-service-icon"
                    alt="Pest Control"
                  />

                  <div className="education-service-text">
                    <h4>Pest Control</h4>
                    <p>
                      Ensuring pest-free and hygienic campus environments.
                    </p>
                  </div>
                </div>


                {/* 4 */}
                <div className="education-service-card">
                  <img
                    src="https://img.icons8.com/color/48/customer-support.png"
                    className="education-service-icon"
                    alt="Helpdesk"
                  />

                  <div className="education-service-text">
                    <h4>Help Desk Services</h4>
                    <p>
                      Handling administrative and facility-related requests.
                    </p>
                  </div>
                </div>


                {/* 5 */}
                <div className="education-service-card">
                  <img
                    src="https://img.icons8.com/color/48/conference.png"
                    className="education-service-icon"
                    alt="Event"
                  />

                  <div className="education-service-text">
                    <h4>Event Support</h4>
                    <p>
                      Supporting school events, functions, and activities.
                    </p>
                  </div>
                </div>


                {/* 6 */}
                <div className="education-service-card">
                  <img
                    src="https://img.icons8.com/color/48/organization.png"
                    className="education-service-icon"
                    alt="Administration"
                  />

                  <div className="education-service-text">
                    <h4>Administrative Support</h4>
                    <p>
                      Assisting in daily operations and campus management
                      tasks.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>


          {/* =========================
              OTHER INDUSTRIES
          ========================== */}
          <div className="education-other-industries">

            <div className="education-other-title">
              <h2>Other Industries we serve….</h2>
              <span></span>
            </div>

            <div className="education-industry-grid">

              {/* Commercial */}
              <div className="education-industry-card">

                <div className="education-industry-image">
                  <img
                    src={commercialImg}
                    alt="Commercial & Corporate"
                  />
                </div>

                <div className="education-industry-text">
                  <h3>Commercial & Corporate</h3>

                  <p>
                    Facility services for offices ensuring productivity and
                    efficiency.
                  </p>

                  <span className="education-industry-border"></span>

                  <Link to="/industry-commercial-corporate-facility">
                    View <i className="fa fa-angle-right"></i>
                  </Link>
                </div>

              </div>


              {/* Residential */}
              <div className="education-industry-card">

                <div className="education-industry-image">
                  <img
                    src={residentialImg}
                    alt="Residential"
                  />
                </div>

                <div className="education-industry-text">
                  <h3>Residential</h3>

                  <p>
                    Facility services for homes ensuring cleanliness, safety,
                    and smooth living.
                  </p>

                  <span className="education-industry-border"></span>

                  <Link to="/industry-residential-facility">
                    View <i className="fa fa-angle-right"></i>
                  </Link>
                </div>

              </div>


              {/* Manufacturing */}
              <div className="education-industry-card">

                <div className="education-industry-image">
                  <img
                    src={manufacturingImg}
                    alt="Manufacturing"
                  />
                </div>

                <div className="education-industry-text">
                  <h3>Manufacturing</h3>

                  <p>
                    Facility services for industries ensuring safety,
                    maintenance, and operations.
                  </p>

                  <span className="education-industry-border"></span>

                  <Link to="/industry-manufacturing-facility">
                    View <i className="fa fa-angle-right"></i>
                  </Link>
                </div>

              </div>


              {/* Healthcare */}
              <div className="education-industry-card">

                <div className="education-industry-image">
                  <img
                    src={healthcareImg}
                    alt="Healthcare"
                  />
                </div>

                <div className="education-industry-text">
                  <h3>Healthcare</h3>

                  <p>
                    Facility services for hospitals ensuring hygiene, safety,
                    and proper care..
                  </p>

                  <span className="education-industry-border"></span>

                  <Link to="/industry-healthcare-facility">
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

export default Education;