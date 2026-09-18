import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./OtherServices.css";

import softServiceIcon from "../../assets/images/1servepro/home/icons/icon3.png";
import businessSupportIcon from "../../assets/images/1servepro/home/icons/icons1.png";
import technicalServiceIcon from "../../assets/images/1servepro/home/icons/icons2.png";
import pestServiceIcon from "../../assets/images/1servepro/home/icons/icons4.png";
import gardeningIcon from "../../assets/images/1servepro/home/icons/icons6.png";
import specializedCleaningIcon from "../../assets/images/1servepro/home/icons/icons5.png";
import itSupportIcon from "../../assets/images/1servepro/home/icons/icon-7.png";

const SERVICES = [
  {
    id: "soft",
    title: "Soft",
    subtitle: "Service",
    image: softServiceIcon,
    link: "/soft-services",
  },
  {
    id: "business",
    title: "Business Support",
    subtitle: "Service",
    image: businessSupportIcon,
    link: "/business-support-service",
  },
  {
    id: "technical",
    title: "Technical",
    subtitle: "Service",
    image: technicalServiceIcon,
    link: "/technical-service",
  },
  {
    id: "pest",
    title: "Pest-Management",
    subtitle: "Service",
    image: pestServiceIcon,
    link: "/pest-control-service",
  },
  {
    id: "gardening",
    title: "Gardening",
    subtitle: "Service",
    image: gardeningIcon,
    link: "/gardening-service",
  },
  {
    id: "specialized",
    title: "Specialized Cleaning",
    subtitle: "Service",
    image: specializedCleaningIcon,
    link: "/specialized-cleaning-service",
  },
  {
    id: "it",
    title: "IT Support",
    subtitle: "Service",
    image: itSupportIcon,
    link: "/it-support-service",
  },
];

const GAP = 20;
const AUTOPLAY = 2000;
const TRANSITION = 400;

function getItemsPerView() {
  if (typeof window === "undefined") return 3;
  return window.innerWidth < 768 ? 2 : 3;
}

export default function OtherService() {
  const viewportRef = useRef(null);
  const timerRef = useRef(null);

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());
  const [slideWidth, setSlideWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(SERVICES.length);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);

  const slides = [...SERVICES, ...SERVICES, ...SERVICES];

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateWidth = () => {
      const width = viewport.offsetWidth;
      const calculatedWidth =
        (width - GAP * (itemsPerView - 1)) / itemsPerView;

      setSlideWidth(calculatedWidth);
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(viewport);

    return () => observer.disconnect();
  }, [itemsPerView]);

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = getItemsPerView();

      setItemsPerView((prev) => {
        if (prev !== newItemsPerView) {
          setAnimate(false);
          setCurrentIndex(SERVICES.length);
          return newItemsPerView;
        }

        return prev;
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!animate) {
      const frame = requestAnimationFrame(() => {
        setAnimate(true);
      });

      return () => cancelAnimationFrame(frame);
    }
  }, [animate]);

  const nextSlide = () => {
    setAnimate(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setAnimate(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (paused || slideWidth === 0) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, AUTOPLAY);

    return () => clearInterval(timerRef.current);
  }, [paused, slideWidth]);

  const handleTransitionEnd = () => {
    const total = SERVICES.length;

    if (currentIndex >= total * 2) {
      setAnimate(false);
      setCurrentIndex(total);
    }

    if (currentIndex < total) {
      setAnimate(false);
      setCurrentIndex(total * 2 - 1);
    }
  };

  const realIndex =
    ((currentIndex - SERVICES.length) % SERVICES.length + SERVICES.length) %
    SERVICES.length;

  const dotCount = Math.ceil(SERVICES.length / itemsPerView);
  const activeDot = Math.floor(realIndex / itemsPerView);

  const translateX = currentIndex * (slideWidth + GAP);

  return (
    <section
      className="other-service-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <div className="other-service-heading">
          <h2>Other Services</h2>
          <span></span>
        </div>

        <div className="other-service-carousel">
          <div
            className="other-service-viewport"
            ref={viewportRef}
          >
            <div
              className="other-service-track"
              style={{
                gap: `${GAP}px`,
                transform: `translate3d(-${translateX}px, 0, 0)`,
                transition: animate
                  ? `transform ${TRANSITION}ms ease`
                  : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((service, index) => (
                <div
                  className="other-service-slide"
                  key={`${service.id}-${index}`}
                  style={{
                    flex: `0 0 ${slideWidth}px`,
                  }}
                >
                  <Link
                    to={service.link}
                    className="other-service-card"
                  >
                    <div className="other-service-icon">
                      <img
                        src={service.image}
                        alt={`${service.title} ${service.subtitle}`}
                        width="62"
                        height="62"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <div className="other-service-content">
                      <h3>{service.title}</h3>
                      <p>{service.subtitle}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="other-service-controls">
            <button
              type="button"
              className="other-service-arrow"
              onClick={prevSlide}
              aria-label="Previous service"
            >
              ‹
            </button>

            <div className="other-service-dots">
              {Array.from({ length: dotCount }).map((_, index) => (
                <button
                  type="button"
                  key={index}
                  className={`other-service-dot ${
                    index === activeDot ? "active" : ""
                  }`}
                  onClick={() => {
                    setAnimate(true);
                    setCurrentIndex(
                      SERVICES.length + index * itemsPerView
                    );
                  }}
                  aria-label={`Go to service group ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="other-service-arrow"
              onClick={nextSlide}
              aria-label="Next service"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}