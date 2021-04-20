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
          EUJURIKA
        </Link>
      </GenericH2>
      <div className="menu_items">
        <Link to="/works">
          <GenereicPara lessSize lessSpacing grey>
            Works
          </GenereicPara>
        </Link>
        <Link to="/about">
          <GenereicPara lessSize lessSpacing grey>
            About
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
        <span>&copy; 2021, Eujurika | </span>
        <span> Made with ❤️ and ☕️ in Bremen </span>
      </div>
    </Footer>
  </div>
);
