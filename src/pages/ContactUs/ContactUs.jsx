import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "../../style/ContactUs.css";

import contactBanner from "../../assets/images/1servepro/home/home new banner 2.png";

// Contact icons
import locationIcon from "../../assets/images/1servepro/home/loc-blk.png";
import mailIcon from "../../assets/images/1servepro/home/mail-blk.png";
import clockIcon from "../../assets/images/1servepro/home/clock-blk.png";


export default function Contact() {
  const formRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");


  // =====================================================
  // CONTACT FORM SUBMIT
  // =====================================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      /*
       * First EmailJS template
       */
      await emailjs.sendForm(
  "service_nrw56br",
  "template_2poffb8",
  formRef.current,
  "Z1kczesoMy5v1nv08"
);
      /*
       * Second EmailJS template
       */
      await emailjs.sendForm(
  "service_nrw56br",
  "template_2poffb8",
  formRef.current,
  "Z1kczesoMy5v1nv08"
);

      // Google Ads conversion
      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: "AW-705275342/bX_zCLeIxvAcEM7LptAC",
          value: 1.0,
          currency: "INR",
        });
      }


      setSubmitStatus("success");

      formRef.current?.reset();

    } catch (error) {
      console.error("EmailJS Error:", error);

      setSubmitStatus("error");

    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <main className="contact-page">

      {/* ==================================================
          PAGE BANNER
      ================================================== */}

      <section
        className="contact-page-banner"
        style={{
          backgroundImage: `url("${contactBanner}")`,
        }}
      >
        <div className="contact-page-banner-overlay"></div>

        <div className="contact-container">

          <div className="contact-page-banner-content">
            <h1>Contact Us</h1>
          </div>

        </div>
      </section>


      {/* ==================================================
          CONTACT INFORMATION
      ================================================== */}

      <section className="contact-info-section">

        <div className="contact-container">

          <div className="contact-info-grid">

            {/* Location */}

            <a
              href="https://maps.app.goo.gl/qYq44GMhMmqFtB639"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-card"
            >

              <div className="contact-info-icon">
                <img
                  src={locationIcon}
                  alt=""
                />
              </div>

              <div className="contact-info-content">
                <h3>Our Location</h3>
                <p>
                  Dadar East Mumbai, India
                  <br />
                  400014
                </p>
              </div>

            </a>


            {/* Email */}

            <a
              href="mailto:info@serveprofms.com"
              className="contact-info-card"
            >

              <div className="contact-info-icon">
                <img
                  src={mailIcon}
                  alt=""
                />
              </div>

              <div className="contact-info-content">
                <h3>Email Us</h3>
                <p>
                  info@serveprofms.com
                </p>
              </div>

            </a>


            {/* Support */}

            <div className="contact-info-card">

              <div className="contact-info-icon">
                <img
                  src={clockIcon}
                  alt=""
                />
              </div>

              <div className="contact-info-content">
                <h3>Support</h3>
                <p>
                  24/7 Support Available
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          MAP
      ================================================== */}

      <section className="contact-map-section">

        <div className="contact-container">

          <div className="contact-map-wrapper">

            <iframe
              title="ServePro Hospitality & Facility Pvt Ltd Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.087302678363!2d72.8443047!3d19.015874300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf15eb7ea7f9%3A0x46027527c4f2b1ed!2sServepro%20Hospitality%20%26%20Facility%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1772129757413!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </section>


      {/* ==================================================
          CONTACT FORM
      ================================================== */}

      <section className="contact-form-section">

        <div className="contact-container">

          <div className="contact-form-wrapper">

            <div className="contact-form-heading">
              <span className="contact-form-subtitle">
                Get In Touch
              </span>

              <h2>
                Send Us a Message
              </h2>

              <span className="contact-form-line"></span>
            </div>


            <form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* Row 1 */}

              <div className="contact-form-row">

                <div className="contact-form-group">

                  <label htmlFor="user_name">
                    First Name
                  </label>

                  <input
                    id="user_name"
                    type="text"
                    name="user_name"
                    placeholder="Enter Full Name"
                    autoComplete="name"
                    required
                  />

                </div>


                <div className="contact-form-group">

                  <label htmlFor="user_email">
                    Email ID
                  </label>

                  <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    placeholder="Enter Email ID"
                    autoComplete="email"
                    required
                  />

                </div>

              </div>


              {/* Row 2 */}

              <div className="contact-form-row">

                <div className="contact-form-group">

                  <label htmlFor="user_phone">
                    Mobile Number
                  </label>

                  <input
                    id="user_phone"
                    type="tel"
                    name="user_phone"
                    placeholder="+91 | Enter Mobile Number"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                  />

                </div>


                <div className="contact-form-group">

                  <label htmlFor="user_city">
                    City
                  </label>

                  <input
                    id="user_city"
                    type="text"
                    name="user_city"
                    placeholder="Enter City"
                    autoComplete="address-level2"
                    required
                  />

                </div>

              </div>


              {/* Address */}

              <div className="contact-form-group contact-form-full">

                <label htmlFor="user_address">
                  Address
                </label>

                <textarea
                  id="user_address"
                  name="user_address"
                  placeholder="Type a Address"
                  rows="4"
                ></textarea>

              </div>


              {/* Message */}

              <div className="contact-form-group contact-form-full">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Type a Message"
                  rows="5"
                ></textarea>

              </div>


              {/* Submit */}

              <div className="contact-submit-area">

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={
                    isSubmitting
                      ? "contact-submit-btn loading"
                      : "contact-submit-btn"
                  }
                >
                  {isSubmitting
                    ? "Sending..."
                    : "Send Message"}
                </button>

              </div>


              {/* Success */}

              {submitStatus === "success" && (
                <div
                  className="contact-success-message"
                  role="status"
                >
                  <span>✓</span>
                  Message sent successfully!
                </div>
              )}


              {/* Error */}

              {submitStatus === "error" && (
                <div
                  className="contact-error-message"
                  role="alert"
                >
                  <span>!</span>
                  Something went wrong. Please try again.
                </div>
              )}

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}