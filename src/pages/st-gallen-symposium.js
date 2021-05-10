import React from "react";
import Layout from "../components/layout";
import EngagementTiles from "../components/EngagementTiles";
import About from "../components/About";
import CTAGradient from "../components/CTAGradient";
import { Link } from "gatsby";
import {
  ReadBannerA,
  GenereicParaRead,
  ReadSection,
} from "../styles/ReadStyles";
import { GenereicPara } from "../styles/IndexStyles";

const stGallenSymposium = () => {
  return (
    <Layout>
      <section style={{ position: "relative" }}>
        <ReadBannerA img={"/readC.png"}></ReadBannerA>
      </section>
      <ReadSection white lessM>
        <div>
          <h5 style={{ margineBottom: "31px" }}>
            ‘Thanks so much for coming and sharing your wisdom. <br />
            People like you will continue to inspire us!’
            <br /> – CEO, Providend Fund
          </h5>
          <h5 style={{ margineBottom: "31px" }}>
            How the Trust Economy Could Benefit Us All <br /> (St. Gallen
            Symposium)
          </h5>
          <GenereicParaRead>
            Trust matters: Why Exiting This Crisis Will Require a New Mindset
            Centered Around Trust
          </GenereicParaRead>
          <GenereicParaRead lessSize grey>
            Economists have argued (and proven) for decades that trust is the
            pivotal ingredient to economic and social wellbeing.
            <br />
            Many business leaders ignored this until recent years. Digital
            disruption by purpose-driven start-ups with agile cultures, fun work
            environments and cutting-edge products finally changed that dynamic.
            <br />
            The innovation economy – and with it, the trust economy – is simply
            too important to ignore.
          </GenereicParaRead>
          <GenereicParaRead lessSize grey>
            Between the author’s first exposure to digital trust a good decade
            ago and now, the topic has risen to global importance. Linking the
            concepts of trust and transformation made it evident that in order
            to change, innovate or evolve, the new direction had to become
            trusted in order to happen. This is how trust became a leadership
            conversation. In 2020, the St. Gallen Symposium jumped on the trust
            bandwagon for its annual symposium topic, which was subsequently
            postponed to 2021. Of course, it made sense to draw on the deep
            expertise of a global trust and innovation keynote speaker to anchor
            the chosen topic, Trust Matters.
          </GenereicParaRead>
          <GenereicParaRead lessSize grey style={{ paddingBottom: "30px" }}>
            In this special format, the Forum was designed to run as a live
            in-person event in Singapore with livestreamed virtual sessions from
            St. Gallen and New York. Prior to the event, the organizing
            committee invited leading global voices and keynote speakers on
            trust to provide a briefing to frame the topic Trust Matters and
            make it tangible. The commissioned article contributed fundamentally
            to the 2021 St. Gallen Symposium on Trust Matters in Singapore.{" "}
            <br />
            It outlined mission-critical topics in view of the global COVID-19
            pandemic, and offered a pragmatic yet optimistic outlook for
            humanity. Of course, the St. Gallen Symposium made sure to invite
            Philipp Kristian as a special guest in celebrating this occasion and
            the global importance of trust.
          </GenereicParaRead>
          <Link to="https://www.symposium.org/articles/how-trust-economy-could-benefit-us-all">
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

export default stGallenSymposium;
