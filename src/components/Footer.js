import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const media = {
  desktop: "@media(min-width: 1000px)",
};

const FooterWrapper = styled.footer`
  background-color: "#080c50";
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: center;
  ${media.desktop} {
    display: flex;
    flex-flow: row;
  }
`;

const FooterDiv1 = styled.div`
  background-color: #080c50;
  width: 100%;
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  ${media.desktop} {
    justify-content: flex-start;
    height: 120px;
  }
`;
const FooterDiv2 = styled.div`
  background-color: #080c50;
  width: 100%;
  display: flex;
  height: 60px;
  color: white;
  text-align: center;
  font-family: Fira Sans Condensed;
  font-size: 8px;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  ${media.desktop} {
    justify-content: flex-start;
    height: 120px;
  }
`;
const FooterDiv3 = styled.div`
  background-color: #080c50;
  width: 100%;
  display: flex;
  height: 60px;
  color: white;
  font-family: Fira Sans Condensed;
  font-size: 12px;
  justify-content: center;
  align-items: center;

  ${media.desktop} {
    justify-content: flex-end;
    font-size: 12px;
    height: 120px;
    padding-right: 20px;
  }
`;

const Footer = props => {
  return (
    <FooterWrapper>
      <FooterDiv1>
        <a href="https://twitter.com/philippkristian">
          <FontAwesomeIcon
            icon={faTwitter}
            size="3x"
            fixedWidth
            color="white"
            style={{ margin: "10px" }}
          />
        </a>
        <a href="https://sg.linkedin.com/in/philippkristian?trk=public_profile_browsemap_profile-result-card_result-card_full-click">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="3x"
            fixedWidth
            color="white"
            style={{ margin: "10px" }}
          />
        </a>
        <a href="mailto:hi@philippkristian.com) ">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="3x"
            fixedWidth
            color="white"
            style={{ margin: "10px" }}
          />
        </a>
      </FooterDiv1>

      <FooterDiv2>
        <p style={{ fontSize: "12px" }}>
          When we say we value your privacy, we absolutely do. This website
          works without cookies
        </p>
      </FooterDiv2>

      <FooterDiv3>
        <span>
          &copy;{" "}
          <Link to="/privacy" style={{ color: "white" }}>
            2021 Philipp Kristian
          </Link>
        </span>
      </FooterDiv3>
    </FooterWrapper>
  );
};

export { Footer };
