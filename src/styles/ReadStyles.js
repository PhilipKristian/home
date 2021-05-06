import styled from "styled-components";
import imgA from "../../static/readBg.png";

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
  padding-top: 25%;
  padding-left: 20px;
  color: White;
  text-transform: uppercase;
  letter-spacing: 0.6rem;
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
  h2 {
    font-size: 4rem;
    font-family: Playfair Display;
    opacity: 1;
    padding: 0.35em 1em;
    margin: 0;
  }
`;
const GenereicParaRead = styled.p`
  text-align: left;
  font-family: Fira Sans;

  font-size: 18px;
  color: ${props => (props.grey ? "#4E4852" : "#ffffff")};
`;
const ReadSection = styled.section`
  background-color: ${props => (props.white ? "#ffffff" : "#21b2a6")};
  text-align: left;
  margin-top: ${props => (props.less ? "30px" : "50px")};
  margin-bottom: 50px;
  padding: ${props => (props.more ? "3rem 0" : "2rem 0")};
  div {
    width: 90%;
    margin: 62px;
  }
  h5 {
    color: black;
    font-size: 2.5rem;
    font-family: Playfair Display;
    margin: 62px;
    text-align: left;
  }
  h3 {
    color: black;
    font-size: 3rem;
    font-family: Playfair Display;
    margin-bottom: 50px;
    text-align: left;
  }
  h2 {
    color: grey;
    font-size: 2rem;
    font-family: Playfair Display;
    padding-left: 80px;
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
`;

export {
  ReadBanner,
  ReadBannerA,
  ReadTextWrapper,
  GenereicParaRead,
  ReadH2,
  ReadSection,
};
