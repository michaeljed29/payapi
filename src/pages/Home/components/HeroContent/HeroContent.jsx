import React from "react";
import InputButton from "../../../../components/InputButton/InputButton";
import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <div className="items-center mt-[24px] sm:mt-[48px] md:mt-0">
      <h1 className="heading-1">
        Start building with our APIs for absolutely free.
      </h1>
      <InputButton className="m-auto md:mx-0 mt-[22px] mb-[16px] md:mt-[50px]" />
      <span className="body-1 ml-0 md:ml-[27px] text-center md:text-left block">
        Have any questions?{" "}
        <Link to="/contact" className="font-bold cursor-pointer">
          Contact Us
        </Link>
      </span>
    </div>
  );
};

export default HeroContent;
