import { useEffect, useState } from "react";

import hero1 from "../../assets/images/1servepro/home/home new banner 1.png";
import hero2 from "../../assets/images/1servepro/home/home new banner 2.png";
import hero3 from "../../assets/images/1servepro/home/home new banner 3.jpeg";
import hero4 from "../../assets/images/1servepro/home/home new banner 4.jpeg";
import hero5 from "../../assets/images/1servepro/home/home new banner 5.jpeg";
import hero6 from "../../assets/images/1servepro/home/home new banner 6.jpeg";

import "./Hero.css";

const slides = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
];

const AUTO_DELAY = 5000;
const TRANSITION_TIME = 650;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const [activeArrow, setActiveArrow] = useState(null);

  /*
   * --------------------------------------------------
   * NEXT
   * --------------------------------------------------
   */

  const nextSlide = () => {
    setActiveArrow("next");

    window.setTimeout(() => {
      setActiveArrow(null);
    }, 300);

    setIndex((current) => current + 1);
  };

  /*
   * --------------------------------------------------
   * PREVIOUS
   * --------------------------------------------------
   */

  const previousSlide = () => {
    setActiveArrow("prev");

    window.setTimeout(() => {
      setActiveArrow(null);
    }, 300);

    setIndex((current) => current - 1);
  };

  /*
   * --------------------------------------------------
   * AUTO SLIDER
   * --------------------------------------------------
   */

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => current + 1);
    }, AUTO_DELAY);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  /*
   * --------------------------------------------------
   * CLONED SLIDES
   *
   * [6] [1] [2] [3] [4] [5] [6] [1]
   *      ↑
   *   real 1
   * --------------------------------------------------
   */

  const extendedSlides = [
    slides[slides.length - 1],
    ...slides,
    slides[0],
  ];

  const trackIndex = index + 1;

  /*
   * --------------------------------------------------
   * INFINITE LOOP RESET
   * --------------------------------------------------
   */

  const handleTransitionEnd = () => {
    /*
     * 6 -> cloned 1
     */
    if (index >= slides.length) {
      setEnableTransition(false);
      setIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });

      return;
    }

    /*
     * cloned 6 -> 1
     */
    if (index < 0) {
      setEnableTransition(false);
      setIndex(slides.length - 1);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }
  };

  return (
    <section className="rev_slider_wrapper hero-section">
      <div className="rev_slider hero-slider">

        {/* ==================================================
            SLIDER TRACK
        ================================================== */}

        <div
          className="hero-slider-track"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translate3d(-${trackIndex * 100}%, 0, 0)`,
            transition: enableTransition
              ? `transform ${TRANSITION_TIME}ms ease-in-out`
              : "none",
          }}
        >
          {extendedSlides.map((src, i) => {
            const isFirstRealSlide = i === 1;

            return (
              <div
                className="hero-slide"
                key={`${src}-${i}`}
              >
                <img
                  src={src}
                  alt={
                    isFirstRealSlide
                      ? "ServePro Facility Management Services"
                      : ""
                  }
                  width="1920"
                  height="600"
                  fetchPriority={
                    isFirstRealSlide ? "high" : "auto"
                  }
                  loading={
                    isFirstRealSlide ? "eager" : "lazy"
                  }
                  decoding="async"
                />
              </div>
            );
          })}
        </div>

        {/* ==================================================
            PREVIOUS ARROW
        ================================================== */}

        <button
          type="button"
          className={`hero-slider-arrow hero-slider-prev ${
            activeArrow === "prev" ? "active" : ""
          }`}
          onClick={previousSlide}
          aria-label="Previous slide"
        >
          <span aria-hidden="true">‹</span>
        </button>

        {/* ==================================================
            NEXT ARROW
        ================================================== */}

        <button
          type="button"
          className={`hero-slider-arrow hero-slider-next ${
            activeArrow === "next" ? "active" : ""
          }`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <span aria-hidden="true">›</span>
        </button>

      </div>
    </section>
  );
}