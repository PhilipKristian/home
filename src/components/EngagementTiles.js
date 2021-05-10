import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { ReadH2 } from "../styles/ReadStyles";

import img1 from "../../static/read-tile.jpg";
import img2 from "../../static/e-tile.jpg";
import img3 from "../../static/create-tile.jpg";

const media = {
  desktop: "@media(min-width: 1000px)",
};

const ETSub = styled.h2`
  font-size: 2.5rem;
  font-family: Fira Sans;
  font-weight: 400;

  padding-left: 28px;
  color: white;
  margin: ${props => (props.some ? "5rem 0 0 0" : "0")};
`;

const Tiles = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: flex-start;
${media.desktop} {
  display: flex;
  flex-flow: row nowrap;
}

}
.image1 {
background-image: url(${img1});
background-size: cover;
background-position: center;
width: 100%;
height: 250px;
}
.image2 {
  background-image: url(${img2});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 250px;
}
.image3 {
  background-image: url(${img3});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 250px;
}
`;

const EngagementTiles = props => {
  return (
    <Tiles>
      <div className="image1">
        <Link to="/read">
          <ReadH2 lessPaddingTop>Read</ReadH2>
          <ETSub>Books and Press</ETSub>
        </Link>
      </div>
      <div className="image2">
        <Link to="/experience">
          <ReadH2 lessPaddingTop>Experience</ReadH2>
          <ETSub>Keynotes and Masterclasses</ETSub>
        </Link>
      </div>
      <div className="image3">
        <Link to="/create">
          <ReadH2 lessPaddingTop>Create</ReadH2>
          <ETSub>Strategy and Foresight</ETSub>
        </Link>
      </div>
    </Tiles>
  );
};

export default EngagementTiles;
