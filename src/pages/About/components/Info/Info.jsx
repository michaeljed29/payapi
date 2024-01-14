import React from "react";

const Info = ({ label, description, className }) => {
  return (
    <div className={`flex justify-between flex-col sm:flex-row ${className}`}>
      <h4 className="heading-4 mb-[16px] text-center sm:text-left md:mb-[16px]">
        {label}
      </h4>
      <div>
        <p className="body-1 max-w-none sm:max-w-[456px] md:max-w-[645px] text-center sm:text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Info;
