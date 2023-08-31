import React from "react";

const FeaturesItem = ({ imgSrc, imgAlt, titleText, mainText }) => {
  return (
    <div className="feature-item">
      <img src={imgSrc} alt={imgAlt} className="feature-icon" />
      <h3 className="feature-item-title"> {titleText}</h3>
      <p>{mainText}</p>
    </div>
  );
};

export default FeaturesItem;
