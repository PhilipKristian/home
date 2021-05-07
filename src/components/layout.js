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
      <div className="icons">
        <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth />
        <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth />
        <h2 style={{ fontSize: "small" }}>
          {" "}
          <FontAwesomeIcon icon={faPhone} size="1x" fixedWidth /> +65 8950 9822
        </h2>
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
      </div>
    </Footer>
  </div>
);
