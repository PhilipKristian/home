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
          <img src="/Logos-WidePKD.png" alt="PKLogo" width={"200"} />
        </div>
      </Link>
    </Header>

    {children}

    <Footer />
  </div>
);
