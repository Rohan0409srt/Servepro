import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import navigation from "../../data/navigation";
import logo from "../../assets/images/new-final-logo-servepro.png";

import locationIcon from "../../assets/images/1servepro/home/loc-blk.png";
import emailIcon from "../../assets/images/1servepro/home/mail-blk.png";
import clockIcon from "../../assets/images/1servepro/home/clock-blk.png";

import "./Navbar.css";


export default function Navbar() {

  /* =====================================================
     STATES
  ===================================================== */

  const [mobileOpen, setMobileOpen] = useState(false);

  const [openMobileMenu, setOpenMobileMenu] = useState(null);

  const [hoveredService, setHoveredService] = useState(null);

  const [sticky, setSticky] = useState(false);


  /* =====================================================
     GET NAVIGATION ITEMS
  ===================================================== */

  const servicesItem = navigation.find(
    (item) => item.label === "Services"
  );

  const industriesItem = navigation.find(
    (item) => item.label === "Industries"
  );


  /* =====================================================
     STICKY HEADER
  ===================================================== */

  useEffect(() => {

    const handleScroll = () => {

      setSticky(window.scrollY > 100);

    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  /* =====================================================
     MOBILE MENU
  ===================================================== */

  const toggleMobileMenu = (label) => {

    setOpenMobileMenu((previous) =>
      previous === label ? null : label
    );

  };


  /* =====================================================
     CLOSE MOBILE MENU
  ===================================================== */

  const closeMobileMenu = () => {

    setMobileOpen(false);
    setOpenMobileMenu(null);
    setHoveredService(null);

  };


  /* =====================================================
     SERVICE HOVER
  ===================================================== */

  const handleServiceHover = (serviceLabel) => {

    setHoveredService(serviceLabel);

  };


  /* =====================================================
     CURRENT SERVICE SUBMENU
  ===================================================== */

  const activeService = servicesItem?.dropdown?.find(
    (service) => service.label === hoveredService
  );


  return (
    <>
      {/* =====================================================
          MAIN HEADER
      ===================================================== */}

      <header
        className={`mainmenu-area ${
          sticky ? "sticky-header" : ""
        }`}
      >

        <div className="header-container">


          {/* =================================================
              LOGO
          ================================================= */}

          <div className="header-logo">

            <Link
              to="/"
              onClick={closeMobileMenu}
            >
              <img
                src={logo}
                alt="ServePro Hospitality and Facility Pvt. Ltd."
                width="150"
                height="65"
              />
            </Link>

          </div>


          {/* =================================================
              MAIN NAVIGATION
          ================================================= */}

          <nav className="main-menu">


            {/* ===============================================
                MOBILE MENU BUTTON
            ================================================ */}

            <button
              type="button"
              className={`mobile-menu-btn ${
                mobileOpen ? "active" : ""
              }`}
              onClick={() =>
                setMobileOpen((previous) => !previous)
              }
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>


            {/* ===============================================
                NAVIGATION
            ================================================ */}

            <ul
              className={`navigation ${
                mobileOpen ? "mobile-open" : ""
              }`}
            >


              {/* =================================================
                  HOME
              ================================================== */}

              <li>

                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "current" : ""
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>

              </li>


              {/* =================================================
                  ABOUT
              ================================================== */}

              <li>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "current" : ""
                  }
                  onClick={closeMobileMenu}
                >
                  About Us
                </NavLink>

              </li>


              {/* =================================================
                  SERVICES
              ================================================== */}

              <li
                className={`services-dropdown-parent ${
                  hoveredService
                    ? "service-menu-active"
                    : ""
                }`}
                onMouseEnter={() => {
                  // Keep dropdown open.
                  // No service selected until mouse enters
                  // an individual main service.
                }}
                onMouseLeave={() => {
                  setHoveredService(null);
                }}
              >

                {/* Main Services link */}

                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "current" : ""
                  }
                  onClick={closeMobileMenu}
                >
                  Services
                </NavLink>


                {/* Mobile dropdown button */}

                <button
                  type="button"
                  className="dropdown-toggle"
                  aria-label="Toggle Services menu"
                  aria-expanded={
                    openMobileMenu === "Services"
                  }
                  onClick={(event) => {

                    event.preventDefault();
                    event.stopPropagation();

                    toggleMobileMenu("Services");

                  }}
                >
                  <span></span>
                </button>


                {/* =================================================
                    SERVICES MEGA MENU

                    IMPORTANT:
                    Width always 660px.
                    It never expands/shrinks on hover.
                ================================================== */}

                <div
                  className={`services-mega-dropdown ${
                    hoveredService
                      ? "has-active-service"
                      : ""
                  } ${
                    openMobileMenu === "Services"
                      ? "mobile-services-open"
                      : ""
                  }`}
                  onMouseEnter={() => {
                    // Keep menu alive while moving
                    // from left panel to right panel.
                  }}
                  onMouseLeave={() => {
                    setHoveredService(null);
                  }}
                >


                  {/* =================================================
                      LEFT PANEL - MAIN SERVICES
                  ================================================== */}

                  <div className="services-mega-left">

                    {servicesItem?.dropdown?.map(
                      (service) => (

                        <div
  key={service.label}
  className={`services-mega-item ${
    hoveredService === service.label ||
    openMobileMenu === service.label
      ? "active"
      : ""
  }`}
  onMouseEnter={() => {
    if (window.innerWidth >= 992) {
      handleServiceHover(service.label);
    }
  }}
>

                          {/* Main service page */}

                          <Link
  to={service.path}
  onClick={(event) => {

    if (
      window.innerWidth < 992 &&
      service.submenu?.length > 0
    ) {
      event.preventDefault();
      event.stopPropagation();

      // Services menu ko open rakho
      setOpenMobileMenu("Services");

      // Selected service ko active karo
      setHoveredService(service.label);

      return;
    }

    // Desktop ya submenu-less service
    closeMobileMenu();

  }}
>


                            <span className="service-menu-text">
                              {service.label}
                            </span>


                            {/* Arrow only if submenu exists */}

                            {service.submenu?.length > 0 && (
                              <span
                                className="services-mega-arrow"
                                aria-hidden="true"
                              >
                                ›
                              </span>
                            )}

                          </Link>


                          {/* =================================================
                              MOBILE SUB SERVICES
                          ================================================== */}

                          {service.submenu?.length > 0 && (
                            <div className="mobile-service-submenu">

                              {service.submenu.map(
                                (subService) => (

                                  <Link
                                    key={subService.label}
                                    to={subService.path}
                                    onClick={closeMobileMenu}
                                  >
                                    {subService.label}
                                  </Link>

                                )
                              )}

                            </div>
                          )}

                        </div>

                      )
                    )}

                  </div>


                  {/* =================================================
                      RIGHT PANEL - SUB SERVICES
                  ================================================== */}

                  <div className="services-mega-right">

                    {activeService?.submenu?.map(
                      (subService) => (

                        <Link
                          key={subService.label}
                          to={subService.path}
                          className="services-submenu-link"
                          onClick={closeMobileMenu}
                        >
                          {subService.label}
                        </Link>

                      )
                    )}

                  </div>

                </div>

              </li>


              {/* =================================================
                  INDUSTRIES
              ================================================== */}

              <li className="industries-dropdown-parent">

                <NavLink
                  to="/industries"
                  className={({ isActive }) =>
                    isActive ? "current" : ""
                  }
                  onClick={closeMobileMenu}
                >
                  Industries
                </NavLink>


                {/* Mobile button */}

                <button
                  type="button"
                  className="dropdown-toggle"
                  aria-label="Toggle Industries menu"
                  aria-expanded={
                    openMobileMenu === "Industries"
                  }
                  onClick={(event) => {

                    event.preventDefault();
                    event.stopPropagation();

                    toggleMobileMenu("Industries");

                  }}
                >
                  <span></span>
                </button>


                {/* Industries dropdown */}

                <ul
                  className={`dropdown-menu ${
                    openMobileMenu === "Industries"
                      ? "open"
                      : ""
                  }`}
                >

                  {industriesItem?.dropdown?.map(
                    (industry) => (

                      <li key={industry.label}>

                        <Link
                          to={industry.path}
                          onClick={closeMobileMenu}
                        >
                          {industry.label}
                        </Link>

                      </li>

                    )
                  )}

                </ul>

              </li>


              {/* =================================================
                  GALLERY
              ================================================== */}

              <li>

                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    isActive ? "current" : ""
                  }
                  onClick={closeMobileMenu}
                >
                  Gallery
                </NavLink>

              </li>


              {/* =================================================
                  CONTACT
              ================================================== */}

              <li>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "current" : ""
                  }
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </NavLink>

              </li>

            </ul>

          </nav>


          {/* =================================================
              CALL US
          ================================================== */}

          <div className="header-call">

            <div className="call-icon">

              <span aria-hidden="true">
                ☎
              </span>

            </div>


            <div className="call-content">

              <span>
                Call Us:
              </span>

              <a href="tel:+919326505094">
                +91 93265 05094
              </a>

            </div>

          </div>

        </div>

      </header>


      {/* =====================================================
    CONTACT INFORMATION BAR
===================================================== */}

<div className="mainmenu-bottom-area">

  <div className="contact-container">

    {/* LOCATION */}
    <div className="contact-item">

      <div className="contact-icon">
        <a
          href="https://maps.app.goo.gl/qYq44GMhMmqFtB639"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ServePro location"
        >
          <img
            src={locationIcon}
            alt="Location"
            width="20"
            height="20"
          />
        </a>
      </div>

      <div className="contact-text">
        <a
          href="https://maps.app.goo.gl/qYq44GMhMmqFtB639"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dadar East Mumbai,India 400014
        </a>
      </div>

    </div>


    {/* EMAIL */}
    <div className="contact-item">

      <div className="contact-icon">
        <a
          href="mailto:info@serveprofms.com"
          aria-label="Email ServePro"
        >
          <img
            src={emailIcon}
            alt="Email"
            width="20"
            height="20"
          />
        </a>
      </div>

      <div className="contact-text">
        <a href="mailto:info@serveprofms.com">
          info@serveprofms.com
        </a>
      </div>

    </div>


    {/* 24/7 SUPPORT */}
    <div className="contact-item">

      <div className="contact-icon">
        <img
          src={clockIcon}
          alt="24/7 Support"
          width="20"
          height="20"
        />
      </div>

      <div className="contact-text">
        <span>
          24/7 Support Available
        </span>
      </div>

    </div>

  </div>

</div>
    </>
  );
}