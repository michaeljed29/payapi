import React from "react";
import Container from "../Container/Container";
import InputButton from "../InputButton/InputButton";
import Fade from "react-reveal/Fade";

const Ready = () => {
  return (
    <section className="py-[80px] sm:py-[96px]">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Fade>
            <h1 className="heading-3">Ready to start?</h1>
          </Fade>
          <Fade>
            <InputButton className="mt-[40px] md:mt-0" />
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Ready;
