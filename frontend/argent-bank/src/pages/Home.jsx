import React from "react";
import Layout from "../layout/Layout";
import Banner from "../component/Banner";
import FeaturesContainer from "../component/featuresSection/FeaturesContainer";
import UseCookies from "../Cookies/UseCookies";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <FeaturesContainer />
      <UseCookies />
    </Layout>
  );
};

export default Home;
