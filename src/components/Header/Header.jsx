import React from "react";
import Logo from "./../../assets/payapiLogo.svg";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import close from "../../assets/close.svg";
import burger from "../../assets/burger.svg";

const Header = () => {
  const closeNavBar = () => {
    const nav = document.querySelector(".main-nav");
    nav.classList.remove("open");
  };

  const openNavBar = () => {
    const nav = document.querySelector(".main-nav");
    nav.classList.add("open");
  };

  return (
    <header className="mt-[40px]">
      <Container>
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} />
          </Link>
          <img
            className="block md:hidden ml-auto cursor-pointer"
            onClick={openNavBar}
            src={burger}
          />
          <div
            className="main-nav flex flex-1 translate-x-[100%] transition-all ease-in duration-[0.3s] fixed w-[80vw] pt-[48px] px-[24px] right-0 top-0 bottom-0 bg-darkBlue flex-col items-center z-10
            md:pt-0 md:px-0 md:flex-row md:static md:bg-transparent md:translate-x-0
            
          "
          >
            <div className="block md:hidden w-full border-b-[1px] border-light/[.15] pb-[24px]">
              <img
                className="ml-auto cursor-pointer"
                src={close}
                onClick={closeNavBar}
              />
            </div>

            <Navigation />
            <PrimaryButton
              className="md:ml-auto w-full md:w-auto"
              link="/contact"
            >
              Schedule a Demo
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
