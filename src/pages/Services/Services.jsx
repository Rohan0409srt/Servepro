import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import servicesHero from '../../assets/images/1servepro/home/home new banner 2.png';
import cardIcon from '../../assets/images/1servepro/service/service-card-icon.png';

import housekeepingImg from '../../assets/images/1servepro/soft-service/Housekeeping-Services/1-new-housekeeping.jpeg';
import pantryImg from '../../assets/images/1servepro/soft-service/Pantry-Services/meeting room serve .png';
import guestHouseImg from '../../assets/images/1servepro/soft-service/Guest-House-Management-Services/web3.png';
import warehouseImg from '../../assets/images/1servepro/soft-service/Warehouse-Management-Services/2.png';
import eventManagementImg from '../../assets/images/1servepro/soft-service/Event-Management-services/web 2.png';
import landscapingImg from '../../assets/images/1servepro/garden-service/Landscaping/1Lawn Cutting & Turf Management.jpg';

import '../../style/services.css';
import OtherService from "../../components/OtherServices/OtherServices.jsx";

// =========================================================
// CLIENT LOGOS
// =========================================================

import company1 from '../../assets/images/1servepro/home/Company-1.jpg';
import company2 from '../../assets/images/1servepro/home/Company-2.jpg';
import company3 from '../../assets/images/1servepro/home/Company-3.jpg';
import company4 from '../../assets/images/1servepro/home/Company-4.jpg';
import company5 from '../../assets/images/1servepro/home/Company-5.jpg';
import company6 from '../../assets/images/1servepro/home/Company-6.jpg';
import company7 from '../../assets/images/1servepro/home/Company-7.jpg';
import company8 from '../../assets/images/1servepro/home/Company-8.jpg';
import company9 from '../../assets/images/1servepro/home/Company-9.jpg';
import company10 from '../../assets/images/1servepro/home/Company-10.jpg';
import company11 from '../../assets/images/1servepro/home/Company-11.jpg';
import company12 from '../../assets/images/1servepro/home/Company-12.jpg';
import company13 from '../../assets/images/1servepro/home/Company-13.jpg';
import company14 from '../../assets/images/1servepro/home/Company-14.jpg';
import company15 from '../../assets/images/1servepro/home/Company-15.jpg';
import company16 from '../../assets/images/1servepro/home/Company-16.jpg';
import company17 from '../../assets/images/1servepro/home/Company-17.jpg';
import company18 from '../../assets/images/1servepro/home/Company-18.jpg';
import company19 from '../../assets/images/1servepro/home/Company-19.jpg';


// =========================================================
// MAIN SERVICES
// =========================================================

const mainServices = [
  {
    img: housekeepingImg,
    title: 'Housekeeping Services',
    to: '/soft-service-housekeeping',
  },
  {
    img: pantryImg,
    title: 'Pantry services',
    to: '/soft-service-pantryservices',
  },
  {
    img: guestHouseImg,
    title: 'Guest House Management Services',
    to: '/soft-service-guestmangementservices',
  },
  {
    img: warehouseImg,
    title: 'Warehouse Management Services',
    to: '/soft-service-warehousemangement',
  },
  {
    img: eventManagementImg,
    title: 'Event management Services',
    to: '/soft-service-eventmanagementservice',
  },
];


// =========================================================
// COMMON SERVICE CARD ICON
// =========================================================

const mainServicesWithIcon = mainServices.map((service) => ({
  ...service,
  icon: cardIcon,
}));


// =========================================================
// MOBILE / TABLET SERVICES
// =========================================================

const mobileServices = [
  ...mainServicesWithIcon,
  {
    img: landscapingImg,
    title: 'Landscaping',
    to: '/gardening-service-landingservice',
    icon: cardIcon,
  },
];


// =========================================================
// BRAND LOGOS
// =========================================================

const brandLogos = [
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


// =========================================================
// RESPONSIVE SERVICE SLIDER
// Active only below 995px
// =========================================================

function ResponsiveServiceSlider({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const AUTOPLAY_DELAY = 2500;

  // -------------------------------------------------------
  // Detect screen width
  // -------------------------------------------------------

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;

      if (width >= 768) {
        // 768px - 998px
        setItemsPerView(3);
      } else if (width >= 400) {
        // 400px - 767px
        setItemsPerView(2);
      } else {
        // 0px - 399px
        setItemsPerView(1);
      }
    };

    updateItemsPerView();

    window.addEventListener("resize", updateItemsPerView);

    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, []);

  // -------------------------------------------------------
  // Slider calculations
  // -------------------------------------------------------

  const maxIndex = Math.max(
    0,
    items.length - itemsPerView
  );

  const totalSlides = maxIndex + 1;

  // -------------------------------------------------------
  // Keep index valid when screen size changes
  // -------------------------------------------------------

  useEffect(() => {
    setCurrentIndex((previousIndex) =>
      Math.min(previousIndex, maxIndex)
    );
  }, [items.length, itemsPerView, maxIndex]);

  // -------------------------------------------------------
  // Automatic Slider
  // -------------------------------------------------------

  useEffect(() => {
    if (maxIndex <= 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((previousIndex) => {
        if (previousIndex >= maxIndex) {
          return 0;
        }

        return previousIndex + 1;
      });
    }, AUTOPLAY_DELAY);

    return () => {
      clearInterval(timer);
    };
  }, [maxIndex]);

  // -------------------------------------------------------
  // Previous
  // -------------------------------------------------------

  const handlePrevious = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex <= 0
        ? maxIndex
        : previousIndex - 1
    );
  };

  // -------------------------------------------------------
  // Next
  // -------------------------------------------------------

  const handleNext = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex >= maxIndex
        ? 0
        : previousIndex + 1
    );
  };

  // -------------------------------------------------------
  // Touch / Swipe
  // -------------------------------------------------------

  const handleTouchStart = (event) => {
    setTouchEnd(null);

    setTouchStart(
      event.targetTouches[0].clientX
    );
  };

  const handleTouchMove = (event) => {
    setTouchEnd(
      event.targetTouches[0].clientX
    );
  };

  const handleTouchEnd = () => {
    if (
      touchStart === null ||
      touchEnd === null
    ) {
      return;
    }

    const distance =
      touchStart - touchEnd;

    const minimumSwipeDistance = 50;

    if (distance > minimumSwipeDistance) {
      handleNext();
    }

    if (distance < -minimumSwipeDistance) {
      handlePrevious();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // -------------------------------------------------------
  // Render
  // -------------------------------------------------------

  return (
    <div className="responsive-service-slider">

      <div
        className="service-slider-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >

        <div
          className="service-slider-track"
          style={{
            transform: `translateX(-${
              currentIndex *
              (100 / itemsPerView)
            }%)`,
          }}
        >

          {items.map((service) => (
            <div
              className="service-slider-slide"
              key={service.to}
              style={{
                flex: `0 0 ${
                  100 / itemsPerView
                }%`,
              }}
            >

              <div className="single-service-item service-slide-card">

                <div className="service-card-inner">

                  <div className="service-image">
                    <img
                      src={service.img}
                      alt={service.title}
                      width="370"
                      height="250"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="service-content">

                    <span className="floating-icon">
                      <img
                        src={service.icon}
                        alt=""
                        width="60"
                        height="60"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>

                    <div className="title-holder">
                      <Link to={service.to}>
                        <h3>{service.title}</h3>
                      </Link>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Previous */}
      <button
        type="button"
        className="service-slider-arrow service-slider-prev"
        onClick={handlePrevious}
        aria-label="Previous service"
      >
        &#10094;
      </button>

      {/* Next */}
      <button
        type="button"
        className="service-slider-arrow service-slider-next"
        onClick={handleNext}
        aria-label="Next service"
      >
        &#10095;
      </button>

      {/* Dots */}
      {totalSlides > 1 && (
        <div className="service-slider-dots">

          {Array.from({
            length: totalSlides,
          }).map((_, index) => (

            <button
              type="button"
              key={index}
              className={
                index === currentIndex
                  ? "active"
                  : ""
              }
              onClick={() =>
                setCurrentIndex(index)
              }
              aria-label={`Go to service slide ${
                index + 1
              }`}
            />

          ))}

        </div>
      )}

    </div>
  );
} 


// =========================================================
// BRAND LOGO TRACK
// =========================================================

function BrandLogoTrack({ logos }) {
  return (
    <div className="services-brand-slider">

      <div className="services-brand-track">

        {[...logos, ...logos].map(
          (logo, index) => (

            <div
              className="services-brand-logo"
              key={index}
            >

              <img
                src={logo}
                alt={`Client ${(
                  index % logos.length
                ) + 1}`}
                loading="lazy"
                decoding="async"
              />

            </div>

          )
        )}

      </div>

    </div>
  );
}


// =========================================================
// SERVICES PAGE
// =========================================================

export default function Services() {

  return (
    <main className="services-page">


      {/* =====================================================
          PAGE BANNER
      ===================================================== */}

      <section
        className="breadcrumb-area services-page-banner"
        style={{
          backgroundImage: `url("${servicesHero}")`,
        }}
        aria-label="Services"
      />


      {/* =====================================================
          INTRO / SERVICES TITLE
      ===================================================== */}

      <section className="welcome-area services-intro">

        <div className="container">

          <div className="sec-title text-center">

            <h1>
              Services
            </h1>

            <span className="border"></span>

          </div>


          <p className="para-text">
            Even in your busy schedule, nothing is important
            than you and your family's health, while you can't
            fully protect yourself from every illness, thus
            certain precautionary measures like maintaining
            clean &amp; Healthy living environment by reducing
            dust accumulation in your household. Therefore it's
            needed to clean your house daily/ weekly/monthly
            basis.
          </p>


          <p className="para-text">
            Pleasant look of our house, makes us happy and
            reduces the stress, now it's very easy for home
            owner, even in their busy schedules to opt for
            Housekeeping services, by giving single call to us,
            we'll be at your service by 24 X 7.
          </p>

        </div>

      </section>


      {/* =====================================================
          DESKTOP SERVICES
          995px AND ABOVE
          NORMAL 5 SERVICE VIEW
      ===================================================== */}

      <section className="services-page-area desktop-services">

        <div className="container">

          <div className="service-desktop-grid">

            {mainServicesWithIcon.map((service) => (

              <div
                className="desktop-service-card"
                key={service.to}
              >

                <div className="single-service-item">

                  <div className="service-card-inner">

                    {/* -----------------------------------------
                        IMAGE
                    ----------------------------------------- */}

                    <div className="service-image">

                      <img
                        src={service.img}
                        alt={service.title}
                        width="370"
                        height="250"
                        loading="lazy"
                        decoding="async"
                      />

                    </div>


                    {/* -----------------------------------------
                        CONTENT
                    ----------------------------------------- */}

                    <div className="service-content">

                      <span className="floating-icon">

                        <img
                          src={service.icon}
                          alt=""
                          width="60"
                          height="60"
                          loading="lazy"
                          decoding="async"
                        />

                      </span>


                      <div className="title-holder">

                        <Link to={service.to}>

                          <h3>
                            {service.title}
                          </h3>

                        </Link>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          MOBILE / TABLET SERVICES
          994px AND BELOW
          SLIDER
      ===================================================== */}

      <section className="services-carousel-area mobile-services">

        <div className="container">

          <div className="sec-title text-center">

            <h1>
              Home Basic Cleaning Service
            </h1>


            <p className="para-text">
              Our classic Cleaning Package will help you to
              do regular basic cleaning with prompt service.
            </p>


            <span className="border"></span>

          </div>


          <ResponsiveServiceSlider
            items={mobileServices}
          />

        </div>

      </section>


      {/* =====================================================
          BRAND AREA
      ===================================================== */}

      <section className="brand-area services-brand-area">

        <div className="container">

          <div className="row">

            <div className="col-md-12">

              <BrandLogoTrack
                logos={brandLogos}
              />

            </div>

          </div>

        </div>
        <OtherService />
      </section>
        

    </main>
  );
}