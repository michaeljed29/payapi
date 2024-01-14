import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Ready from "../../components/Ready/Ready";
import Footer from "../../components/Footer/Footer";
import bitmap from "../../assets/bitmap.svg";
import TopContent from "./components/Header/TopContent";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";
import StatSection from "./components/StatSection/StatSection";
import MoreInfo from "./components/MoreInfo/MoreInfo";

const About = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <Container className="relative">
          <Header />
          <img
            className="absolute 
            top-[50%] 
            right-[-60%] 
            translate-y-[-80%]
            md:top-[-580px] 
            md:translate-y-0
            md:right-[-300px] z-[-1]"
            src={bitmap}
          />
        </Container>
        <TopContent />
      </div>

      <ImageDisplay />
      <StatSection />
      <MoreInfo />
      <Ready />
      <Footer />
    </>
  );
};

export default About;
