import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import ReactPlayer from "react-player";
import EngagementTiles from "../components/EngagementTiles";

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
  VideoMeta,
} from "../styles/IndexStyles";

/* import image01 from "../../static/PandG.jpg";
import image02 from "../../static/Daimler.jpg"; */
/* import image03 from "../../static/Deloitte.jpg";
import image04 from "../../static/facebook.jpg";
import image05 from "../../static/Microsoft.jpg";
import image06 from "../../static/Salesforce.jpg";
import image07 from "../../static/BMWi.jpg";
import image08 from "../../static/Prudential.jpg"; */

const clients = [
  /*   {
    source: image01,
    title: "P&G",
  },
  {
    source: image02,
    title: "Daimler",
  }, */
  /*   {
    source: image03,
    title: "Deloitte",
  },
  {
    source: image04,
    title: "Facebook",
  },
  {
    source: image05,
    title: "Microsoft",
  },
  {
    source: image06,
    title: "Salesforce",
  },
  {
    source: image07,
    title: "BMWi",
  },
  {
    source: image08,
    title: "Prudential",
  }, */
];

export default function Index({ data }) {
  const clients = data.clients.nodes;
  console.log(clients[0].frontmatter.thumb.childImageSharp.fluid);
  const contact = data.contact.siteMetadata.contact;
  return (
    <Layout>
      {/* <section style={{ position: "relative" }}>
        <Banner></Banner>
        <TextWrapper>
          <div>
            <GenereicPara>
              Trust makes our complex world simple. <br /> Make it yours to
              lead, transform and innovate.
            </GenereicPara>
          </div>
        </TextWrapper>
        <MoreText>Learn more </MoreText>
      </section> */}

      <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <ReactPlayer
          url="https://vimeo.com/531560161"
          style={{ position: "absolute", top: "0", left: "0" }}
          playing={true}
          loop={true}
          width="100%"
          height="100%"
          light="/pk01.png"
        />
      </div>

      <SectionThree>
        <ImgWrapper>
          {clients.map((client, index) => {
            console.log("index", index);
            /* client 1  index 0   0 / 2 = 0 (+ 1) -> row = 1, 0 % 2 = 0 (+ 1) col = 1 */
            /* client 2  index 1   1 / 2 = 0 (+ 1) -> row = 1, 1 % 2 = 1 (+ 1) col = 2 */
            /* client 3  index 2   2 / 2 = 1 (+ 1) -> row = 2, 2 % 2 = 0 (+ 1) col = 1 */
            /* client 4  index 3   3 / 2 = 1 (+ 1) -> row = 2, 3 % 2 = 1 (+ 1) col = 2 */
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
                        top: "85%",
                      }}
                    >
                      {client.frontmatter.title}
                    </GenericH2>
                  </ImgMeta>
                </Link>
              </ImgBox>
            );
          })}
        </ImgWrapper>

        {/* {clients.map(client => {
          return (

           <Link to={"/clients/" + client.frontmatter.slug} key={client.id}>
              <GenericH2>{client.frontmatter.title}</GenericH2>
              <Img fluid={client.frontmatter.thumb.childImageSharp.fluid} />
            </Link>
          );

          {
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          }

          <Link to={"/clients/" + clients.frontmatter.slug} key={clients.id}>
            <GenericH2>{clients.frontmatter.title}</GenericH2>
            <ImagesWrapper>
              <Img fluid={clients.frontmatter.thumb.childImageSharp.fluid} />
            </ImagesWrapper>
          </Link>
        })} */}

        {/*  <ImagesWrapper>
          <SingleImage client={clients[2]} />
          <SingleImage client={clients[3]} />
        </ImagesWrapper>
        <ImagesWrapper>
          <SingleImage client={clients[4]} />
          <SingleImage client={clients[5]} />
        </ImagesWrapper>
        <ImagesWrapper>
          <SingleImage client={clients[6]} />
          <SingleImage client={clients[7]} />
        </ImagesWrapper> */}
        {/* <FlexBoxIndex></FlexBoxIndex> */}
        {/*   <FlexBoxIndex>
        <div className="image">
          <img src="Deloitte.jpg" alt="Deloitte" />
        </div>
        <div className="image">
          <img src="facebook.jpg" alt="facebook" />
        </div>
      </FlexBoxIndex>
      <FlexBoxIndex>
        <div className="image">
          <img src="Microsoft.jpg" alt="Microsoft" />
        </div>
        <div className="image">
          <img src="Salesforce.jpg" alt="Salesforce" />
        </div>
      </FlexBoxIndex>
      <FlexBoxIndex>
        <div className="image">
          <img src="BMWi.jpg" alt="BMWi" />
        </div>
        <div className="image">
          <img src="Prudential.jpg" alt="Prudential" />
        </div>
      </FlexBoxIndex> */}
      </SectionThree>
      <EngagementTiles />
    </Layout>
  );
}

// export page query

export const query = graphql`
  query ClientsPage {
    clients: allMarkdownRemark {
      nodes {
        frontmatter {
          title
          hover
          slug
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
        phone
      }
    }
  }
`;
