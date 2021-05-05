import styled from "styled-components";

const ReadBanner = styled.div`
  &:after {
    content: "";
    display: block;
    height: ${props => (props.parallax ? "80vh" : "100vh")};
    width: 100%;
    background-image: url("readBg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: ${props => (props.parallax ? "fixed" : "scroll")};
  }
`;
const ReadTextWrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 35%;
  top: 70%;
  transform: translate(-50%, -50%);
  color: black;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h2 {
    font-size: 5rem;
    font-family: Playfair Display;
    opacity: 1;
    padding: 0.35em 1em;
    margin: 0;
  }
`;

export { ReadBanner, ReadTextWrapper };
