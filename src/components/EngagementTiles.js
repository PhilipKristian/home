import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { ReadH2 } from "../styles/ReadStyles";

import img1 from "../../static/read-tile.jpg";
import img2 from "../../static/e-tile.jpg";
import img3 from "../../static/create-tile.jpg";

const Tiles = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
padding-top: 40px;
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
          <ReadH2>Read</ReadH2>
        </Link>
      </div>
      <div className="image2">
        <Link to="/experience">
          <ReadH2>Experience</ReadH2>
        </Link>
      </div>
      <div className="image3">
        <Link to="/create">
          <ReadH2>create</ReadH2>
        </Link>
      </div>
    </Tiles>
  );
};

export default EngagementTiles;
