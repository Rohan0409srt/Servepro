import { Link } from "react-router-dom";
import "./About.css";

import aboutImage from "../../assets/images/1servepro/about/about section img.jpeg";

import aboutIcon1 from "../../assets/images/1servepro/home/about-icon-1.png";
import aboutIcon2 from "../../assets/images/1servepro/home/about-icon-2.png";
import aboutIcon3 from "../../assets/images/1servepro/home/about-icon-3.png";
import aboutIcon4 from "../../assets/images/1servepro/home/about-icon-4.png";

export default function About() {
  return (
    <section className="about-us-area">
      <div className="container">

        <div className="sec-title text-center">
          <h1>About ServePro</h1>
          <span className="border"></span>
        </div>

        <div className="about-layout">

          {/* LEFT */}
          <div className="about-left">
            <div className="about-image">
              <img
                src={aboutImage}
                alt="About ServePro"
                width="570"
                height="400"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="about-description">
              <p>
                ServePro Hospitality &amp; facility, belief in
                Our Customer satisfaction, providing them the
                Quality service is our Highest Priority. We are
                a professionally equipped company, providing
                integrated facility.
              </p>

              <div className="about-button">
                <Link
                  className="thm-btn bg-1"
                  to="/about"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="about-right">

            {/* MISSION */}
            <div className="about-item">
              <div className="about-icon">
                <img
                  src={aboutIcon1}
                  alt="Mission"
                  width="60"
                  height="60"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="about-item-text mission-text">
                <h3>Mission</h3>

                <p>
                  Our key to success is our approach
                  Proper utilization of human resources
                  For utmost satisfaction of customers.
                </p>
              </div>
            </div>

            {/* VISION */}
            <div className="about-item">
              <div className="about-icon">
                <img
                  src={aboutIcon2}
                  alt="Vision"
                  width="60"
                  height="60"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="about-item-text">
                <h3>Vision</h3>

                <p>
                  To serve our customer above their
                  expectation, our happiness lies in our
                  customer's satisfaction, so we ensure
                  our Quality service at very ...
                </p>
              </div>
            </div>

            {/* OUR VALUE */}
            <div className="about-item">
              <div className="about-icon">
                <img
                  src={aboutIcon3}
                  alt="Our Value"
                  width="60"
                  height="60"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="about-item-text">
                <h3>Our Value</h3>

                <p>
                  Focus - On need of our customer.
                  <br />
                  Passion – Committed at heart.
                  <br />
                  Quality – We do it right.
                </p>
              </div>
            </div>

            {/* LATEST TECHNOLOGY */}
            <div className="about-item">
              <div className="about-icon">
                <img
                  src={aboutIcon4}
                  alt="Latest Technology"
                  width="60"
                  height="60"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="about-item-text">
                <h3>Latest Technology</h3>

                <p>
                  To meet the various demand of our client,
                  we provide them excellent customized
                  services as per their requirement.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}