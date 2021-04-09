import React, { Component } from "react"
import { Link } from "gatsby"
import { Banner, TextWrapper, MoreText } from "../styles/IndexStyles"

export default () => (
  <div style={{ position: "relative" }}>
    <Banner></Banner>
    <TextWrapper>
      <div>
        <h2>EUJURIKA</h2>
        <p>One Stop for All your development And design needs </p>
        <Link to="/works">MY WORK</Link>
      </div>
    </TextWrapper>
    <MoreText>Learn more about me</MoreText>
  </div>
)
