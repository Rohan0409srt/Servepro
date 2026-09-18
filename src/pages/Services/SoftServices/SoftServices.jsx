import React from "react";
import { Link } from "react-router-dom";
import "../../../style/SoftServices.css";

// Banner Image
import bannerImg from "../../../assets/images/1servepro/service-main-banner/soft-main-banner.jpeg";

// Service Images
import img1 from "../../../assets/images/1servepro/soft-service/Housekeeping-Services/1-new-housekeeping.jpeg";
import img2 from "../../../assets/images/1servepro/soft-service/pantry-service-prvider.jpeg";
import img3 from "../../../assets/images/1servepro/soft-service/Guest-House-Management-Services/web3.png";
import img4 from "../../../assets/images/1servepro/soft-service/Warehouse-Management-Services/2.png";
import img5 from "../../../assets/images/1servepro/soft-service/Event-Management-services/cleaning with manual sweeper.png";

const SoftServices = () => {
  return (
    <div className="soft-services-page">

      {/* =========================
          BANNER
      ========================== */}
      <section
        className="soft-services-banner"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="soft-services-banner-overlay"></div>
      </section>


      {/* =========================
          MAIN SECTION
      ========================== */}
      <section className="soft-services-section">
        <div className="soft-services-container">

          {/* =========================
              INTRO
          ========================== */}
          <div className="soft-services-intro">

            <h1>
              How Soft Services Play a Key Role Under Facility Management?
            </h1>

            <span className="soft-services-border"></span>

            <p>
              Soft Services play a crucial role in maintaining a clean, safe,
              and productive environment across offices, schools, colleges,
              and commercial buildings. These services ensure day-to-day
              operations run smoothly while enhancing comfort, hygiene, and
              overall user experience. From housekeeping and waste management
              to pest control and front office support, Soft Services help
              create a positive atmosphere that boosts efficiency, supports
              wellbeing, and upholds the professional image of your
              organization. We serve the Commercial premises, Residencies,
              School/Colleges, Hospitals, shopping mall, GYM etc.
            </p>

          </div>


          {/* =========================
              SERVICES GRID
          ========================== */}
          <div className="soft-services-grid">


            {/* =========================
                HOUSEKEEPING
            ========================== */}
            <div className="soft-services-card">

              <div className="soft-services-card-image">
                <img
                  src={img1}
                  alt="Housekeeping Service Provider"
                />
              </div>

              <div className="soft-services-card-content">

                <h2>
                  Housekeeping Service Provider
                </h2>

                <ul>
                  <li>Clean and Comfortable Environment</li>
                  <li>Healthy and Safe Environment</li>
                  <li>Guest Satisfaction</li>
                  <li>Efficient Resource &amp; Time Management</li>
                  <li>Maintaining Aesthetic Appeal of the Property</li>
                  <li>Cost Effective &amp; Minimize Wastage</li>
                  <li>Sustainability</li>
                  <li>Support to Other Departments</li>
                </ul>

                <Link
                  to="/soft-service-housekeeping"
                  className="soft-services-read-more"
                >
                  Read More
                </Link>

              </div>

            </div>


            {/* =========================
                PANTRY
            ========================== */}
            <div className="soft-services-card">

              <div className="soft-services-card-image">
                <img
                  src={img2}
                  alt="Pantry Service Provider"
                />
              </div>

              <div className="soft-services-card-content">

                <h2>
                  Pantry Service Provider
                </h2>

                <ul>
                  <li>
                    Preparing &amp; Serving Tea-Coffee &amp; beverages.
                  </li>

                  <li>
                    Lunch or Snacks set up
                  </li>

                  <li>
                    Setting up refreshments for meetings or events
                  </li>

                  <li>
                    Supporting other Kitchen Operations
                  </li>

                  <li>
                    Keeping pantry area neat &amp; clean, Well-organized
                  </li>

                  <li>
                    Managing pantry supplies like tea-coffee etc.
                  </li>
                </ul>

                <Link
                  to="/soft-service-pantryservices"
                  className="soft-services-read-more"
                >
                  Read More
                </Link>

              </div>

            </div>


            {/* =========================
                GUEST HOUSE
            ========================== */}
            <div className="soft-services-card">

              <div className="soft-services-card-image">
                <img
                  src={img3}
                  alt="Guest House Management / Room Attendant"
                />
              </div>

              <div className="soft-services-card-content">

                <h2>
                  Guest House Management / Room Attendant
                </h2>

                <ul>
                  <li>
                    Streamlined Check-in and Check-out
                  </li>

                  <li>
                    Welcoming of New Guest
                  </li>

                  <li>
                    Visitor Tracking and Security
                  </li>

                  <li>
                    Addressing guest inquiries and complaints
                  </li>

                  <li>
                    Data/Records Management in the system
                  </li>

                  <li>
                    Providing amenities &amp; other service as needed
                  </li>

                  <li>
                    Notification to Client check out time
                  </li>

                  <li>
                    Overseeing repairs and upkeep of the property
                  </li>

                  <li>
                    Implementing and maintaining safety protocols
                  </li>
                </ul>

                <Link
                  to="/soft-service-guestmangementservices"
                  className="soft-services-read-more"
                >
                  Read More
                </Link>

              </div>

            </div>


            {/* =========================
                WAREHOUSE
            ========================== */}
            <div className="soft-services-card">

              <div className="soft-services-card-image">
                <img
                  src={img4}
                  alt="Warehouse Management Service"
                />
              </div>

              <div className="soft-services-card-content">

                <h2>
                  Warehouse Management Service
                </h2>

                <ul>
                  <li>
                    Managing the rec’d good/verification
                  </li>

                  <li>
                    Store the rec’d good at proper place
                  </li>

                  <li>
                    Maintain the accurate details of Inventory
                  </li>

                  <li>
                    Coordinating with carriers, managing schedules.
                  </li>

                  <li>
                    Shipping order &amp; timely delivery
                  </li>

                  <li>
                    Track inventory, prevent theft
                  </li>

                  <li>
                    Overseeing the day-to-day activities
                  </li>

                  <li>
                    Planning and scheduling warehouse staff
                  </li>

                  <li>
                    WMS and other technology to streamline
                  </li>
                </ul>

                <Link
                  to="/soft-service-warehousemangement"
                  className="soft-services-read-more"
                >
                  Read More
                </Link>

              </div>

            </div>


            {/* =========================
                EVENT MANAGEMENT
            ========================== */}
            <div className="soft-services-card">

              <div className="soft-services-card-image">
                <img
                  src={img5}
                  alt="Event Management Service Provider"
                />
              </div>

              <div className="soft-services-card-content">

                <h2>
                  Event Management Service Provider
                </h2>

                <ul>
                  <li>
                    Cleaning and sanitization (dusting, mopping of floor,
                    walls, ceiling, restrooms, etc.)
                  </li>

                  <li>
                    Restocking supplies – toilet paper and soaps
                  </li>

                  <li>
                    Arranging tables, chairs, and other decorations
                  </li>

                  <li>
                    Preparing event areas tidy, clean, and ready for use
                  </li>

                  <li>
                    Waste disposal and maintenance of all areas
                  </li>

                  <li>
                    Assisting with equipment setup and breakdown
                  </li>

                  <li>
                    Restocking cleaning supplies and toiletries
                  </li>
                </ul>

                <Link
                  to="/soft-service-eventmanagementservice"
                  className="soft-services-read-more"
                >
                  Read More
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default SoftServices;