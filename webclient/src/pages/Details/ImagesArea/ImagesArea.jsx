import React from "react";
import { ASSETS_SERVER_URL } from "../../../constans";
import styles from "./ImagesArea.module.css";

const ImagesArea = (props) => {
  const { homeImage, images } = props;

  const homeImgSrc = `${ASSETS_SERVER_URL}/${homeImage}`;

  const [, ...rest] = images;

  const mappedImages = rest.map((image, index) => {
    const imgSrc = `${ASSETS_SERVER_URL}/${image}`;
    return (
      <img
        src={imgSrc}
        className={styles.propertyThumb}
        key={index}
        alt="property"
      />
    );
  });

  return (
    <section className={styles.propertyImagesDetail}>
      <div className={styles.propertyMainContainer}>
        <img className={styles.propertyMainImage} src={homeImgSrc} alt="main" />
      </div>
      <div className={styles.propertyThumbsContainer}>{mappedImages}</div>
    </section>
  );
};

export default ImagesArea;
