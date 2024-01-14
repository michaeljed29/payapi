import Container from "../../../../components/Container/Container";
import GhostButton from "../../../../components/Buttons/GhostButton/GhostButton";
import bitmap from "../../../../assets/bitmap.svg";
import PartnersLogo from "../../../../components/PartnersLogo/PartnersLogo";
import { colors } from "../../../../constant";
import Fade from "react-reveal/Fade";

const Partners = () => {
  return (
    <section className="partners py-[80px] sm:py-[88px] md:py-[100px]  bg-darkBlue overflow-hidden relative z-[0]">
      <Container>
        <div className="flex flex-col-reverse space-y-revers md:flex-row">
          <div className="flex-1 relative">
            <Fade>
              <div className="flex flex-col items-center md:items-start mt-[64px] md:mt-0">
                <h2 className="heading-3 text-light">Who we work with</h2>
                <p className="body-1 text-light/[.70] mt-[24px] mb-[32px] max-w-[455px] text-center md:text-left">
                  Today, millions of people around the world have successfully
                  connected their accounts to apps they love using our API. We
                  provide developers with the tools they need to create easy and
                  accessible experiences for their users.
                </p>
                <GhostButton isLight>About Us</GhostButton>
                <img
                  className="absolute block top-[-215%] md:top-[-460px] md:left-[-380px] w-[769px] max-w-none z-[-1]"
                  src={bitmap}
                />
              </div>
            </Fade>
          </div>
          <div className="flex-1">
            <Fade>
              <div className="h-full flex items-center max-w-[536px] m-auto">
                <div className="flex-1">
                  <PartnersLogo color={colors.light} />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Partners;
