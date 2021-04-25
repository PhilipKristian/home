import React from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { Header, Footer, GenericH2, GenereicPara } from "../styles/IndexStyles";

export default ({ children }) => (
  <div>
    <Header>
      <GenericH2 none>
        <Link to="/" style={{ color: "white" }}>
          Philipp Kristian
        </Link>
      </GenericH2>
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
      <div class="icons">
        <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth />
        <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth />
      </div>
      <div class="copyright">
        <span>&copy; 2021 | Philipp Kristian </span>
      </div>
    </Footer>
  </div>
);
