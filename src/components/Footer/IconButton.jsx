import React, { useState } from "react";
import { colors } from "../../constant";

const IconButton = ({ children }) => {
  const { lightPink, light } = colors;
  const [isHover, setIsHover] = useState(false);

  const color = isHover ? lightPink : light;

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        color,
      });
    });
  };

  return (
    <button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {renderChildren()}
    </button>
  );
};

export default IconButton;
