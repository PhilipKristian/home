import React from "react";

import styled from "styled-components";

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

const Footer = props => {
  return <FooterWrapper>{props.children}</FooterWrapper>;
};

export { Footer };
