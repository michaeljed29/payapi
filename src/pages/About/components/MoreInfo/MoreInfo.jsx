import React from "react";
import Container from "../../../../components/Container/Container";
import Info from "../Info/Info";
import Fade from "react-reveal/Fade";

const MoreInfo = () => {
  return (
    <section>
      <Container className="md:max-w-[920px]">
        <div className="mt-[65px]">
          <Fade>
            <Info
              label="The Culture"
              description="We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title."
            />
          </Fade>

          <Fade>
            <Info
              className="mt-[56px]"
              label="The People"
              description="We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills."
            />
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default MoreInfo;
