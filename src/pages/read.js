import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import ReactPlayer from "react-player";

import Layout from "../components/Layout";
import SingleImage from "../components/SingleImage";

import {
  Banner,
  TextWrapper,
  MoreText,
  ImagesWrapper,
  SectionTwo,
  SectionThree,
  SectionFour,
  FlexBoxIndex,
  GenereicPara,
  GenericH2,
  ImgWrapper,
  ImgBox,
  ImgMeta,
} from "../styles/IndexStyles";

import { ReadBanner, ReadTextWrapper } from "../styles/ReadStyles";

import image01 from "../../static/readA.png";
import image02 from "../../static/readB.png";
import image03 from "../../static/readC.png";
import image04 from "../../static/readD.jpg";

const clients = [
  {
    source: image01,
    title: "RESET (World Scientific Publishing) ",
  },
  {
    source: image02,
    title: "The Trust Economy",
  },
  {
    source: image03,
    title: "How the Trust Economy Could Benefit Us All ",
  },
  {
    source: image04,
    title: "Economic Times",
  },
];

export default function Index({ client }) {
  return (
    <Layout>
      <section style={{ position: "relative" }}>
        <ReadBanner></ReadBanner>
        <ReadTextWrapper>
          <div>
            <h2>
              ‘One of the most creative yet astute thinkers I have ever met in
              many years as an investor and entrepreneur.’
              <br /> – Co-Founder, Circles.Life{" "}
            </h2>
          </div>
        </ReadTextWrapper>
      </section>
      <SectionThree>
        {clients.map(client => {
          return (
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
          );
        })}
      </SectionThree>
    </Layout>
  );
}
