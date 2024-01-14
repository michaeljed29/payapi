import Container from "../Container/Container";
import logoWhite from "../../assets/logo-white.svg";
import Navigation from "../Navigation/Navigation";
import LinkedInIcon from "./LinkedInIcon";
import TwitterIcon from "./TwitterIcon";
import FacebookIcon from "./FacebookIcon";
import IconButton from "./IconButton";
import bitmap from "../../assets/bitmap.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-[41px] sm:py-[32px] bg-darkBlue text-light relative overflow-hidden">
      <Container className="relative z-0">
        <div className="flex flex-col space-y-[40px] sm:space-y-0 sm:flex-row items-center">
          <Link to="/">
            <img src={logoWhite} />
          </Link>

          <Navigation isLight />
          <div className="flex space-x-[24px] ml-0 sm:ml-auto">
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </div>
        </div>
        <img
          className="absolute top-[-100px] right-[-500px] z-[-1]"
          src={bitmap}
        />
      </Container>
    </footer>
  );
};

export default Footer;
