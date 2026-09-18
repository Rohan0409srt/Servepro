import { useState } from "react";
import "../../style/AboutUs.css";

import HeroSlider from "../../components/Hero/Hero.jsx";
import OtherServices from "../../components/OtherServices/OtherServices.jsx";


// =========================================
// ABOUT IMAGES
// =========================================

import aboutImage from "../../assets/images/1servepro/about/about section img.jpeg";

import missionIcon from "../../assets/images/1servepro/home/about-icon-1.png";
import visionIcon from "../../assets/images/1servepro/home/about-icon-2.png";
import valueIcon from "../../assets/images/1servepro/home/about-icon-3.png";
import technologyIcon from "../../assets/images/1servepro/home/about-icon-4.png";


// =========================================
// CORE VALUE IMAGES
// =========================================

import professionalismIcon from "../../assets/images/1servepro/about/about-icon-1.png";
import teamSpiritIcon from "../../assets/images/1servepro/about/about-icon-2.png";
import accountabilityIcon from "../../assets/images/1servepro/about/about-icon-3.png";
import integrityIcon from "../../assets/images/1servepro/about/about-icon-4.png";
import customerFocusIcon from "../../assets/images/1servepro/about/about-icon-5.png";

import coreValuesBg from "../../assets/images/1servepro/about/about-tree-bg.png";


// =========================================
// SERVICE IMAGES
// =========================================

import softServiceImage from "../../assets/images/1servepro/soft-service/Housekeeping-Services/Picture2.jpg";

import businessServiceImage from "../../assets/images/1servepro/Business_Support_Services/Mailroom-Services/1 Mail Handling & Processing Operations.jpg";

import technicalServiceImage from "../../assets/images/1servepro/Technical_service/HVAC/2 Maintenance, Diagnostics & Repairs.jpg";

import pestServiceImage from "../../assets/images/1servepro/home/service-4.jpg";

import gardeningServiceImage from "../../assets/images/1servepro/garden-service/Garden-Development/2 Plantation & Installation Services.jpg";

import cleaningServiceImage from "../../assets/images/1servepro/special-service/Glass-Facade-Cleaning/2 Glass Cleaning, Stain Removal.jpg";

import itServiceImage from "../../assets/images/1servepro/it-support-service/7 Software Installation & Support.jpg";


// =========================================
// SERVICE ICONS
// =========================================

import softIcon from "../../assets/images/1servepro/about/soft.png";
import businessIcon from "../../assets/images/1servepro/about/business.png";
import technicalIcon from "../../assets/images/1servepro/about/tech.png";
import pestIcon from "../../assets/images/1servepro/about/icon-1.png";
import gardeningIcon from "../../assets/images/1servepro/about/icon-2.png";
import cleaningIcon from "../../assets/images/1servepro/about/icon-3.png";
import itSupportIcon from "../../assets/images/1servepro/about/it-support.png";


// =========================================
// SERVICES BACKGROUND
// =========================================

import servicesBackground from "../../assets/images/1servepro/home/home new banner 1.png";


// =========================================
// CLIENT / BRAND IMAGES
// =========================================

import company1 from "../../assets/images/1servepro/home/Company-1.jpg";
import company2 from "../../assets/images/1servepro/home/Company-2.jpg";
import company3 from "../../assets/images/1servepro/home/Company-3.jpg";
import company4 from "../../assets/images/1servepro/home/Company-4.jpg";
import company5 from "../../assets/images/1servepro/home/Company-5.jpg";
import company6 from "../../assets/images/1servepro/home/Company-6.jpg";
import company7 from "../../assets/images/1servepro/home/Company-7.jpg";
import company8 from "../../assets/images/1servepro/home/Company-8.jpg";
import company9 from "../../assets/images/1servepro/home/Company-9.jpg";
import company10 from "../../assets/images/1servepro/home/Company-10.jpg";
import company11 from "../../assets/images/1servepro/home/Company-11.jpg";
import company12 from "../../assets/images/1servepro/home/Company-12.jpg";
import company13 from "../../assets/images/1servepro/home/Company-13.jpg";
import company14 from "../../assets/images/1servepro/home/Company-14.jpg";
import company15 from "../../assets/images/1servepro/home/Company-15.jpg";
import company16 from "../../assets/images/1servepro/home/Company-16.jpg";
import company17 from "../../assets/images/1servepro/home/Company-17.jpg";
import company18 from "../../assets/images/1servepro/home/Company-18.jpg";
import company19 from "../../assets/images/1servepro/home/Company-19.jpg";


// =========================================
// SERVICES DATA
// =========================================

const services = [
  {
    title: (
      <>
        Soft
        Service
      </>
    ),
    image: softServiceImage,
    icon: softIcon,
    href: "/services/soft",
  },

  {
    title: (
      <>
        Business Support
      </>
    ),
    image: businessServiceImage,
    icon: businessIcon,
    href: "/services/business-support",
  },

  {
    title: (
      <>
        Technical
        Service
      </>
    ),
    image: technicalServiceImage,
    icon: technicalIcon,
    href: "/services/technical",
  },

  {
    title: (
      <>
        Pest Management
        
      </>
    ),
    image: pestServiceImage,
    icon: pestIcon,
    href: "/services/pest-control",
  },

  {
    title: (
      <>
        Gardening
        Service
      </>
    ),
    image: gardeningServiceImage,
    icon: gardeningIcon,
    href: "/services/gardening",
  },

  {
    title: (
      <>
        Specialized Cleaning
  
      </>
    ),
    image: cleaningServiceImage,
    icon: cleaningIcon,
    href: "/services/specialized-cleaning",
  },

  {
    title: (
      <>
        IT Support
      </>
    ),
    image: itServiceImage,
    icon: itSupportIcon,
    href: "/services/it-support",
  },
];


// =========================================
// CLIENT DATA
// =========================================

const companies = [
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
  company8,
  company9,
  company10,
  company11,
  company12,
  company13,
  company14,
  company15,
  company16,
  company17,
  company18,
  company19,
];


// =========================================
// ABOUT US PAGE
// =========================================

export default function AboutUs() {

 const [showAllServices, setShowAllServices] = useState(false);

  return (
    <>

      {/* =====================================================
          HERO
      ===================================================== */}

      <HeroSlider />


      <main className="about-page">


        {/* =====================================================
            ABOUT SERVEPRO
        ===================================================== */}

        <section className="about-us-section">

          <div className="container">

            {/* Section Heading */}

            <div className="about-us-title">

              <h2>About ServePro</h2>

              <div className="title-border"></div>

            </div>


            {/* Main About Content */}

            <div className="about-us-content">


              {/* LEFT SIDE */}

              <div className="about-us-left">

                <div className="about-us-image">

                  <img
                    src={aboutImage}
                    alt="About ServePro"
                  />

                </div>


                <div className="about-us-description">

                  <p>
                    ServePro Hospitality &amp; Facility believes in customer
                    satisfaction, and providing high-quality service is our
                    highest priority. We are a professionally equipped company
                    offering integrated facility management solutions across
                    multiple service areas.
                  </p>

                  <p>
                    We are an ISO 9001:2015 certified company, committed to
                    international quality standards. Our services include
                    F&amp;B management, technical support, housekeeping,
                    cleaning, and pest control. We ensure consistent,
                    reliable, and high-quality service delivery to our clients.
                  </p>

                </div>

              </div>


              {/* RIGHT SIDE */}

              <div className="about-us-features">


                {/* Mission */}

                <div className="about-us-feature-card">

                  <div className="about-us-feature-icon">

                    <img
                      src={missionIcon}
                      alt="Mission"
                    />

                  </div>

                  <h3>Mission</h3>

                  <p>
                    Our key to success is our approach Proper utilization of
                    human resources for utmost satisfaction of customers.
                  </p>

                </div>


                {/* Vision */}

                <div className="about-us-feature-card">

                  <div className="about-us-feature-icon">

                    <img
                      src={visionIcon}
                      alt="Vision"
                    />

                  </div>

                  <h3>Vision</h3>

                  <p>
                    To serve our customer above their expectation, our
                    happiness lies in our customer’s satisfaction, so we ensure
                    our Quality service at very high standards.
                  </p>

                </div>


                {/* Our Value */}

                <div className="about-us-feature-card">

                  <div className="about-us-feature-icon">

                    <img
                      src={valueIcon}
                      alt="Our Value"
                    />

                  </div>

                  <h3>Our Value</h3>

                  <p>
                    Focus – On need of our customer.
                    <br />
                    Passion – Committed at heart.
                    <br />
                    Quality – We do it right.
                  </p>

                </div>


                {/* Latest Technology */}

                <div className="about-us-feature-card">

                  <div className="about-us-feature-icon">

                    <img
                      src={technologyIcon}
                      alt="Latest Technology"
                    />

                  </div>

                  <h3>Latest Technology</h3>

                  <p>
                    To meet the various demand of our client, we provide them
                    excellent customized services as per their requirement.
                  </p>

                </div>


              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
    ALSO WE PROVIDE BELOW SERVICES
===================================================== */}

<section
  className={`special-services-area about-other-service ${
    showAllServices ? "show-all" : ""
  }`}
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(10, 35, 80, 0.75),
        rgba(10, 35, 80, 0.75)
      ),
      url(${servicesBackground})
    `,
  }}
>
  <div className="container">

    {/* Heading */}

    <div className="row">
      <div className="col-md-12">

        <div className="top-about-area">

          <div className="sec-title centre-title">

            <h1>
              Also We Provide Below Services
            </h1>

            <span className="border"></span>

          </div>

        </div>

      </div>
    </div>


    {/* =================================================
        SERVICE CARDS
    ================================================= */}

    <div className="row service-grid">

      {services
        .slice(
          0,
          showAllServices
            ? services.length
            : 3
        )
        .map((service) => (

          <div
            className="single-service-item text-center service-card"
            key={service.href}
          >

            <div className="service-card-inner">

              {/* Service Image */}

              <div className="service-image">

                <img
                  src={service.image}
                  alt=""
                  width="600"
                  height="320"
                  loading="lazy"
                />

              </div>


              {/* =================================================
                  SERVICE CONTENT
                  ICON CENTER + TITLE BELOW
              ================================================= */}

              <div className="service-content">

                <span className="floating-icon">

                  <img
                    src={service.icon}
                    alt=""
                    width="65"
                    height="65"
                    loading="lazy"
                  />

                </span>


                <div className="title-holder">

                  <a href={service.href}>

                    <h3>
                      {service.title}
                    </h3>

                  </a>

                </div>

              </div>

            </div>

          </div>

        ))}

    </div>


    {/* =================================================
        VIEW MORE / VIEW LESS
    ================================================= */}

    <div className="view-more-centre">

      <button
        type="button"
        className="view-more"
        onClick={() =>
          setShowAllServices((prev) => !prev)
        }
      >
        {showAllServices
          ? "View Less"
          : "View More"}
      </button>

    </div>

  </div>
</section>

        {/* =====================================================
            CORE VALUES
        ===================================================== */}

        <section
          className="core-values-section"
          style={{
            backgroundImage: `url(${coreValuesBg})`,
          }}
        >

          <div className="container">

            <div className="core-values-wrapper">


              {/* Professionalism */}

              <div className="core-value-item core-value-left top-value">

                <div className="about-even-div">

                  <img
                    src={professionalismIcon}
                    alt="Professionalism"
                    className="icon"
                    width="70"
                    height="70"
                    loading="lazy"
                  />

                  <h5>
                    <strong>
                      Professionalism
                    </strong>
                  </h5>

                  <p>
                    Exhibiting excellence in routine and commitment at work,
                    positive attitude, matured and formal behavior, mutual
                    respect to every individual in the organization.
                  </p>

                </div>

              </div>


              {/* Team Spirit */}

              <div className="core-value-item core-value-right top-value">

                <div className="about-even-div">

                  <img
                    src={teamSpiritIcon}
                    alt="Team Spirit"
                    className="icon"
                    width="70"
                    height="70"
                    loading="lazy"
                  />

                  <h5>
                    <strong>
                      Team Spirit
                    </strong>
                  </h5>

                  <p>
                    Shows Collaboration, working together to achieve a common
                    goal, being proud to be part of the group, willingness to
                    cooperate and provide help demonstrating passion to deliver
                    the best.
                  </p>

                </div>

              </div>


              {/* Accountability */}

              <div className="core-value-item core-value-left middle-value">

                <div className="about-even-div">

                  <img
                    src={accountabilityIcon}
                    alt="Accountability"
                    className="icon"
                    width="70"
                    height="70"
                    loading="lazy"
                  />

                  <h5>
                    <strong>
                      Accountability
                    </strong>
                  </h5>

                  <p>
                    High culture of accountability breeds responsibility.
                    It means taking individual ownership of one’s own actions
                    and its results, knowing ‘who, what, when and how of a
                    situation’, individual attitude striving for continuous
                    improvement rising above the circumstance to meet the
                    committed results.
                  </p>

                </div>

              </div>


              {/* Integrity */}

              <div className="core-value-item core-value-right middle-value">

                <div className="about-even-div">

                  <img
                    src={integrityIcon}
                    alt="Integrity"
                    className="icon"
                    width="70"
                    height="70"
                    loading="lazy"
                  />

                  <h5>
                    <strong>
                      Integrity
                    </strong>
                  </h5>

                  <p>
                    Being fair, honest, credible, reliable and having moral
                    uprightness and ethics. Developing trust with all
                    stakeholders by being open and transparent.
                  </p>

                </div>

              </div>


              {/* Customer Focus */}

              <div className="core-value-item core-value-center bottom-value">

                <div className="about-even-div">

                  <img
                    src={customerFocusIcon}
                    alt="Customer Focus"
                    className="icon"
                    width="70"
                    height="70"
                    loading="lazy"
                  />

                  <h5>
                    <strong>
                      Customer Focus
                    </strong>
                  </h5>

                  <p>
                    Understanding customers’ business, building trust and
                    loyalty by responding to current and future requirements,
                    delivering high quality and effective services to internal
                    and external customers, measuring and maintaining
                    high-level of satisfaction.
                  </p>

                </div>

              </div>


            </div>

          </div>

        </section>


        {/* =====================================================
            CLIENT / BRAND LOGOS
        ===================================================== */}

        <section className="brand-area">

          <div className="container">

            <div className="row">

              <div className="col-md-12">

                <div className="client-slider">

                  <div className="client-track">

                    {[...companies, ...companies].map(
                      (company, index) => (

                        <div
                          className="client-logo"
                          key={`${index}-${company}`}
                        >

                          <img
                            src={company}
                            alt={`Client ${
                              (index % companies.length) + 1
                            }`}
                            width="180"
                            height="100"
                            loading="lazy"
                          />

                        </div>

                      )
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>
               
        </section>
       

        <OtherServices/>
      </main>
      
    </>
  );
}