import React, { Component } from "react";
import { Link } from "gatsby";
import {
  Banner,
  TextWrapper,
  MoreText,
  MyAnimation,
} from "../styles/IndexStyles";

export default () => (
  <div style={{ position: "relative" }}>
    <Banner></Banner>
    <TextWrapper>
      <div>
        <MyAnimation />
        <h2>EUJURIKA</h2>
        <p>
          One Stop for All <br />
          your development <br />
          And design needs{" "}
        </p>
        <Link to="/works">MY WORK</Link>
      </div>
    </TextWrapper>
    <MoreText>Learn more about me</MoreText>
  </div>
);

/* const index = () => (
  <div style={{ position: "relative" }}>
    <Banner></Banner>
    <TextWrapper>
      <div>
        <h2>EUJURIKA</h2>
        <p>
          One Stop for All <br />
          your development <br />
          And design needs{" "}
        </p>
        <Link to="/works">MY WORK</Link>
      </div>
    </TextWrapper>
    <MoreText>Learn more about me</MoreText>
  </div>
);

export { index }; */
