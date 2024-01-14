import React from "react";
import Section from "../../../../components/Section/Section";
import Container from "../../../../components/Container/Container";
import ImplementImg from "../../../../assets/images/implement.png";
import Fade from "react-reveal/Fade";

const Implement = () => {
  return (
    <Section className="pt-[80px] sm:pt-[100px] md:pt-[150px] pb-[0px]">
      <Container>
        <div className="flex items-center flex-col md:flex-row ">
          <Fade>
            <img
              className="max-w-[328px] sm:max-w-[390px] md:max-w-none padded-img"
              src={ImplementImg}
            />
          </Fade>
          <div className="mt-[48px] md:mt-0 ml-0 md:ml-[125px]">
            <Fade>
              <h2 className="heading-3 mb-[24px] text-center md:text-left">
                Easy to implement
              </h2>
              <p className="body-1 max-w-[612px] md:max-w-[445px] text-center md:text-left">
                Our API comes with just a few lines of code. You’ll be up and
                running in no time. We built our documentation page to integrate
                payments functionality with ease.
              </p>
            </Fade>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Implement;
