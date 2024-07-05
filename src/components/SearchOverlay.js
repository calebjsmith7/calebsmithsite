// src/components/SearchOverlay.js

import styles from "../styles/Home.module.css";

const SearchOverlay = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.searchOverlay} onClick={handleOverlayClick}>
      <div className={styles.searchContent}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div className={styles.marketingBlurb}>
          <h2>Enhance Your Business with Our Custom Solutions</h2>
          <p>
            We specialize in creating custom applications for businesses,
            including web and mobile apps. Our services also include email
            marketing, social media management, and comprehensive logo and brand
            design.
          </p>
          <p>
            Whether you need a new website, a mobile app, or a complete brand
            overhaul, we are here to help you achieve your goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
