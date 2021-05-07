import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { GenereicPara, Header } from "../styles/IndexStyles";
import Circle from "../../static/PKC.png";

const NavbarDropdown = styled.div`
  position: relative;
  display: inline-block;
  padding-right: 48px;

  &:hover {
    display: block;
    > div {
      display: block;
    }
  }
`;
const NavbarDropdownContent = styled.div`
  display: none;
  position: absolute;
  padding-top: 30px;
  background: rgb(255, 0, 133);
  background: linear-gradient(
    65deg,
    rgba(255, 0, 133, 1) 20%,
    rgba(248, 8, 8, 1) 50%
  );
  padding: 5px;
  z-index: 1;
`;
const Navbar = () => {
  return (
    <NavbarDropdown>
      <span>
        <img src="/PKC.png" alt="Circle" width="50px" height="50px" />
      </span>
      <NavbarDropdownContent>
        <Link to="/read">
          <GenereicPara lessSize lessSpacing grey style={{ textAlign: "left" }}>
            read
          </GenereicPara>
        </Link>
        <Link to="/experience">
          <GenereicPara lessSize lessSpacing grey style={{ textAlign: "left" }}>
            experience
          </GenereicPara>
        </Link>
        <Link to="/create">
          <GenereicPara lessSize lessSpacing grey style={{ textAlign: "left" }}>
            Create
          </GenereicPara>
        </Link>
      </NavbarDropdownContent>
    </NavbarDropdown>
  );
};

export default Navbar;
