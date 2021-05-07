import React from "react";
import { Link } from "gatsby";

import Navbar from "./NavDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  Header,
  Footer,
  GenericH2,
  GenereicPara,
  Logo,
  LogoImg,
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
      {/*       <div className="icons">
        <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth />
        <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth />

        <a href="mailto:hi@philippkristian.com) ">
          <h2 style={{ fontSize: "small" }}>
            <FontAwesomeIcon icon={faEnvelope} size="1x" fixedWidth />{" "}
            hi@philippkristian.com
          </h2>
        </a>
      </div>
      <div className="copyright">
        <span>
          &copy;{" "}
          <Link to="/privacy" style={{ color: "white" }}>
            2021 | Philipp Kristian
          </Link>
        </span>
      </div> */}
    </Footer>
  </div>
);
