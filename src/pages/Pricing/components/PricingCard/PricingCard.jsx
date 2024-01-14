import React from "react";
import checkIcon from "../../../../assets/check.svg";
import GhostButton from "../../../../components/Buttons/GhostButton/GhostButton";

const Item = ({ children, isIncluded }) => {
  const colorStyle = isIncluded ? "text-blue" : "text-blue/[.40]";

  return (
    <li className="flex items-center">
      <div className="w-[36px]">{isIncluded && <img src={checkIcon} />}</div>
      <span className={`flex-1 ${colorStyle} font-[15px] leading-[28px]`}>
        {children}
      </span>
    </li>
  );
};

const PricingCard = ({ offer }) => {
  return (
    <div>
      <h4 className="heading-4 text-darkPink text-center md:text-left">
        {offer.title}
      </h4>
      <p className="body-1 mt-[16px] mb-[16px] text-center md:text-left">
        {offer.description}
      </p>
      <h2 className="heading-2 text-center md:text-left">{offer.price}</h2>
      <ul className="flex flex-col space-y-[8px] py-[24px] px-[80px] sm:px-[44px] md:px-0 border-t-[1px] border-b-[1px] border-blue/[.25] my-[24px]">
        {offer.items.map((item) => (
          <Item isIncluded={item.isIncluded}>{item.text}</Item>
        ))}
      </ul>
      <div className="text-center md:text-left">
        <GhostButton>Request Access</GhostButton>
      </div>
    </div>
  );
};

export default PricingCard;
