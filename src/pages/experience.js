import React from "react";
import Layout from "../components/Layout";
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
        <ReadBannerA color img={"/TEDx.jpg"}></ReadBannerA>
      </section>
      <ReadSection white less more>
        <div>
          <h5>
            ‘Your presentation caused a real mind shift for many as we all
            contemplate and plan for our Vision 2030. Your message set the tone
            for the conference, and we received fantastic reviews of your
            performance from everyone!’
            <h2>
              – Chief Executive Officer, Business Process Enabling South Africa
            </h2>
          </h5>
        </div>

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
        <div>
          <h5>TRUST</h5>
          <GenereicParaRead>
            <h2>Introduction to trust economy and digital trust revolution</h2>{" "}
            <br />
            - Navigating intergenerational leadership dynamics <br />
            - New normal, future of work and digital leadership <br />
            - Organisational purpose and ESG driving change for good <br />
            - Values driven leadership and stakeholder management <br />
          </GenereicParaRead>
        </div>
        <div>
          <h5>INNOVATE</h5>
          <GenereicParaRead>
            <h2>
              Imagine your future (because we all dream of a better world!){" "}
            </h2>{" "}
            <br />- A global new normal and post-pandemic reset (based on RESET){" "}
            <br />- Trends, foresight and disruptive shifts from a human
            futurist lens <br />- Innovation, digital transformation and future
            value propositions <br />- Open data economy, global privacy
            revolution, data trust strategy <br />- Nurturing start-up
            ecosystems and strategic digital partnerships <br />
            - Amplifying digital customer experience stickiness with behaviour
            design <br />
            - New customer insight generation, product and service design
            thinking <br />
            - Digital by default, interface revolution and digital business
            design <br />
          </GenereicParaRead>
        </div>
        <div>
          <h5>CHANGE </h5>
          <GenereicParaRead>
            <h2>
              Transform your reality (because making it happen is everything!){" "}
            </h2>{" "}
            - Translating agile transformation into everyday agility - <br />
            - Redesigning organisational structures for the digital age - <br />
            - Understanding change management and cultural transformation -{" "}
            <br />
            - Sustaining innovation momentum with ongoing engagement - <br />
            - Transforming corporate and board governance <br />
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
