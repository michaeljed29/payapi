import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`px-[10px] sm:max-w-[689px] md:max-w-[1130px] m-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
