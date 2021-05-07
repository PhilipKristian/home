import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import EngagementTiles from "../components/EngagementTiles";
import {
  ReadBannerA,
  GenereicParaRead,
  ReadSection,
} from "../styles/ReadStyles";

const trustEconomy = () => {
  return (
    <Layout>
      <section style={{ position: "relative" }}>
        <ReadBannerA img={"/readB.png"}></ReadBannerA>
      </section>
      <ReadSection white>
        <div>
          <h5>
            The Trust Economy – <br /> How Digital Technology is Transforming
            Trust and Creating Social and Business Innovation
          </h5>
          <GenereicParaRead lessSize grey>
            Over the past decade, one of the most revolutionary changes in our
            global economy has been the creation of trusted digital
            intermediaries.
            <br />
            These platforms allow us – as individuals and as businesses – to
            exchange value with one another in new and better ways.
            <br />
            We are experiencing a modern relationship renaissance, enabled by
            technology and powered by trust.
            <br />
            But not everyone has succeeded equally.
          </GenereicParaRead>
          <GenereicParaRead lessSize grey>
            The Trust Economy introduces a world-first structured model for
            building trust in six progressive stages. <br />
            Whatever industry you’re in, whatever the size of your business, the
            trust model will set you on the path to reaping the most value from
            the opportunities and challenges of the digital age.
          </GenereicParaRead>
        </div>
        <div>
          <Link to="https://www.marshallcavendish.com/our-books/categories/books/the-trust-economy-p9789814751667">
            Read it
          </Link>
        </div>
      </ReadSection>
      <EngagementTiles />
    </Layout>
  );
};

export default trustEconomy;
