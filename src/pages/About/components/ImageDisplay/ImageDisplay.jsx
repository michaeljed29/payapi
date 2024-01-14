import React from "react";
import bitmap from "../../../../assets/bitmap.svg";

const ImageDisplay = () => {
  return (
    <section className="image-display mt-[76px] sm:mt-[92px] md:mt-[100px] mb-[48px] sm:mb-[64px] md:mb-[72px] h-[267px] md:h-[500px] relative bg-no-repeat bg-center bg-cover">
      <img
        className="hidden md:block absolute left-[-470px] top-[-30%]  z-[-1]"
        src={bitmap}
      />
    </section>
  );
};

export default ImageDisplay;
