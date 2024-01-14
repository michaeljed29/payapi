import React from "react";

const Stat = ({ label, count }) => {
  return (
    <div
      className="py-[16px] text-center border-t-0 border-b-0 border-blue/[.25]
    sm:text-left  sm:border-t-[1px] sm:border-b-[1px]
    "
    >
      <span
        className="body-1 block text-[16px] text-blue/[.70] mb-[16px]
      sm:mb-[5px]"
      >
        {label}
      </span>
      <h2 className="heading-2 text-darkPink text-[48px]">{count}</h2>
    </div>
  );
};

export default Stat;
