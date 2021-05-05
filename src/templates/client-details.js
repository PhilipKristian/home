import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import EngagementTiles from "../components/EngagementTiles";
import * as styles from "../styles/client-details.module.css";
import {
  GenericH2,
  GenericH3,
  ImgBox,
  ImgMeta,
  DetailsSection,
  GenereicParaAbout,
  GenericDetail,
  SectionFour,
  GenereicPara,
} from "../styles/IndexStyles";
import { ReadSection, GenereicParaRead } from "../styles/ReadStyles";

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark;
  const { title, hover, clientDetail } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <section style={{ position: "relative" }}>
        <div className={styles.clientDetail}>
          <ImgBox>
            <Img fluid={clientDetail.childImageSharp.fluid} />
            <ImgMeta>
              <GenericH2
                style={{
                  position: "relative",
                  top: "85%",
                  left: "1%",
                  fontSize: "20px",
                }}
              >
                {hover}
              </GenericH2>
            </ImgMeta>
          </ImgBox>
        </div>
      </section>
      <DetailsSection>
        <ReadSection white>
          <h5>{title}</h5>
          <GenereicParaAbout>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </GenereicParaAbout>
        </ReadSection>
        {/* <SectionFour>
          <div className="grid__section4">
            <Link to="/read">
              <div className="item1" style={{ backgroundColor: "#080c50" }}>
                <div className="flex__section4">
                  <GenericH2 none>read</GenericH2>
                </div>
              </div>
            </Link>
            <Link to="/experience">
              <div className="item1" style={{ backgroundColor: "#f80808" }}>
                <div className="flex__section4">
                  <GenericH2 none>Experience </GenericH2>
                </div>
              </div>
            </Link>
            <Link to="/create">
              <div className="item1" style={{ backgroundColor: "#ff0085" }}>
                <div className="flex__section4">
                  <GenericH2 none>Create</GenericH2>
                </div>
              </div>
            </Link>
          </div>
        </SectionFour> */}
      </DetailsSection>
      <EngagementTiles />
    </Layout>
  );
}

export const query = graphql`
  query ClientsDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        hover
        clientDetail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
