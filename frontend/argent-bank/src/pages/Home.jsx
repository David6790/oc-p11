import React from "react";
import Layout from "../layout/Layout";
import Banner from "../component/Banner";
import FeaturesContainer from "../component/featuresSection/FeaturesContainer";
import { useSelector } from "react-redux";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.user.userLoggedIn);
  return (
    <Layout>
      <Banner />
      <FeaturesContainer />
      {isLoggedIn ? <p>connecté ! </p> : <p>pas connecté</p>}
    </Layout>
  );
};

export default Home;
