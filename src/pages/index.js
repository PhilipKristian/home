import React, { Component } from "react";
import { Link } from "gatsby";

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

import image01 from "../../static/Daimler.jpg";
import image02 from "../../static/Microsoft.jpg";

const clients = [
  {
    source: image01,
    title: "Daimler",
  },
  {
    source: image02,
    title: "Microsoft",
  },
];

export default () => (
  <Layout>
    <section style={{ position: "relative" }}>
      <Banner></Banner>
      <TextWrapper>
        <div>
          {/* <MyAnimation /> */}
          <GenereicPara>
            Trust makes our complex world simple. <br /> Make it yours to lead,
            transform and innovate.
          </GenereicPara>
        </div>
      </TextWrapper>
      <MoreText>Learn more </MoreText>
    </section>

    <SectionTwo></SectionTwo>

    <SectionThree>
      <ImagesWrapper>
        <SingleImage client={clients[0]} />
        <SingleImage client={clients[1]} />
        {/*    <div className="image">
            <img src="PandG.jpg" alt="PandG" />
          </div>
          <div className="image">
            <img src="Daimler.jpg" alt="Daimler" />
          </div> */}
      </ImagesWrapper>
      <FlexBoxIndex></FlexBoxIndex>
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
