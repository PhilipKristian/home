import styled, { keyframes } from "styled-components";

const GenereicPara = styled.p`
  text-transform: uppercase;
  text-align: center;
  letter-spacing: ${props => (props.lessSpacing ? "0.075em" : "0.225em")};
  font-size: ${props => (props.lessSize ? "1.5rem" : "2.5rem")};
  line-height: ${props => (props.lessSize ? "2rem" : "3rem")};
  color: ${props => (props.grey ? "white" : "#ffffff")};
`;

const GenericH2 = styled.h2`
  font-size: 3rem;
  padding: ${props => (props.none ? "0" : "1.35em 0")};
  color: #ffffff;
  border-bottom: ${props => (props.none ? "0" : "2px solid #ed4933")};
  text-transform: uppercase;
  letter-spacing: 0.6rem;
  margin: ${props => (props.some ? "5rem 0 0 0" : "0")};
`;

const Banner = styled.div`
  &:after {
    content: "";
    display: block;
    height: ${props => (props.parallax ? "80vh" : "100vh")};
    width: 100%;
    background-image: ${props =>
      props.different ? "url('developer.jpg')" : "url('banner.jpg')"};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: ${props => (props.parallax ? "fixed" : "scroll")};
    filter: grayscale(100%) blur(2px);
  }
`;
const TextWrapper = styled.div`
   {
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    h2 {
      font-size: 5rem;
      opacity: 1;
      padding: 0.35em 1em;
      border-top: 2px solid white;
      border-bottom: 2px solid white;
      text-transform: uppercase;
      margin: 0;
    }
    a {
      background-color: #ed4933;
      box-shadow: none;
      color: #ffffff;
      border-radius: 3px;
      border: 0;
      cursor: pointer;
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 0.225em;
      padding: 1.8rem 0.8rem;
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
`;

const MoreText = styled.div`
  position: absolute;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.225em;
  font-weight: 600;
  font-size: 1.2rem;
  z-index: 1;
  left: 50%;
  bottom: 10%;
  transform: translate(-50%, -50%);
  &:after {
    content: "";
    display: block;
    height: 2rem;
    width: 2rem;
    left: 50%;
    position: absolute;
    margin: 1em 0 0 -0.75em;
    background-image: url("arrow.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const SectionTwo = styled.section`
  background-color: grey;
  text-align: center;
  padding: 10rem 0;
  div {
    width: 66%;
    margin: 0 auto;
  }

  h5 {
    font-size: 1.4rem;
    line-height: 2rem;
    color: #ffffff;
    border-bottom: 2px solid #ed4933;
    font-weight: 800;
    letter-spacing: 0.225em;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
    margin-bottom: 5rem;
  }
`;
const SectionThree = styled.section`
  background-color: #2b343d;
  color: #ffffff;
`;
const FlexBoxIndex = styled.div`
  display: flex;
  .image {
    width: ${props => (props.inverse ? "60%" : "40%")};
  }
  img {
    width: 100%;
  }
  .text_section3 {
    width: ${props => (props.inverse ? "40%" : "60%")};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const SectionFour = styled.section`
  background-color: grey;
  color: #ffffff;
  text-align: center;
  .header_section4 {
    width: 66%;
    margin: 0 auto;
  }
  .title_section4 {
    font-size: 3rem;
    padding: 1.35em 0;
    color: #ffffff;
    border-bottom: 2px solid #ed4933;
    text-transform: uppercase;
    letter-spacing: 0.225em;
    margin: 0;
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const MyAnimation = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 45px;
  border: 10px solid;
  border-radius: 50%;
  border-color: #ed4933 #ed493330;
  animation: 1.5s ${spin} infinite;
`;

/* // Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`; */

export {
  Banner,
  TextWrapper,
  MoreText,
  MyAnimation,
  SectionTwo,
  SectionThree,
  SectionFour,
  GenereicPara,
  GenericH2,
  FlexBoxIndex,
};
