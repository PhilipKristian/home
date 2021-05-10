import React from "react";
import Layout from "../components/layout";
import EngagementTiles from "../components/EngagementTiles";
import About from "../components/About";
import CTAGradient from "../components/CTAGradient";

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
      <ReadSection white style={{ padding: "10px" }}>
        <div>
          <h5>
            ‘Philipp is a rare talent. Vision, deep thinking, insight,
            connectedness and confident execution. He’s proven all’
            <h2>– Walter de Oude, Group CEO, Singlife</h2>
          </h5>
        </div>
        <div>
          <GenereicParaRead lessSize grey>
            Work with Philipp Kristian in resolving pressing business challenges
            and capture big-ticket opportunities with you and your organisation.
            Achieve exponential progress, get deep insights into current issues
            and develop transformational solutions together.
          </GenereicParaRead>
          <GenereicParaRead lessSize grey>
            You’ll have access to a network of C-level trailblazers and
            entrepreneurs across verticals. Explore venture capital and venture
            building avenues to fuel the most radical ideas.
            <br />
            Finding start-ups to build, partner or buy becomes a breeze. Think
            big consulting, lightning-fast results, without the usual overheads.
          </GenereicParaRead>
        </div>
      </ReadSection>
      <EngagementTiles />
      <About />
      <CTAGradient />
    </Layout>
  );
};

export default reset;
