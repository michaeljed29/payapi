import Container from "../../../../components/Container/Container";
import TwoPhones from "../../../../assets/images/two-phones.png";
import bitmap from "../../../../assets/bitmap.svg";
import Fade from "react-reveal/Fade";

const SimpleUI = () => {
  return (
    // <section className="py-[150px] bg-[url('./src/assets/images/bitmap3.png')] bg-no-repeat bg-right bg-[length:auto_769px]">
    <section className="py-[80px] sm:py-[100px] md:py-[150px] overflow-hidden">
      <Container>
        <div className="flex md:flex-row flex-col-reverse items-center">
          <div className="flex-1">
            <Fade>
              <div className="mt-[48px] md:mt-0">
                <h2 className="heading-3 mb-[24px] text-center md:text-left">
                  Simple UI & UX
                </h2>
                <p className="body-1 max-w-[612px] md:max-w-[445px] text-center md:text-left">
                  Our pre-built form is easy to integrate in your app or
                  website’s checkout flow and designed to optimize conversion.
                </p>
              </div>
            </Fade>
          </div>
          <div className="flex-1 relative">
            <Fade>
              <img
                className="max-w-[328px] sm:max-w-[362px] md:max-w-[566px] padded-img"
                src={TwoPhones}
              />
              <img
                className="absolute hidden md:block top-[-150px] left-[320px] w-[769px] max-w-none z-[-1]"
                src={bitmap}
              />
            </Fade>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SimpleUI;
