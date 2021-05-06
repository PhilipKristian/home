import React from "react";
import styled from "styled-components";

const GenericH2 = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-family: Fira Sans;
  text-align: center;
  z-index: 2;
  line-height: 1rem;

  color: ${props => (props.dark ? "#4E4852" : "#ffffff")};
`;
const Section = styled.section`
  display: flex;
  flex-flow; row;
  color: #ffffff;
`;

const Box = styled.div`
  padding: 40px;
  width: 100%;
  height: 250px;
  background: rgb(255, 0, 133);
  background: linear-gradient(
    65deg,
    rgba(255, 0, 133, 1) 20%,
    rgba(248, 8, 8, 1) 50%
  );
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
            Book the calendar
            <a href="https://calendly.com/philippkristian">
              <GenericH2>schedule now an intro</GenericH2>
            </a>
          </GenericH2>
        </Box>
        <Box>
          <GenericH2 none>For media enquiries contact:</GenericH2>
          <GenericH2>
            <br />
            Lindsey Palma
          </GenericH2>
          <a href="mailto:lp@philippkristian.com ">
            <GenericH2>lp@philippkristian.com </GenericH2>
          </a>
        </Box>
      </Section>
    </div>
  );
};

export default CTAGradient;
