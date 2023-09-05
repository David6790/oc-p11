import React from "react";
import Layout from "../layout/Layout";
import Banner from "../component/Banner";
import FeaturesContainer from "../component/featuresSection/FeaturesContainer";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <FeaturesContainer />
    </Layout>
  );
};

export default Home;
