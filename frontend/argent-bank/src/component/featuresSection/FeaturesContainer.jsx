import React from "react";
import FeaturesItem from "./FeaturesItem";

const FeaturesContainer = () => {
  return (
    <section className="features">
      <FeaturesItem
        imgSrc={"./img/icon-chat.png"}
        imgAlt={"chat Icon"}
        titleText={"You are our #1 priority"}
        mainText={
          " Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes. "
        }
      />
      <FeaturesItem
        imgSrc={"./img/icon-money.png"}
        imgAlt={"Money Icon"}
        titleText={"More savings means higher rates"}
        mainText={
          " The more you save with us, the higher your interest rate will be!"
        }
      />
      <FeaturesItem
        imgSrc={"./img/icon-security.png"}
        imgAlt={"security Icon"}
        titleText={"Security you can trust"}
        mainText={
          "   We use top of the line encryption to make sure your data and money is always safe. "
        }
      />
    </section>
  );
};

export default FeaturesContainer;
