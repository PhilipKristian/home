import styled from "styled-components"

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
`
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
`
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
`
export { Banner, TextWrapper, MoreText }
