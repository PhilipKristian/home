import React from "react";
import styled from "styled-components";

const media = {
  desktop: "@media(min-width: 1000px)",
};

const GenericH2 = styled.h2`
  font-size: 2rem;
  font-family: Fira Sans;
  text-align: center;
  z-index: 2;

  color: ${props => (props.dark ? "#4E4852" : "#ffffff")};
  ${media.desktop} {
    font-size: 3rem;
  }
`;
const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: "center";
  color: #ffffff;
  ${media.desktop} {
    display: flex;
    flex-flow: row nowrap;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 0, 133);
  background: linear-gradient(
    65deg,
    rgba(255, 0, 133, 1) 20%,
    rgba(248, 8, 8, 1) 50%
  );
  ${media.desktop} {
    height: 250px;
  }
`;
const BoxBlue = styled.div`
  width: 100%;
  height: 250px;

  background: rgb(8, 12, 80);
  background: linear-gradient(
    65deg,
    rgba(8, 12, 80, 0.7917542016806722) 35%,
    rgba(8, 12, 80, 0.5872724089635855) 50%
  ); ;
`;

const CTAGradient = props => {
  return (
    <div>
      <Section>
        <Box>
          <GenericH2 none>
            I want to hear from you!
            <a href="mailto:hi@philippkristian.com ">
              <GenericH2>hi@philippkristian.com</GenericH2>
            </a>
          </GenericH2>
        </Box>
        <Box>
          <GenericH2 none>
            <a href="https://calendly.com/philippkristian">
              <GenericH2>Schedule an intro </GenericH2>
            </a>
            <a href="mailto:lv@philippkristian.com">
              <GenericH2>Keynote speaking availability </GenericH2>
            </a>
          </GenericH2>
        </Box>
        <Box>
          <GenericH2 none>
            For media enquiries contact:
            <a href="mailto:lp@philippkristian.com ">
              <GenericH2>lp@philippkristian.com </GenericH2>
            </a>
          </GenericH2>
        </Box>
      </Section>
    </div>
  );
};

export default CTAGradient;
