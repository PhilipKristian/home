import React from "react";
import Layout from "../components/Layout";
import EngagementTiles from "../components/EngagementTiles";
import About from "../components/About";

import {
  ReadBannerA,
  GenereicParaRead,
  ReadSection,
} from "../styles/ReadStyles";

const reset = () => {
  return (
    <Layout>
      <section style={{ position: "relative" }}>
        <ReadBannerA color img={"/Create-Detail.png"}></ReadBannerA>
      </section>
      <ReadSection white style={{ margin: "100px", padding: "10px" }}>
        <h5>
          ‘Philipp is a rare talent. Vision, deep thinking, insight,
          connectedness and confident execution. He’s proven all’ – Walter de
          Oude, Group CEO, Singlife
        </h5>
        <div>
          <GenereicParaRead lessSize grey>
            Work with Philipp Kristian in resolving pressing business challenges
            and capture big-ticket opportunities with you and your organisation.
            <br />
            Achieve exponential progress, get deep insights into current issues
            and develop transformational solutions together.
          </GenereicParaRead>
          <GenereicParaRead lessSize grey>
            You’ll have access to a network of C-level trailblazers and
            entrepreneurs across verticals.
            <br />
            Explore venture capital and venture building avenues to fuel the
            most radical ideas.
            <br />
            Finding start-ups to build, partner or buy becomes a breeze. Think
            big consulting, lightning-fast results, without the usual overheads.
          </GenereicParaRead>
        </div>
      </ReadSection>
      <EngagementTiles />
      <About />
    </Layout>
  );
};

export default reset;
