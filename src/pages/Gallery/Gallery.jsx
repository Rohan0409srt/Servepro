import React, { useMemo, useState } from "react";
import {
  galleryCategories,
  galleryItems,
} from "../../data/GalleryData";

import "../../style/Gallery.css";

import galleryBanner from "../../assets/images/1servepro/home/home new banner 6.jpeg";


export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  // --------------------------------------------------
  // FILTER GALLERY
  // --------------------------------------------------

  const filteredGallery = useMemo(() => {
    if (activeCategory === "all") {
      return galleryItems;
    }

    return galleryItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);


  // --------------------------------------------------
  // CATEGORY CHANGE
  // --------------------------------------------------

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };


  return (
    <main className="gallery-page">

      {/* ==================================================
          PAGE BANNER
      ================================================== */}

      <section
        className="gallery-page-banner"
        style={{
          backgroundImage: `url("${galleryBanner}")`,
        }}
      >
        <div className="gallery-page-banner-overlay"></div>

        <div className="gallery-container">
          <div className="gallery-page-banner-content">
            <h1>Gallery</h1>
          </div>
        </div>
      </section>


      {/* ==================================================
          GALLERY SECTION
      ================================================== */}

      <section className="gallery-section">

        <div className="gallery-container">

          <div className="gallery-layout">


            {/* ==================================================
                CATEGORY SIDEBAR
            ================================================== */}

            <aside className="gallery-sidebar">

              <div className="gallery-sidebar-title">
                <h3>Categories</h3>
              </div>


              <div className="gallery-category-list">

                {galleryCategories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    className={`gallery-category-btn ${
                      activeCategory === category.id
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      handleCategoryChange(category.id)
                    }
                    aria-pressed={
                      activeCategory === category.id
                    }
                  >
                    {category.label}
                  </button>
                ))}

              </div>

            </aside>


            {/* ==================================================
                GALLERY CONTENT
            ================================================== */}

            <div className="gallery-content">

              <div className="gallery-content-top">

                <div className="gallery-result-info">
                  Showing{" "}
                  <strong>
                    {filteredGallery.length}
                  </strong>{" "}
                  {filteredGallery.length === 1
                    ? "image"
                    : "images"}
                </div>

              </div>


              {/* ==================================================
                  IMAGE GRID
              ================================================== */}

              {filteredGallery.length > 0 ? (

                <div className="gallery-grid">

                  {filteredGallery.map((item, index) => (

                    <article
                      className="gallery-card"
                      key={item.id}
                    >

                      <div className="gallery-card-image">

                        <img
                          src={item.image}
                          alt={item.alt}
                          loading={
                            index < 6
                              ? "eager"
                              : "lazy"
                          }
                          decoding="async"
                        />


                        <div className="gallery-card-overlay">
                          <span className="gallery-plus">
                            +
                          </span>
                        </div>

                      </div>

                    </article>

                  ))}

                </div>

              ) : (

                <div className="gallery-empty-state">

                  <div className="gallery-empty-icon">
                    <span>!</span>
                  </div>

                  <h3>No Images Found</h3>

                  <p>
                    No gallery images are available
                    for this category.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveCategory("all")
                    }
                  >
                    View All Images
                  </button>

                </div>

              )}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}