import { useEffect, useState } from "react";
import "./Services.css";

import softServiceImage from "../../assets/images/1servepro/soft-service/Housekeeping-Services/Picture2.jpg";
import businessSupportImage from "../../assets/images/1servepro/Business_Support_Services/Mailroom-Services/1 Mail Handling & Processing Operations.jpg";
import technicalServiceImage from "../../assets/images/1servepro/Technical_service/HVAC/2 Maintenance, Diagnostics & Repairs.jpg";
import pestServiceImage from "../../assets/images/1servepro/home/service-4.jpg";
import gardeningServiceImage from "../../assets/images/1servepro/garden-service/Garden-Development/2 Plantation & Installation Services.jpg";
import specializedCleaningImage from "../../assets/images/1servepro/special-service/Glass-Facade-Cleaning/2 Glass Cleaning, Stain Removal.jpg";
import itSupportImage from "../../assets/images/1servepro/it-support-service/7 Software Installation & Support.jpg";

import softServiceIcon from "../../assets/images/1servepro/home/icons/icon3.png";
import businessSupportIcon from "../../assets/images/1servepro/home/icons/icons1.png";
import technicalServiceIcon from "../../assets/images/1servepro/home/icons/icons2.png";
import pestServiceIcon from "../../assets/images/1servepro/home/icons/icons4.png";
import gardeningServiceIcon from "../../assets/images/1servepro/home/icons/icons6.png";
import specializedCleaningIcon from "../../assets/images/1servepro/home/icons/icons5.png";
import itSupportIcon from "../../assets/images/1servepro/home/icons/icon-7.png";

const services = [
  {
    image: softServiceImage,
    icon: softServiceIcon,
    title: "Soft Service",
    path: "/soft-services",
  },
  {
    image: businessSupportImage,
    icon: businessSupportIcon,
    title: "Business Support Service",
    path: "/business-support-service",
  },
  {
    image: technicalServiceImage,
    icon: technicalServiceIcon,
    title: "Technical Service",
    path: "/technical-service",
  },
  {
    image: pestServiceImage,
    icon: pestServiceIcon,
    title: "Pest-Management Service",
    path: "/pest-control-service",
  },
  {
    image: gardeningServiceImage,
    icon: gardeningServiceIcon,
    title: "Gardening Service",
    path: "/gardening-service",
  },
  {
    image: specializedCleaningImage,
    icon: specializedCleaningIcon,
    title: "Specialized Cleaning Service",
    path: "/specialized-cleaning-service",
  },
  {
    image: itSupportImage,
    icon: itSupportIcon,
    title: "IT Support Service",
    path: "/it-support-service",
  },
];

export default function Services() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(3);
  const [animate, setAnimate] = useState(true);

  /* Responsive cards */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 575) {
        setVisible(1);
      } else if (window.innerWidth <= 991) {
        setVisible(2);
      } else {
        setVisible(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* Reset position when breakpoint changes */
  useEffect(() => {
    setAnimate(false);
    setCurrent(0);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimate(true);
      });
    });
  }, [visible]);

  /*
    Clone beginning/end cards for infinite slider
  */
  const slides = [
    ...services.slice(-visible),
    ...services,
    ...services.slice(0, visible),
  ];

  const position = current + visible;

  const trackWidth = (slides.length / visible) * 100;
  const itemWidth = 100 / slides.length;

  const nextSlide = () => {
    setAnimate(true);
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    setAnimate(true);
    setCurrent((prev) => prev - 1);
  };

  /*
    Infinite loop correction
  */
  useEffect(() => {
    if (current === services.length) {
      const timer = setTimeout(() => {
        setAnimate(false);
        setCurrent(0);
      }, 650);

      return () => clearTimeout(timer);
    }

    if (current === -1) {
      const timer = setTimeout(() => {
        setAnimate(false);
        setCurrent(services.length - 1);
      }, 650);

      return () => clearTimeout(timer);
    }
  }, [current]);

  /*
    Auto slide
  */
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate(true);
      setCurrent((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="special-services-area">
      <div className="container">

        {/* Heading */}
        <div className="services-heading">
          <div className="sec-title">
            <h1>ServePro&apos;s Services</h1>
            <span className="border"></span>
          </div>
        </div>

        {/* Slider */}
        <div className="services-slider">

          {/* Left arrow */}
          <button
            type="button"
            className="services-arrow services-arrow-left"
            onClick={prevSlide}
            aria-label="Previous service"
          >
            &#8249;
          </button>

          {/* Viewport */}
          <div className="services-viewport">
            <div
              className={`services-track ${
                animate ? "services-track-animate" : ""
              }`}
              style={{
                width: `${trackWidth}%`,
                transform: `translateX(-${
                  position * itemWidth
                }%)`,
              }}
            >
              {slides.map((service, index) => (
                <div
                  className="service-slide"
                  key={`${service.title}-${index}`}
                  style={{
                    flex: `0 0 ${itemWidth}%`,
                  }}
                >
                  <a
                    href={service.path}
                    className="service-card"
                  >
                    <div className="service-image">
                      <img
                        src={service.image}
                        alt={service.title}
                        width="600"
                        height="400"
                        loading={index < visible + 2 ? "eager" : "lazy"}
                        decoding="async"
                      />

                      <div className="service-icon">
                        <img
                          src={service.icon}
                          alt=""
                          width="70"
                          height="70"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>

                    <div className="service-content">
                      <h3>{service.title}</h3>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            type="button"
            className="services-arrow services-arrow-right"
            onClick={nextSlide}
            aria-label="Next service"
          >
            &#8250;
          </button>

        </div>
      </div>
    </section>
  );
}