import React from "react";

import Layout from "../components/Layout";
import SingleImage from "../components/SingleImage";

import { ImagesWrapper, SectionThree } from "../styles/IndexStyles";

import {
  ReadBanner,
  ReadTextWrapper,
  ReadTextWrapperH2,
} from "../styles/ReadStyles";

import image01 from "../../static/readA.png";
import image02 from "../../static/readB.png";
import image03 from "../../static/readC.png";
import image04 from "../../static/readD.jpg";

const clients = [
  {
    source: image01,
    title: "RESET ",
    link: "../reset",
  },
  {
    source: image02,
    title: "The Trust Economy",
    link: "../trust-economy",
  },
  {
    source: image03,
    title: "",
    link: "../../st-gallen-symposium",
  },
  {
    source: image04,
    title: "Economic Times",
    link: "../economic-times",
  },
];

export default function Index({ client }) {
  return (
    <Layout>
      <section style={{ position: "relative" }}>
        <ReadBanner></ReadBanner>
        <ReadTextWrapper>
          <div>
            <ReadTextWrapperH2>
              "One of the most creative yet astute thinkers <br />I have ever
              met in many years as an investor and entrepreneur." <br />–
              Co-Founder, Circles.Life
            </ReadTextWrapperH2>
          </div>
        </ReadTextWrapper>
      </section>
      <SectionThree>
        <div>
          <ImagesWrapper>
            <SingleImage client={clients[0]} />
            <SingleImage client={clients[1]} />
          </ImagesWrapper>
          <ImagesWrapper>
            <SingleImage client={clients[2]} />
            <SingleImage client={clients[3]} />
          </ImagesWrapper>
        </div>
      </SectionThree>
    </Layout>
  );
}
