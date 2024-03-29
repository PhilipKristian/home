import React from "react";
import Layout from "../components/Layout";
import EngagementTiles from "../components/EngagementTiles";
import About from "../components/About";
import CTAGradient from "../components/CTAGradient";
import { Link } from "gatsby";
import {
  ReadBannerA,
  GenereicParaRead,
  ReadSection,
} from "../styles/ReadStyles";

const reset = () => {
  return (
    <Layout>
      <section style={{ position: "relative" }}>
        <ReadBannerA img={"/readA.png"}></ReadBannerA>
      </section>
      <ReadSection white>
        <div>
          <h5>
            ‘Philipp is one of the most impressive visionaries I have had the
            pleasure of working with. He is exceptionally skilled at the human
            element of innovation. Brilliant.’
            <h2>– Head of Innovation, Manulife Philippines</h2>
          </h5>
          <h5>
            RESET <br /> Rethinking our World and Creating a Different Future{" "}
          </h5>

          <GenereicParaRead lessSize lessM grey>
            Everybody has a plan — until they don’t. Approaching the dawn of a
            new decade, global sentiment in the 2020s was brimming with
            optimism. We would embrace the future of work, transform digitally,
            learn to live and breathe agility, and defeat climate change at
            scale.
          </GenereicParaRead>
          <GenereicParaRead lessSize grey>
            The pandemic forced us to adapt markedly in the short term. Its
            long-term effects will be even more profound. Much of the
            transformation happening now has been long overdue. We’re
            approaching a global turning point. This is our opportunity to
            finally realise pivotal changes we always knew mattered.
          </GenereicParaRead>
          <GenereicParaRead lessSize grey>
            It’s time we reach beyond the obvious. The new normal presents a
            valuable opportunity to question deeper and more pervasively the way
            things are. Big changes can become catalysts for a better world.
            What might that world be like?
          </GenereicParaRead>
          <GenereicParaRead lessSize grey style={{ marginBottom: "20px" }}>
            This is the story of how the 2020s will change modern humanity
            forever. Let’s rewrite our future together.
          </GenereicParaRead>
        </div>
        <div>
          <Link to="https://www.worldscientific.com/worldscibooks/10.1142/12023">
            Read it
          </Link>
        </div>
      </ReadSection>
      <EngagementTiles />
      <About />
      <CTAGradient />
    </Layout>
  );
};

export default reset;
