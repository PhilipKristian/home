import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const AboutLayout = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
padding: 40px;
}
`;
const GenereicPara = styled.p`
  text-align: center;
  padding: 30px;
  letter-spacing: ${props => (props.lessSpacing ? "0.075em" : "0.225em")};
  font-size: ${props => (props.lessSize ? "1.5rem" : "2.5rem")};
  font-family: Fira Sans;
  color: #ff0085;
  line-height: ${props => (props.lessSize ? "2rem" : "3rem")};
  color: "black";
`;

const About = props => {
  return (
    <AboutLayout>
      <div style={{ width: "50%" }}>
        <ReactPlayer
          url="https://vimeo.com/540581415 "
          loop={true}
          style={{ minWidth: "800px" }}
        />
      </div>
      <div style={{ width: "50%" }}>
        <GenereicPara>
          ‘Imagine a world where we can all trust each other. When we trust
          ourselves and others, we transform the way we collaborate, innovate
          and create. Trust leadership empowers us to become the best version of
          ourselves and humanity.’ <br /> – Philipp Kristian
        </GenereicPara>
      </div>
    </AboutLayout>
  );
};

export default About;
