import React from "react";

const CategoryItem = ({ title, imgSrc, description }) => {
  return (
    <div className="flex flex-col items-center">
      <img className="w-[88px] md:w-[106px]" src={imgSrc} />
      <h4 className="text-blue text-[18px] font-bold mt-[32px] mb-[16px]">
        {title}
      </h4>
      <p className="text-center body-1 ">{description}</p>
    </div>
  );
};

export default CategoryItem;
