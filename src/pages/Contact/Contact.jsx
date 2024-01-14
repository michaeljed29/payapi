import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Ready from "../../components/Ready/Ready";
import Footer from "../../components/Footer/Footer";
import bitmap from "../../assets/bitmap.svg";
import PartnersLogo from "../../components/PartnersLogo/PartnersLogo";
import Form from "./Form/Form";
import { ToastContainer } from "react-toastify";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <Container className="relative">
          <Header />
          <img
            className="absolute   top-[50%] 
            right-[-60%] 
            translate-y-[-80%]
            md:top-[-580px] 
            md:translate-y-0
            md:right-[-300px] z-[-1]"
            src={bitmap}
          />
        </Container>
        <div className="mt-[75px] md:mt-[82px]">
          <Container>
            <h2 className="heading-2 m-auto md:mx-0 max-w-[465px] md:max-w-[670px] mb-[60px] md:mb-[52px] text-center md:text-left">
              <Fade>Submit a help request and we’ll get in touch shortly.</Fade>
            </h2>

            <div className="flex flex-col md:flex-row items-center md:items-center space-x-0 md:space-x-[125px] space-y-[64px] md:space-y-0">
              <div className="max-w-[445px]">
                <Fade>
                  <Form />
                </Fade>
              </div>

              <div className="flex-1 w-full">
                <Fade>
                  <div className="max-w-[541px] m-auto">
                    <h5 className="heading-5 mb-[40px] text-blue/[0.75] max-w-[445px] text-center md:text-left mx-auto md:mx-0">
                      Join the thousands of innovators already building with us
                    </h5>
                    <div className="max-w-[541px]">
                      <PartnersLogo className="" />
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <ToastContainer />
      <Ready />
      <Footer />
    </>
  );
};

export default Contact;
