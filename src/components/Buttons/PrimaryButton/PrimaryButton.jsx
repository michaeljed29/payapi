import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({
  children,
  className = "",
  link = "",
  isFullWidth,
}) => {
  const widthStyle = isFullWidth ? "w-full" : "w-auto";

  return (
    <Link
      className={`bg-darkPink text-center hover:bg-lightPink transition-all ease-in-out duration-[0.2s] 
      text-white py-[13px] px-[26px] cursor-pointer ${className} text-[15px] rounded-[24px] font-bold inline-block
      ${widthStyle}
      `}
      to={link}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
