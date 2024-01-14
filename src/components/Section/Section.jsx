import React from "react";

const Section = ({ children, className }) => {
  return <section className={`py-[75px] ${className}`}>{children}</section>;
};

export default Section;
