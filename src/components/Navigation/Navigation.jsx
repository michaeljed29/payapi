import { Link } from "react-router-dom";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

const NavItem = ({ children, isLight, link = "/" }) => {
  const navStyle = isLight
    ? "sm:text-light/[.70] sm:hover:text-light"
    : "sm:text-blue/[.70] sm:hover:text-blue";

  return (
    <li className="cursor-pointer">
      <Link
        className={`transition-all ease-in-out duration-[0.2s] text-[15px] font-bold ${navStyle}`}
        to={link}
      >
        {children}
      </Link>
    </li>
  );
};

const Navigation = ({ isLight }) => {
  const items = [
    {
      text: "Pricing",
      link: "/pricing",
    },
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Contact",
      link: "/contact",
    },
  ];

  return (
    <nav className="ml-0 md:ml-[64px] flex  items-center justify-between">
      <ul className="flex sm:flex-row sm:space-x-[40px]">
        {items.map((item) => (
          <NavItem isLight={isLight} link={item.link}>
            {item.text}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
