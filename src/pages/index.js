import React, { Component } from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
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
} from "../styles/IndexStyles";

import image01 from "../../static/PandG.jpg";
import image02 from "../../static/Daimler.jpg";
import image03 from "../../static/Deloitte.jpg";
import image04 from "../../static/facebook.jpg";
import image05 from "../../static/Microsoft.jpg";
import image06 from "../../static/Salesforce.jpg";
import image07 from "../../static/BMWi.jpg";
import image08 from "../../static/Prudential.jpg";

const clients = [
  {
    source: image01,
    title: "P&G",
  },
  {
    source: image02,
    title: "Daimler",
  },
  {
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
  },
];

export default function Index({ data }) {
  const clients = data.clients.nodes;
  const contact = data.contact.siteMetadata.contact;
  return (
    <Layout>
      <section style={{ position: "relative" }}>
        <Banner></Banner>
        <TextWrapper>
          <div>
            {/* <MyAnimation /> */}
            <GenereicPara>
              Trust makes our complex world simple. <br /> Make it yours to
              lead, transform and innovate.
            </GenereicPara>
          </div>
        </TextWrapper>
        <MoreText>Learn more </MoreText>
      </section>

      <SectionTwo></SectionTwo>

      <SectionThree>
        {clients.map(clients => (
          <Link to={"/clients/" + clients.frontmatter.slug} key={clients.id}>
            <GenericH2>{clients.frontmatter.title}</GenericH2>
          </Link>
        ))}
        {/*   <ImagesWrapper>
          <SingleImage client={clients[0]} />
          <SingleImage client={clients[1]} />
        </ImagesWrapper> */}
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
