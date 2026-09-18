import { useEffect, useState } from "react";
import "./Testimonials.css";

import testimonialPlaceholder from "../../assets/images/dummy-pfp.jpg";

const testimonials = [
  {
    name: "Neha Modi",
    text: "Amazing service.Every part of my house is shining like Freshly painted and polished. Very professional and they have amazing team. Highly recommended!!!",
  },
  {
    name: "Vivek Vishwakarma",
    text: "I have taken service for the first time. Very good cleaning Very professional and experienced cleaners Very courteous staff.",
  },
  {
    name: "Gurudatt Parab",
    text: "Excellent Work and Good Experience for Cleaning",
  },
  {
    name: "Amita Naravane",
    text: "Excellent service by Servepro. My house is now cleaned like brand new.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const AUTO_SLIDE = 6000;
  const TRANSITION = 700;

  /* =========================
     AUTO SLIDE
  ========================= */

  useEffect(() => {
    if (testimonials.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setIsTransitioning(true);

      setIndex((current) => current + 1);
    }, AUTO_SLIDE);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  /* =========================
     INFINITE LOOP
  ========================= */

  useEffect(() => {
    if (index === testimonials.length) {
      const timer = window.setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, TRANSITION);

      return () => {
        window.clearTimeout(timer);
      };
    }

    return undefined;
  }, [index]);

  /* Turn transition back on after invisible reset */
  useEffect(() => {
    if (!isTransitioning) {
      const timer = window.setTimeout(() => {
        setIsTransitioning(true);
      }, 50);

      return () => {
        window.clearTimeout(timer);
      };
    }

    return undefined;
  }, [isTransitioning]);

  const next = () => {
    setIsTransitioning(true);
    setIndex((current) => current + 1);
  };

  const previous = () => {
    if (index === 0) {
      setIsTransitioning(false);
      setIndex(testimonials.length - 1);

      window.setTimeout(() => {
        setIsTransitioning(true);
      }, 50);

      return;
    }

    setIsTransitioning(true);
    setIndex((current) => current - 1);
  };

  const extendedTestimonials = [
    ...testimonials,
    testimonials[0],
  ];

  return (
    <section className="testimonial-area">
      <div className="container">

        <div className="testimonial-layout">

          {/* =========================
              LEFT
          ========================= */}

          <div className="testimonial-left">
            <div className="left-content">

              <div className="sec-title">

                <h1>
                  Words From
                  <br />
                  Our Happy Clients
                </h1>

                <span className="border"></span>

              </div>

              <div className="text-holder">

                <p>
                  How all this mistaken idea of denouncing pleasure
                  and praising pain was born and I will give you a
                  completed account of the system, and expound.
                </p>

              </div>

            </div>
          </div>

          {/* =========================
              RIGHT
          ========================= */}

          <div className="testimonial-right">

            <div className="testimonial-carousel">

              <div className="testimonial-viewport">

                <div
                  className={`testimonial-track ${
                    isTransitioning
                      ? "testimonial-track-transition"
                      : ""
                  }`}
                  style={{
                    transform: `translateX(-${index * 100}%)`,
                  }}
                >

                  {extendedTestimonials.map(
                    (testimonial, testimonialIndex) => (
                      <div
                        className="testimonial-slide"
                        key={`${testimonial.name}-${testimonialIndex}`}
                      >

                        <div className="testimonial-content-row">

                          {/* CLIENT IMAGE */}

                          <div className="testimonial-image-column">

                            <div className="testimonial-image-holder">

                              <img
                                src={testimonialPlaceholder}
                                alt={`${testimonial.name} profile`}
                                width="300"
                                height="300"
                                loading={
                                  testimonialIndex === 0
                                    ? "eager"
                                    : "lazy"
                                }
                                decoding="async"
                              />

                              <div className="testimonial-client-name">

                                <h3>
                                  By {testimonial.name}
                                </h3>

                              </div>

                            </div>

                          </div>

                          {/* TESTIMONIAL TEXT */}

                          <div className="testimonial-text-column">

                            <div className="testimonial-text-holder">

                              <div className="quote-icon">
                                <span aria-hidden="true">
                                  ”
                                </span>
                              </div>

                              <h3>
                                Surprised at the excellent facilities
                              </h3>

                              <p>
                                {testimonial.text}
                              </p>

                              <div className="review-box">
                                <ul>
                                  {Array.from(
                                    { length: 5 },
                                    (_, starIndex) => (
                                      <li key={starIndex}>
                                        <span aria-hidden="true">
                                          ★
                                        </span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>

                            </div>

                          </div>

                        </div>

                      </div>
                    )
                  )}

                </div>

              </div>

              {/* =========================
                  ARROWS
              ========================= */}

              <div className="testimonial-controls">

                <button
                  type="button"
                  className="testimonial-prev"
                  onClick={previous}
                  aria-label="Previous testimonial"
                >
                  <span aria-hidden="true">
                    ‹
                  </span>
                </button>

                <button
                  type="button"
                  className="testimonial-next"
                  onClick={next}
                  aria-label="Next testimonial"
                >
                  <span aria-hidden="true">
                    ›
                  </span>
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}