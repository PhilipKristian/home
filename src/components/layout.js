import React from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import {
  Header,
  Footer,
  GenericH2,
  GenereicPara,
  Logo,
} from "../styles/IndexStyles";

export default ({ children }) => (
  <div>
    <Header>
      <Link to="/">
        <div className="logo">
          <img
            src="Logos-WidePKD.png"
            alt="PKLogo"
            width={"70%"}
            style={{ paddingTop: "30px" }}
          />
        </div>
      </Link>
      <div className="menu_items">
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
      </div>
    </Header>
    {children}
    <Footer>
      <div className="icons">
        <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth />
        <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth />
      </div>
      <div className="copyright">
        <span>&copy; 2021 | Philipp Kristian </span>
      </div>
    </Footer>
  </div>
);
