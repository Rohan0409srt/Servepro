import React from "react";
import { Link } from "react-router-dom";
import "../../style/Industries.css";

// =====================================================
// IMAGES
// =====================================================

import industryBanner from "../../assets/images/1servepro/industry/banner-industry.jpeg";

import corporateMain from "../../assets/images/1servepro/industry/commercial-corporate/corporate.jpg";
import healthcareMain from "../../assets/images/1servepro/industry/Health-sector/health sector1.jpg";

import commercialImg from "../../assets/images/1servepro/industry/commercial-corporate/commercial.jpg";
import residentialImg from "../../assets/images/1servepro/industry/Residential-Area/residential 1.jpg";
import manufacturingImg from "../../assets/images/1servepro/industry/Manifacturing-Units/manufacture1.jpg";
import healthcareImg from "../../assets/images/1servepro/industry/Health-sector/Health sector 2.jpg";
import educationImg from "../../assets/images/1servepro/industry/Educational-Sector/collage.jpg";

// =====================================================
// INDUSTRY DATA
// =====================================================

const industries = [
  {
    id: "commercial",
    title: "Commercial & Corporate",
    description:
      "Facility services for offices ensuring productivity and efficiency.",
    image: commercialImg,
    link: "/industry-commercial-corporate-facility",
  },
  {
    id: "residential",
    title: "Residential",
    description:
      "Facility services for homes ensuring cleanliness, safety, and smooth living.",
    image: residentialImg,
    link: "/industry-residential-facility",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "Facility services for industries ensuring safety, maintenance, and operations.",
    image: manufacturingImg,
    link: "/industry-manufacturing-facility",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Facility services for hospitals ensuring hygiene, safety, and proper care.",
    image: healthcareImg,
    link: "/industry-healthcare-facility",
  },
  {
    id: "education",
    title: "Education",
    description:
      "Facility services for schools ensuring clean, safe, and learning environments.",
    image: educationImg,
    link: "/industry-education-facility",
  },
];

export default function Industries() {
  return (
    <main className="industries-page">

      {/* =====================================================
          HERO / BANNER
      ===================================================== */}

      <section
        className="industries-banner"
        style={{
          backgroundImage: `url("${industryBanner}")`,
        }}
        aria-label="Industries We Serve"
      >
        <div className="industries-banner-overlay"></div>

        <div className="container">
          <div className="industries-banner-content">
            <h1>Industries We Serve</h1>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO + FEATURE IMAGES
      ===================================================== */}

      <section className="industries-intro">
        <div className="container">

          <div className="industries-section-title text-center">
            <h2>Industries We Serve</h2>
            <span></span>
          </div>

          <div className="industries-intro-text">
            <p>
              ServePro delivers professional facility management services
              across multiple industries in Mumbai. We ensure operational
              efficiency, safety, and high-quality service delivery tailored
              to each sector.
            </p>

            <p>
              Our expertise spans corporate offices, residential complexes,
              manufacturing units, healthcare facilities, and educational
              institutions.
            </p>
          </div>

          <div className="industries-feature-grid">

            {/* Corporate */}
            <div className="industries-feature-card">
              <div className="industries-feature-image">
                <img
                  src={corporateMain}
                  alt="Commercial and Corporate facility"
                  width="543"
                  height="312"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Healthcare */}
            <div className="industries-feature-card">
              <div className="industries-feature-image">
                <img
                  src={healthcareMain}
                  alt="Healthcare facility"
                  width="543"
                  height="312"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRY EXPERTISE
      ===================================================== */}

      <section className="industry-expertise">
        <div className="container">

          <div className="industries-section-title">
            <h2>Our Industry Expertise</h2>
            <span></span>
          </div>

          <div className="industry-card-grid">

            {industries.map((industry) => (
              <article
                className="industry-card"
                key={industry.id}
              >

                <div className="industry-card-image">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    width="257"
                    height="216"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="industry-card-content">

                  <h3>{industry.title}</h3>

                  <p>{industry.description}</p>

                  <span className="industry-card-border"></span>

                  <Link
                    to={industry.link}
                    className="industry-view-link"
                  >
                    View
                    <span aria-hidden="true">›</span>
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}