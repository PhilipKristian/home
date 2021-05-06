import React from "react";
import Layout from "../components/Layout";
import EngagementTiles from "../components/EngagementTiles";
import CTA from "../components/CTA";
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
        <ReadBannerA color img={"/TEDx.jpg"}></ReadBannerA>
      </section>
      <ReadSection white less more>
        <h5>
          ‘Your presentation caused a real mind shift for many as we all
          contemplate and plan for our Vision 2030. Your message set the tone
          for the conference, and we received fantastic reviews of your
          performance from everyone!’
          <h2>
            – Chief Executive Officer, Business Process Enabling South Africa
          </h2>
        </h5>

        <div>
          <GenereicParaRead lessSize grey>
            Engage Philipp Kristian to deliver a transformational keynote
            speech, panel discussion, workshop, masterclass, facilitated C-Suite
            discussion and boardroom advisory session.
          </GenereicParaRead>
          <GenereicParaRead lessSize grey>
            Choose from a consummate range of highly relevant topics. Your
            session will be wholly bespoke to you and your audience. You can
            also draw upon thousands of content hours delivered successfully
            with clients, virtually and in-person.
            <br />
            This content impacted audiences of hundreds of thousands of people
            globally, and counting.
          </GenereicParaRead>
          <GenereicParaRead lessSize grey>
            Expect original content all the way. Pick your areas of interest and
            you’ll receive a keynote narrative bespoke to your brief and
            audience.
            <br />
            All combinations of topics and durations are possible. Longer-form
            sessions over 120mins are best spun into custom virtual or in-person
            masterclasses.
          </GenereicParaRead>
        </div>
      </ReadSection>
      <EngagementTiles />
      <CTAGradient />
    </Layout>
  );
};

export default reset;
