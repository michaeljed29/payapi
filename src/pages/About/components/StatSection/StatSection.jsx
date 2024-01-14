import Container from "../../../../components/Container/Container";
import Stat from "../Stat/Stat";
import Fade from "react-reveal/Fade";

const StatSection = () => {
  return (
    <Container>
      <div
        className="flex border-y-[1px] py-[10px] flex-col space-x-0 mb-[48px] border-blue/[.25]
        sm:flex-row sm:space-x-[30px] sm:border-y-0 sm:py-0 sm:mb-[72px]
      "
      >
        <div className="flex-1">
          <Fade>
            <Stat label="Team Members" count="300+" />
          </Fade>
        </div>
        <div className="flex-1">
          <Fade>
            <Stat label="Offices in the US" count="3" />
          </Fade>
        </div>
        <div className="flex-1">
          <Fade>
            <Stat label="Transactions Analyzed" count="10M+" />
          </Fade>
        </div>
      </div>
    </Container>
  );
};

export default StatSection;
