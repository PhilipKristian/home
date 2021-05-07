import styled, { keyframes } from "styled-components";

const media = {
  desktop: "@media(min-width: 1000px)",
};

const Header = styled.header`
  z-index: 30;
  font-family: Playfair Display;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.01);
  color: white;
  padding: 3rem 0;
  }
  .menu_items {
    display: flex;
  }
  .menu_items > * {
    margin-right: 1rem;
  }
  .logo {
    display: inline-block;
    padding-top: 10px;
    padding-left: 16px;
  }
  ${media.desktop} {
    .logo {
      padding-top: 20px;
      padding-left: 36px;
    }
`;

const LogoImg = styled.img`
  width: 200;
`;

const GenereicPara = styled.p`
  text-transform: uppercase;
  text-align: center;
  padding-right: 50px;
  font-family: Fira Sans;
  font-weight: bold;
  font-size: ${props => (props.lessSize ? "1.5rem" : "2.5rem")};
  line-height: ${props => (props.lessSize ? "2rem" : "3rem")};
  color: ${props => (props.grey ? "white" : "#ffffff")};
`;

const GenericH2 = styled.h2`
  font-size: 4rem;
  font-family: Fira Sans;
  padding: ${props => (props.none ? "0" : "0.5em 0")};
  color: #ffffff;
  margin: ${props => (props.some ? "5rem 0 0 0" : "0")};
`;

const Banner = styled.div`
  &:after {
    z-index: 20;
    content: "";
    display: block;
    height: ${props => (props.parallax ? "80vh" : "100vh")};
    width: 100%;
    background: rgb(255,0,133);
    background: linear-gradient(65deg, rgba(255,0,133,1) 20%, rgba(248,8,8,1) 50%);
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

const SectionTwo = styled.div`
  justify-content: center;
  .player-wrapper {
    position: relative;
   /*  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */ */
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const SectionThree = styled.section`
  background-color: #2b343d;
  color: #ffffff;
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  ${media.desktop} {
    display: flex;
    flex-flow: row nowrap;
  }
`;

const ImgWrapper = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  ${media.desktop} {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.height};
  z-index: 1;
  background-size: cover;
  background-color: blue;
`;

const ImgMeta = styled.div`
  position: absolute;
  padding: 30px;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const VideoMeta = styled.div`
  position: absolute;
  z-index: 2;
  top: 53%;
  right: 0;
  bottom: 0;
  left: 20%;
`;

const FlexBoxIndex = styled.div`
  display: flex;
  .image {
    width: 50%;
  }
  img {
    width: 100%;
    height: ${props => (props.parallax ? "55vh" : "75vh")};
  }
  .text_section3 {
    display: flex;
    z-index: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const SectionFour = styled.section`
  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  .grid__section4 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    padding: 1rem 0;
  }
  .grid__section4 > * {
    padding: 3rem;
  }
  .flex__section4 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  .flex__section4 > h2 {
    margin-left: 1rem;
  }
`;

const Footer = styled.footer`
  background-color: #080c50;
  font-family: Fira Sans;
  display: flex;
  height: 120px;
  padding: 30px;
  justify-content: space-between;
  .icons > * {
    cursor: pointer;
    margin-right: 1rem;
    color: white;
  }
  .copyright {
    color: white;
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-top: 1rem;
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

/* STYLES FOR DETAILS  */

const DetailsSection = styled.div`
  &:after {
    content: "";
    display: block;
    height: "80vh";
    width: 100%;
    background-image: ${props =>
      props.different
        ? "url('Showreel21Still.png')"
        : "url('Showreel21Still.png')"};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: ${props => (props.parallax ? "fixed" : "scroll")};
  }
`;

const GenericDetail = styled.h3`
  font-size: 2rem;
  font-family: Playfair Display;
  padding: ${props => (props.none ? "0" : "1.35em 0")};
  color: black;
  text-align: center;
  letter-spacing: 0.6rem;
  margin: 0;
`;
const GenereicParaAbout = styled.p`
  text-align: left;
  font-family: Fira Sans;
  color: #080c50;
  font-size: 18px;
  line-height: 2.5rem;
  h2 {
    text-align: left;
  }
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
  ImagesWrapper,
  ImgWrapper,
  ImgMeta,
  ImgBox,
  FlexBoxIndex,
  SectionFour,
  GenereicPara,
  GenericH2,
  GenericDetail,
  GenereicParaAbout,
  Header,
  Footer,
  DetailsSection,
  VideoMeta,
  LogoImg,
};
