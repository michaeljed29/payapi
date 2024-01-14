import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import PricingCard from "./components/PricingCard/PricingCard";
import Ready from "../../components/Ready/Ready";
import Footer from "../../components/Footer/Footer";
import bitmap from "../../assets/bitmap.svg";
import Fade from "react-reveal/Fade";

const Pricing = () => {
  const data = [
    {
      title: "Free Plan",
      description:
        "Build and test using our core set of products with up to 100 API  requests",
      price: "$0.00",
      items: [
        { text: "Transactions", isIncluded: true },
        { text: "Auth", isIncluded: true },
        { text: "Identify", isIncluded: true },
        { text: "Investments", isIncluded: false },
        { text: "Assets", isIncluded: false },
        { text: "Liabilities", isIncluded: false },
        { text: "Income", isIncluded: false },
      ],
    },
    {
      title: "Basic Plan",
      description:
        "Launch your project with unlimited requests and no contractual minimums",
      price: "$249.00",
      items: [
        { text: "Transactions", isIncluded: true },
        { text: "Auth", isIncluded: true },
        { text: "Identify", isIncluded: true },
        { text: "Investments", isIncluded: true },
        { text: "Assets", isIncluded: true },
        { text: "Liabilities", isIncluded: false },
        { text: "Income", isIncluded: false },
      ],
    },
    {
      title: "Premium Plan",
      description:
        "Get tailored solutions, volume pricing, and dedicated support for your team",
      price: "$499.00",
      items: [
        { text: "Transactions", isIncluded: true },
        { text: "Auth", isIncluded: true },
        { text: "Identify", isIncluded: true },
        { text: "Investments", isIncluded: true },
        { text: "Assets", isIncluded: true },
        { text: "Liabilities", isIncluded: true },
        { text: "Income", isIncluded: true },
      ],
    },
  ];

  return (
    <>
      <div className="pricing-container relative overflow-hidden">
        <Container className="relative">
          <Header />
          <img
            className="absolute 
            top-[50%] 
            right-[-60%] 
            translate-y-[-80%]
            md:top-[-580px] 
            md:translate-y-0
            md:right-[-300px] z-[-1]"
            src={bitmap}
          />
        </Container>

        <div className="mt-[48px] sm:mt-[75px] md:mt-[82px]">
          <Container>
            <Fade>
              <h2 className="heading-2 text-center md:text-left">Pricing</h2>
            </Fade>

            <div className="flex flex-col sm:flex-row space-y-[48px] sm:space-y-0 space-x-0 sm:space-x-[10px] md:space-x-[30px] mt-[69px] md:mt-[72px]">
              <div className="flex-1">
                <Fade>
                  <PricingCard offer={data[0]} />
                </Fade>
              </div>
              <div className="flex-1">
                <Fade>
                  <PricingCard offer={data[1]} />
                </Fade>
              </div>
              <div className="flex-1">
                <Fade>
                  <PricingCard offer={data[2]} />
                </Fade>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Ready />
      <Footer />
    </>
  );
};

export default Pricing;
