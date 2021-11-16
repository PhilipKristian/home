import React from "react";
import { Link } from "gatsby";

import Navbar from "./NavDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "./Footer";

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
          <img className="imgLogo" src="/logoNew.png" alt="PKLogo" />
        </div>
      </Link>
    </Header>

    {children}

    <Footer />
  </div>
);
