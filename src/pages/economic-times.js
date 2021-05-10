import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
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
        <ReadBannerA img={"/readD.jpg"}></ReadBannerA>
      </section>
      <ReadSection white>
        <div>
          <h5>
            ‘Great intelligence at the service of creative ideas, all
            served blindly fast’
            <h2>– Executive Director, FutureBrand</h2>
          </h5>
          <h5>Trust is the World’s Most Impactful Economic Power</h5>
          <GenereicParaRead lessSize grey>
            Economics is a social science. Keynote speakers on leadership and
            trust rarely touch on this, but they should.
            <br />
            After all, the economy is about people. For their annual flagship
            marketing festival Star Flow, the Times of India and its parent
            company, Bennett Coleman and Co, sought after global keynote
            speakers and marketing thought leaders to speak about the future of
            marketing innovation and transformation.
          </GenereicParaRead>
          <GenereicParaRead lessSize grey>
            The client took a keen interest in the role of trust in this, as
            brand marketing and brand strategy rely on trust first and foremost.
            In line with this, the group’s various media outlets offered
            extensive coverage on people and perspectives represented at the
            event.
            <br />
            This included a feature in Economic Times, exploring the role of
            trust as the world’s most profound (and perhaps underestimated)
            economic power.
            <br />
            The various stories from the festival generated further follow-on
            media coverage with and for Philipp Kristian, including articles in
            Business Insider on how brands should approach strategy for engaging
            their audiences in the digital age.
          </GenereicParaRead>
        </div>
        <div>
          <Link to="https://brandequity.economictimes.indiatimes.com/news/industry/philipp-kristian-diekhoner-trust-is-worlds-most-impactful-economic-power/74235908">
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
