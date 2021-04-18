import React from "react";
import { ASSETS_SERVER_URL } from "../../constans";

const ImagesArea = (props) => {
  console.log(props)
  const { homeImage, images } = props;

  const homeImgSrc = `${ASSETS_SERVER_URL}/${homeImage}`;

  const mappedImages = images.map((image) => {
    const imgSrc = `${ASSETS_SERVER_URL}/${image}`;
    return <img src={imgSrc} alt="property" />;
  });

  return (
    <div>
      <img src={homeImgSrc} alt="property" />
      {mappedImages}
    </div>
  );
};

export default ImagesArea;
