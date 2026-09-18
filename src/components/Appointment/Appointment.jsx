import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Appointment.css";

import appointmentImage from "../../assets/images/1servepro/Business_Support_Services/Reception/web3.png";

export default function Appointment() {
  const formRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      await emailjs.sendForm(
        "service_nrw56br",
        "template_2poffb8",
        formRef.current,
        "Z1kczesoMy5v1nv08"
      );

      setSubmitStatus("success");
      formRef.current?.reset();
    } catch (error) {
      console.error("Appointment EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="appointment-area">
      <div className="container">
        <div className="appointment-row">

          {/* =========================
              LEFT IMAGE
          ========================= */}

          <div className="appointment-image-col">
            <div className="appointment-image">
              <img
                src={appointmentImage}
                alt="Connect With Us"
                width="570"
                height="570"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* =========================
              RIGHT FORM
          ========================= */}

          <div className="appointment-form-col">
            <div className="appointment-form-wrapper">

              <div className="appointment-title">
                <h2>Connect With Us</h2>
                <span></span>
              </div>

              <p>
                We don’t want you to think what is the best for you.
                We know what it is and will make everything to help.
              </p>

              <form
                ref={formRef}
                className="appointment-form"
                onSubmit={handleSubmit}
              >

                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number*"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                  />
                </div>

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "SENDING..." : "SUBMIT"}
                </button>

                {submitStatus === "success" && (
                  <div className="appointment-success-message" role="status">
                    ✓ Appointment request sent successfully!
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="appointment-error-message" role="alert">
                    ! Something went wrong. Please try again.
                  </div>
                )}

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}