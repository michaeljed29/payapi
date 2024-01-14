import React from "react";
import Partner1 from "../Icons/Partner1";
import Partner2 from "../Icons/Partner2";
import Partner3 from "../Icons/Partner3";
import Partner4 from "../Icons/Partner4";
import Partner5 from "../Icons/Partner5";
import Partner6 from "../Icons/Partner6";

const PartnersLogo = ({ color, className }) => {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3  gap-x-[20px] gap-y-[39px] content-center items-center justify-center 
    sm:gap-x-[62px]
    "
    >
      <div className="mx-auto w-fit md:mx-0 md:justify-self-start">
        <Partner1 color={color} />
      </div>
      <div className="mx-auto w-fit md:mx-0 md:justify-self-center">
        <Partner2 color={color} />
      </div>
      <div className="mx-auto w-fit md:mx-0 md:justify-self-end">
        <Partner3 color={color} />
      </div>
      <div className="mx-auto w-fit md:mx-0 md:justify-self-start">
        <Partner4 color={color} />
      </div>
      <div className="mx-auto w-fit md:mx-0 md:justify-self-center">
        <Partner5 color={color} />
      </div>
      <div className="mx-auto w-fit md:mx-0 md:justify-self-end">
        <Partner6 color={color} />
      </div>
    </div>
  );
};

export default PartnersLogo;
