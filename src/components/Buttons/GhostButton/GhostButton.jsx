import React from "react";

const GhostButton = ({
  children,
  className = "",
  isLight = false,
  onClick,
  isDisabled = false,
}) => {
  const style = isDisabled
    ? "text-blue/[.30] border-blue/[.30] pointer-events-none"
    : isLight
    ? "text-light border-light hover:bg-light hover:text-blue"
    : "text-blue border-blue hover:bg-blue hover:text-light";

  return (
    <a
      isDisabled={isDisabled}
      onClick={onClick}
      className={`inline-block text-center transition-all ease-in-out duration-[0.2s] bg-transparent py-[12px] border-solid border-[1px]  px-[26px] cursor-pointer font-bold text-[15px] rounded-[24px] ${style} ${className} `}
    >
      {children}
    </a>
  );
};

export default GhostButton;
