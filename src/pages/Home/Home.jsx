import React from "react";
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";
import Implement from "./components/Implement/Implement";
import SimpleUI from "./components/SimpleUI/SimpleUI";
import Category from "./components/Category/Category";
import Ready from "../../components/Ready/Ready";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Implement />
      <SimpleUI />
      <Category />
      <Ready />
      <Footer />
    </>
  );
};

export default Home;
