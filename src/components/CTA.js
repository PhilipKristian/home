import React from "react";
import styled from "styled-components";

const GenericH2 = styled.h2`
  font-size: 3rem;
  font-family: Fira Sans;
  text-align: center;
  padding: ${props => (props.none ? "0" : "1.35em 0")};
  color: ${props => (props.dark ? "#4E4852" : "#ffffff")};
  border-bottom: ${props => (props.none ? "0" : "2px solid #1d9c91")};
  letter-spacing: 0.6rem;
  margin: ${props => (props.some ? "5rem 0 0 0" : "0")};
`;
const FlexBoxIndex = styled.div`
  display: flex;
  .image {
    width: ${props => (props.inverse ? "50%" : "50%")};
  }
  img {
    width: 100%;
  }
  .text__section3 {
    width: ${props => (props.inverse ? "50%" : "50%")};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const SectionThree = styled.section`
  background-color: #2b343d;
  color: #ffffff;
`;

const CTA = props => {
  return (
    <div>
      <SectionThree>
        <FlexBoxIndex>
          <div className="image">
            <img src="CTADirect.jpg" alt="CTA1" />
          </div>
          <div className="text__section3">
            <GenericH2 none>
              I want to hear from you!
              <a href="mailto:hi@philippkristian.com ">
                <GenericH2>hi@philippkristian.com</GenericH2>
              </a>
            </GenericH2>
          </div>
        </FlexBoxIndex>
        <FlexBoxIndex inverse>
          <div className="text__section3">
            <GenericH2 none>
              Book the calendar
              <a href="https://calendly.com/philippkristian">
                <GenericH2>and schedule an intro</GenericH2>
              </a>
            </GenericH2>
          </div>
          <div className="image">
            <img src="CTAAvailability.jpeg" alt="CTA2" />
          </div>
        </FlexBoxIndex>
        <FlexBoxIndex>
          <div className="image">
            <img src="CTAMedia.png" alt="CTA3" />
          </div>
          <div className="text__section3">
            <GenericH2 none>
              For media enquiries contact:
              <br />
              Lindsey Palma
            </GenericH2>
            <a href="mailto:lp@philippkristian.com ">
              <GenericH2>lp@philippkristian.com </GenericH2>
            </a>
          </div>
        </FlexBoxIndex>
      </SectionThree>
    </div>
  );
};

export default CTA;
