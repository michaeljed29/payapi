import Container from "../../../../components/Container/Container";
import Info from "../Info/Info";
import Fade from "react-reveal/Fade";

const TopContent = () => {
  return (
    <div className="mt-[48px] md:mt-[82px]">
      <Container className="md:max-w-[920px]">
        <Fade>
          <h2 className="heading-2 max-w-[573px] md:max-w-[670px] m-auto md:m-0 text-center md:text-left">
            We empower innovators by delivering access to the financial system
          </h2>
        </Fade>

        <div className="mt-[54px] md:mt-[65px]">
          <Fade>
            <Info
              label="Our Vision"
              description="Our main goal is to build beautiful consumer experiences
              along with developer-friendly infrastructure. The result is
              an intelligent tool that gives everyone the ability to
              create amazing products that solve big problems. We are
              deeply focused on democratizing financial services through
              technology."
            />
          </Fade>
          <Fade>
            <Info
              className="mt-[64px] md:mt-[56px]"
              label="Our Business"
              description="  At the core of our platform is the technical infrastructure
          APIs that connect consumers. Our innovative product provides
          key insights for businesses and individuals, as well as
          robust reporting for traditional financial institutions and
          developers."
            />
          </Fade>
        </div>
      </Container>
    </div>
  );
};

export default TopContent;
