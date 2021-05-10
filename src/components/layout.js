import React from "react";
import { Link } from "gatsby";

import Navbar from "./NavDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../components/Footer";

import {
  Header,
  GenericH2,
  GenereicPara,
  Logo,
  LogoImg,
  FlexBoxIndex,
} from "../styles/IndexStyles";

export default ({ children }) => (
  <div>
    <Header>
      <Link to="/">
        <div className="logo">
          <img src="/Logos-WidePKD.png" alt="PKLogo" width={"200"} />
        </div>
      </Link>
      {/* <Navbar /> */}
      {/* <div className="menu_items">
        <Link to="/read">
          <GenereicPara lessSize lessSpacing grey>
            Read
          </GenereicPara>
        </Link>
        <Link to="/experience">
          <GenereicPara lessSize lessSpacing grey>
            Experience
          </GenereicPara>
        </Link>
        <Link to="/create">
          <GenereicPara lessSize lessSpacing grey>
            Create
          </GenereicPara>
        </Link>
      </div> */}
    </Header>
    {children}
    <Footer>
      <div
        style={{
          backgroundColor: "#080c50",
          width: "100%",
          display: "flex",
          height: "120px",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingLeft: "20px",
        }}
      >
        <a href="https://twitter.com/philippkristian">
          <FontAwesomeIcon
            icon={faTwitter}
            size="2x"
            fixedWidth
            color="white"
          />
        </a>
        <a href="https://sg.linkedin.com/in/philippkristian?trk=public_profile_browsemap_profile-result-card_result-card_full-click">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            fixedWidth
            color="white"
          />
        </a>
        <a href="mailto:hi@philippkristian.com) ">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            fixedWidth
            color="white"
          />
        </a>
      </div>
      <div
        style={{
          backgroundColor: "#080c50",
          width: "100%",
          display: "flex",
          height: "120px",
          fontFamily: "Fira Sans Condensed",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <p style={{ fontSize: "12px" }}>
          When we say we value your privacy, we absolutely do. This website
          works without cookies
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#080c50",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          fontFamily: "Fira Sans Condensed",
          fontSize: "12px",
          alignItems: "center",
          height: "120px",
          color: "white",
          paddingRight: "20px",
        }}
      >
        <span>
          &copy;{" "}
          <Link to="/privacy" style={{ color: "white" }}>
            2021 Philipp Kristian
          </Link>
        </span>
      </div>
    </Footer>
    {/*     <Footer>
      <div>
        <div className="icons">
          <a href="https://twitter.com/philippkristian">
            <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth />
          </a>
          <a href="https://sg.linkedin.com/in/philippkristian?trk=public_profile_browsemap_profile-result-card_result-card_full-click">
            <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth />
          </a>
          <a href="mailto:hi@philippkristian.com) ">
            <FontAwesomeIcon icon={faEnvelope} size="2x" fixedWidth />{" "}
          </a>
        </div>
        <div>
          <div className="copyright">
            <span>
              &copy;{" "}
              <Link to="/privacy" style={{ color: "white" }}>
                2021 | Philipp Kristian
              </Link>
            </span>
          </div>
          <div className="copyright">
            <p style={{ fontSize: "10px" }}>
              When we say we value your privacy, we absolutely do. This website
              works without cookies
            </p>
          </div>
        </div>
      </div>
    
    </Footer> */}
  </div>
);
