import Container from "../../../../components/Container/Container";
import Header from "../../../../components/Header/Header";
import HeroContent from "../HeroContent/HeroContent";
import Phone from "../../../../assets/images/phone.png";
import bitmap from "../../../../assets/bitmap.svg";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <div className="hero relative overflow-hidden z-[1] pb-[80px] sm:pb-[100px] md:pb-[75px]">
      <Container>
        <Header />
      </Container>

      <Container>
        <div className="flex flex-col-reverse items-center md:mt-[74px] mt-[48px] md:flex-row">
          <div className="flex-1">
            <Fade>
              <HeroContent />
            </Fade>
          </div>
          <div className="flex-1 flex justify-center relative">
            <Fade>
              <img
                className="max-w-[128px] sm:max-w-[159px] md:max-w-[263px]"
                src={Phone}
              />
            </Fade>
            <img
              className="absolute max-w-none z-[-1]
                md:top-[-315px] md:left-[50px] md:translate-x-0 md:translate-y-0
                sm:top-[50%] sm:left-[50%] translate-x-[-50%] translate-y-[-100%]
                top-[50%] left-[50%]
              "
              src={bitmap}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
