import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import ReactPlayer from "react-player";

import Layout from "../components/layout";

import {
  SectionThree,
  GenericH2,
  ImgWrapper,
  ImgBox,
  ImgMeta,
} from "../styles/IndexStyles";

export default function Index() {
  return (
    <Layout>
      <SectionThree>
        {/*     <ImgWrapper>
          {clients.map((client, index) => {
            console.log("index", index);
            //client 1  index 0   0 / 2 = 0 (+ 1) -> row = 1, 0 % 2 = 0 (+ 1) col = 1 
            //client 2  index 1   1 / 2 = 0 (+ 1) -> row = 1, 1 % 2 = 1 (+ 1) col = 2 
            //client 3  index 2   2 / 2 = 1 (+ 1) -> row = 2, 2 % 2 = 0 (+ 1) col = 1 
            //client 4  index 3   3 / 2 = 1 (+ 1) -> row = 2, 3 % 2 = 1 (+ 1) col = 2 
            const r = index / 2 + 1;
            const c = (index % 2) + 1;
            return (
              <ImgBox row={r} col={c} height="600px" key={client.id}>
                <Link
                  to={"/clients/" + client.frontmatter.slug}
                  key={client.id}
                  style={{ width: "100%", height: "100%" }}
                >
                  <Img
                    fluid={client.frontmatter.thumb.childImageSharp.fluid}
                    style={{ width: "100%", height: "100%", zIndex: 1 }}
                    objectFit="cover"
                  />

                  <ImgMeta>
                    <GenericH2
                      style={{
                        position: "relative",
                        top: "70%",
                      }}
                    >
                      <h2>TITLE</h2>
                    </GenericH2>
                  </ImgMeta>
                </Link>
              </ImgBox>
            );
          })}
        </ImgWrapper> */}
      </SectionThree>
    </Layout>
  );
}
