import styled from "styled-components";
import imgA from "../../static/readBg.png";

const media = {
  desktop: "@media(min-width: 1000px)",
};

const ReadBanner = styled.div`
  &:after {
    content: "";
    display: block;
    height: ${props => (props.parallax ? "80vh" : "100vh")};
    width: 100%;
    background-image: url(${imgA});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: ${props => (props.parallax ? "fixed" : "scroll")};
  }
`;
const ReadBannerA = styled.div`
  &:after {
    content: "";
    display: block;
    height: ${props => (props.parallax ? "60vh" : "80vh")};
    width: 100%;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: ${props => (props.parallax ? "fixed" : "scroll")};
  }
`;
const ReadH2 = styled.h2`
  font-size: 5rem;
  font-family: Fira Sans;
  padding-top: ${props => (props.lessPaddingTop ? "20%" : "25%")};
  padding-left: 28px;
  color: White;
  margin: ${props => (props.some ? "5rem 0 0 0" : "0")};
`;
const ReadTextWrapper = styled.div`
  position: absolute;
  z-index: 1;
  padding-left: 40px;
  top: 65%;
  color: black;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const ReadTextWrapperH2 = styled.h2`
  font-size: 2rem;
  font-family: Playfair Display;
  opacity: 1;
  padding: 0.35em 1em;
  margin: 0;
  ${media.desktop} {
    font-size: 4rem;
  }
}
`;
const GenereicParaRead = styled.p`
  text-align: left;
  font-family: Fira Sans;
  font-weight: 100;
  font-size: 20px;
  color: #080c50;
`;
const ReadSection = styled.section`
  background-color: ${props => (props.white ? "#ffffff" : "#21b2a6")};
  /* margin-top: ${props => (props.less ? "30px" : "50px")};
  margin-bottom: ${props => (props.lessM ? "30px" : "50px")}
  padding: ${props => (props.lessP ? "3rem 0" : "2rem 0")}; */
  div {
    width: ${props => (props.fullSize ? "100%" : "66%")};
    margin: ${props => (props.lessMargin ? "20px" : "42px")};
  }
  h5 {
    color: #080c50;
    font-size: 2.5rem;
    font-family: Playfair Display;
    margin-bottom: 62px;
    margin-top: 31px;
    text-align: left;
  }
  h3 {
    color: black;
    font-size: 3rem;
    font-family: Playfair Display;
    margin-bottom: ${props => (props.less ? "50px" : "25px")}
    text-align: left;
  }
  h2 {
    color: grey;
    font-size: 1.5rem;
    font-family: Playfair Display;
    color: #080c50;
    margin-bottom: 70px;
    
  }
  a {
    background: rgb(255, 0, 133);
    background: linear-gradient(
      65deg,
      rgba(255, 0, 133, 1) 20%,
      rgba(248, 8, 8, 1) 50%
    );
    box-shadow: none;
    color: #ffffff;
    border-radius: 100px;
    font-family: Fira Sans;
    border: 0;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 2.8rem 0.8rem;
    text-align: left;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

export {
  ReadBanner,
  ReadBannerA,
  ReadTextWrapper,
  ReadTextWrapperH2,
  GenereicParaRead,
  ReadH2,
  ReadSection,
};
