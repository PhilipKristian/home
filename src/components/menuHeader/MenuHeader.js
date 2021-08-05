import React, { useState, useEffect } from "react";
import styled /* , { keyframes } */ from "styled-components";
import { Link } from "gatsby";

import { Header } from "../../styles/IndexStyles";

/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom"; */

import { debounce } from "lodash";

import { Navbar } from "../navbar";

import "./MenuHeader.css";
import background from "../../../static/CTA3.jpg";

const HeaderWrapper = styled.header`
  position: fixed;
  top: -100px;
  max-height: 70px;
  font-family: "Montserrat", sans-serif;
  z-index: 999;
  width: 100%;
  padding-top: 17px;
  padding-bottom: 6px;
  background: none;
  opacity: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  @media only screen and (max-width: 766px) {
    padding-top: 25px;
  }

  &.sticky {
    background-color: rgba(255, 255, 255, 0.93);
    opacity: 1;
    top: 0px;
    border-bottom: 1px solid gainsboro;
  }

  &.sticky.open-nav {
    max-height: 400px !important;
  }
`;

const LogoLink = styled(Link)`
  width: 50px;
  font-size: 25px;
  color: #8f8f8f;
  text-transform: uppercase;
  float: left;
  display: block;
  margin-top: 0;
  line-height: 1;
  margin-bottom: 10px;

  @media only screen and (max-width: 766px) {
    float: none;
  }
`;

/* const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-90deg);
  }
`; 

  animation-name: ${rotate};
  animation-duration: 8s;
  animation-iteration-count: 1;
*/

const MobileToggleWrapper = styled.div`
  display: none;
  cursor: pointer;
  font-size: 20px;
  position: absolute;
  right: 22px;
  top: 20px;
  width: 30px;
  -webkit-transition: all 200ms ease-in;
  -moz-transition: all 200ms ease-in;
  transition: all 200ms ease-in;
  span {
    width: 30px;
    height: 4px;
    margin-bottom: 6px;
    border-radius: 1000px;
    background: #8f8f8f;
    display: block;
  }
  @media only screen and (max-width: 766px) {
    display: block;
  }
  transform: ${props => (props.rotate ? `rotate(-90deg)` : "")};
`;

const RowWrapper = styled.div``;

function MenuHeader() {
  const [headerClassName, setHeaderClassName] = React.useState("");

  const [showHeader, setShowHeader] = React.useState(false);
  const [isOpened, setIsOpened] = React.useState(false);

  const didScrollPage = e => {
    const headerStickyOffset = 100;
    if (window.scrollY > headerStickyOffset) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", debounce(didScrollPage, 100));

    return () => {
      window.removeEventListener("keydown", didScrollPage);
    };
  }, []);

  const onClickMobileMenu = e => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    setHeaderClassName(
      `${showHeader ? "sticky" : ""} ${isOpened ? "open-nav" : ""}`
    );
  }, [isOpened, showHeader]);
  console.log("isOpened", isOpened);

  return (
    <div>
      <HeaderWrapper className={headerClassName}>
        <RowWrapper>
          <LogoLink>
            {/*  <Header> */}
            <Link to="/">
              <div className="logo">
                <img
                  className="imgLogo"
                  src="/Logos-WidePKD.png"
                  alt="PKLogo"
                />
              </div>
            </Link>
            {/*  </Header> */}
          </LogoLink>
          <MobileToggleWrapper rotate={isOpened}>
            <div onClick={onClickMobileMenu}>
              <span />
              <span />
              <span />
            </div>
          </MobileToggleWrapper>

          <nav className="nav">
            <ul>
              <li>
                <Link to="/read" className="navbar-item">
                  Read
                </Link>
              </li>
              <li>
                <Link to="/experience" className="navbar-item">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/create" className="navbar-item">
                  Create
                </Link>
              </li>
              <li>
                {/* <Link to="/about" className="navbar-item">
                  About
                </Link> */}
              </li>
            </ul>
          </nav>
        </RowWrapper>
      </HeaderWrapper>
      {/* </header> */}
      {/* <div
        className="hero"
       
        style={{
          backgroundImage: `url(${background})`,
          
          backgroundPosition: "top",
        }}
      >
        <h1>
          <span>Die Qual der Wahl</span>
          <br />
          voting
        </h1>
        <div className="mouse">
          <span />
        </div>
      </div> */}
      <div className="row content"></div>
    </div>
  );
}

export default MenuHeader;
