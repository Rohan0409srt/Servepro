import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Footer.css";

/* =========================================
   LATEST WORK IMAGES
========================================= */

import latestWork1 from "../../assets/images/1servepro/soft-service/Guest-House-Management-Services/web2.png";

import latestWork2 from "../../assets/images/1servepro/Business_Support_Services/Office-Support-Staff/1 Team Leadership & Workforce Supervision.jpg";

import latestWork3 from "../../assets/images/1servepro/Technical_service/Plumbing-Carpentry/1Installation.jpg";

import latestWork4 from "../../assets/images/1servepro/PestControl/Fumigation/1 Fumigation Methods.jpg";

import latestWork5 from "../../assets/images/1servepro/garden-service/Garden-Maintenance/1 Maintenance.jpg";

import latestWork6 from "../../assets/images/1servepro/special-service/Home-Cleaning/1 Bedroom.jpg";

/* =========================================
   FOOTER ICONS
========================================= */

import locationIcon from "../../assets/images/1servepro/footer/location.png";
import phoneIcon from "../../assets/images/1servepro/footer/phone.png";
import mailIcon from "../../assets/images/1servepro/footer/mail.png";
import clockIcon from "../../assets/images/1servepro/footer/clock.png";


export default function Footer() {
  const [legalOpen, setLegalOpen] = useState(false);
    const [showTopButton, setShowTopButton] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    }; window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     LATEST WORKS
  ========================================= */

  const firstRowWorks = [
    {
      img: latestWork1,
      to: "/soft-services",
      alt: "Soft Service",
    },
    {
      img: latestWork2,
      to: "/business-support-service",
      alt: "Business Support Service",
    },
    {
      img: latestWork3,
      to: "/technical-service",
      alt: "Technical Service",
    },
  ];

  const secondRowWorks = [
    {
      img: latestWork4,
      to: "/pest-control-service",
      alt: "Pest Control Service",
    },
    {
      img: latestWork5,
      to: "/gardening-service",
      alt: "Gardening Service",
    },
    {
      img: latestWork6,
      to: "/specialized-cleaning-service",
      alt: "Specialized Cleaning Service",
    },
  ];


  return (
    
    <>
    {showTopButton && (
  <button
    type="button"
    className="footer-back-to-top"
    onClick={() =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    }
    aria-label="Back to top"
  >
    <span>⌃</span>
  </button>
)}
      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="footer-area">
        <div className="container">
          <div className="footer-grid">


            {/* =================================================
                ABOUT US
            ================================================= */}

            <div className="footer-column">
              <div className="single-footer-widget mar-btm">

                <div className="title">
                  <h3>About Us</h3>
                  <span className="border"></span>
                </div>

                <div className="our-info">

                  <p>
                    Legal Name is Servepro Hospitality And Facility Private
                    Limited. Founded in 2013, as we are one of the Hospitality
                    &amp; Facility Management Company &amp; we offer Variety of
                    Hospitality services like Specialized Cleaning services,
                    Soft services.
                  </p>

<ul className="footer-social-links">

  {/* Facebook */}
  <li>
    <a
      href="https://www.facebook.com/serveprofacility?mibextid=rS40aB7S9Ucbxw6v"
      target="_blank"
      rel="noreferrer"
      aria-label="Facebook"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.67.33-1 1-1z" />
      </svg>
    </a>
  </li>


  {/* Google */}
  <li>
    <a
      href="https://share.google/pFviVmA6eMIanHUt9"
      target="_blank"
      rel="noreferrer"
      aria-label="Google"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M21.35 12.27c0-.68-.06-1.35-.17-2H12v3.79h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.18z" />
        <path d="M12 21.6c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.29v2.53A9.75 9.75 0 0 0 12 21.6z" />
        <path d="M6.54 13.68A5.86 5.86 0 0 1 6.23 12c0-.58.1-1.15.31-1.68V7.79H3.29A9.74 9.74 0 0 0 2.25 12c0 1.57.38 3.05 1.04 4.21l3.25-2.53z" />
        <path d="M12 6.29c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 3.35 14.63 2.4 12 2.4a9.75 9.75 0 0 0-8.71 5.39l3.25 2.53C7.31 8.01 9.46 6.29 12 6.29z" />
      </svg>
    </a>
  </li>


  {/* LinkedIn */}
  <li>
    <a
      href="https://www.linkedin.com/in/servepro-hospitality-and-facility-34a785197"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M6.5 8.5H3V21h3.5V8.5zM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3zM21 13.85c0-3.76-2.01-5.51-4.69-5.51-2.16 0-3.13 1.19-3.67 2.03V8.5H9.14V21h3.5v-6.19c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.87 2.02 3.32V21H21v-7.15z" />
      </svg>
    </a>
  </li>


  {/* Instagram */}
  <li>
    <a
      href="https://www.instagram.com/servepro7/"
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9z" />
        <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
      </svg>
    </a>
  </li>

</ul>

</div> {/* our-info */}

</div> {/* single-footer-widget */}

</div> {/* footer-column */}


{/* =================================================
    INDUSTRY WE SERVE
================================================= */}

<div className="footer-column industry-column">
              <div className="single-footer-widget mar-lft mar-btm">

                <div className="title">
                  <h3>Industry We Serve</h3>
                  <span className="border"></span>
                </div>

                <ul className="quick-links">

                  <li>
                    <Link to="/industry-commercial-corporate-facility">
                      Commercial
                    </Link>
                  </li>

                  <li>
                    <Link to="/industry-residential-facility">
                      Residential
                    </Link>
                  </li>

                  <li>
                    <Link to="/industry-manufacturing-facility">
                      Manufacturer
                    </Link>
                  </li>

                  <li>
                    <Link to="/industry-healthcare-facility">
                      Healthcare
                    </Link>
                  </li>

                  <li>
                    <Link to="/industry-education-facility">
                      Education
                    </Link>
                  </li>

                </ul>

              </div>
            </div>


            {/* =================================================
                CONTACT US
            ================================================== */}

            <div className="footer-column">
              <div className="single-footer-widget martop">

                <div className="title">
                  <h3>Contact Us</h3>
                  <span className="border"></span>
                </div>


                <ul className="footer-contact-info">

                  {/* ADDRESS */}

                  <li>

                    <a
                      href="https://maps.app.goo.gl/qYq44GMhMmqFtB639"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open ServePro location in Google Maps"
                      className="contact-icon-link"
                    >
                      <div className="icon-holder">
                        <span className="map-marker">
                          <img
                            src={locationIcon}
                            alt=""
                            width="20"
                            height="20"
                          />
                        </span>
                      </div>
                    </a>


                    <div className="text-holder">
                      <h5>
                        B-13, Ground Floor, Plot- 1/4, <br />
                        Civic Shopping Center, M.M.G.S. <br />
                        Marg, Dadar(East), Mumbai <br />
                        400014.
                      </h5>
                    </div>

                  </li>


                  {/* PHONE */}

                  <li>

                    <div className="icon-holder">
                      <span>
                        <img
                          src={phoneIcon}
                          alt=""
                          width="20"
                          height="20"
                        />
                      </span>
                    </div>

                    <div className="text-holder">
                      <h5>+91 93265 05094</h5>
                    </div>

                  </li>


                  {/* EMAIL */}

                  <li>

                    <div className="icon-holder">
                      <span>
                        <img
                          src={mailIcon}
                          alt=""
                          width="20"
                          height="20"
                        />
                      </span>
                    </div>

                    <div className="text-holder">
                      <h5>info@serveprofms.com</h5>
                    </div>

                  </li>


                  {/* SUPPORT */}

                  <li>

                    <div className="icon-holder">
                      <span>
                        <img
                          src={clockIcon}
                          alt=""
                          width="20"
                          height="20"
                        />
                      </span>
                    </div>

                    <div className="text-holder">
                      <h5>24/7 Support Available</h5>
                    </div>

                  </li>

                </ul>

              </div>
            </div>


            {/* =================================================
                LATEST WORKS
            ================================================== */}

            <div className="footer-column">
              <div className="single-footer-widget latest-works-widget">

                <div className="title">
                  <h3>Latest Works</h3>
                  <span className="border"></span>
                </div>


                <div className="latest-work-list">

                  {/* FIRST ROW */}

                  <div className="inner-flex-footer">

                    {firstRowWorks.map((work) => (
                      <div
                        className="latest-work-item"
                        key={work.to}
                      >

                        <div className="image-holder">

                          <img
                            src={work.img}
                            alt={work.alt}
                            width="85"
                            height="70"
                            loading="lazy"
                            decoding="async"
                          />


                          <div className="overlay-style-one">

                            <div className="box">

                              <div className="content">

                                <Link
                                  to={work.to}
                                  aria-label={`View ${work.alt}`}
                                >
                                  <i
                                    className="fa fa-link"
                                    aria-hidden="true"
                                  />
                                </Link>

                              </div>

                            </div>

                          </div>

                        </div>

                      </div>
                    ))}

                  </div>


                  {/* SECOND ROW */}

                  <div className="inner-flex-footer">

                    {secondRowWorks.map((work) => (
                      <div
                        className="latest-work-item"
                        key={work.to}
                      >

                        <div className="image-holder">

                          <img
                            src={work.img}
                            alt={work.alt}
                            width="85"
                            height="70"
                            loading="lazy"
                            decoding="async"
                          />


                          <div className="overlay-style-one">

                            <div className="box">

                              <div className="content">

                                <Link
                                  to={work.to}
                                  aria-label={`View ${work.alt}`}
                                >
                                  <i
                                    className="fa fa-link"
                                    aria-hidden="true"
                                  />
                                </Link>

                              </div>

                            </div>

                          </div>

                        </div>

                      </div>
                    ))}

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </footer>


      {/* =====================================================
          FOOTER BOTTOM
      ====================================================== */}

      <section className="footer-bottom-area">

        <div className="container">

          <div className="footer-bottom">

            {/* COPYRIGHT */}

            <div className="copyright-text">
              <p>
                Copyright © 2025 | All Right Reserved
              </p>
            </div>


            {/* LEGAL */}

            <div className="footer-menu">

              <div className="legal-dropdown">

                <button
                  type="button"
                  className="legal-dropdown-toggle"
                  onClick={() =>
                    setLegalOpen((value) => !value)
                  }
                  aria-expanded={legalOpen}
                  aria-haspopup="true"
                >
                  <span>Legal</span>

                  <span className="legal-arrow">
                    {legalOpen ? "▼" : "▲"}
                  </span>
                </button>


                {legalOpen && (
  <ul className="legal-dropdown-menu">

    <li>
      <Link
        to="/privacy-policy"
        onClick={() => setLegalOpen(false)}
      >
        Privacy Policy
      </Link>
    </li>

    <li>
      <Link
        to="/terms-conditions"
        onClick={() => setLegalOpen(false)}
      >
        Terms &amp; Conditions
      </Link>
    </li>

    <li>
      <Link
        to="/cancellation-refund-policy"
        onClick={() => setLegalOpen(false)}
      >
        Refund &amp; Cancellation Policy
      </Link>
    </li>

  </ul>
)}

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}