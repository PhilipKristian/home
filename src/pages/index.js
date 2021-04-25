import React, { Component } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

import {
  Banner,
  TextWrapper,
  MoreText,
  MyAnimation,
  SectionTwo,
  SectionThree,
  SectionFour,
  FlexBoxIndex,
  GenereicPara,
  GenericH2,
} from "../styles/IndexStyles";

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
    <section>
      <div className="image">
        <img src="Showreel21Still.png" alt="Showreel21Still" />
      </div>
    </section>
    {/*    <SectionTwo>
      <div>
        <GenericH2>MY PASSION</GenericH2>
        <GenereicPara lessSize grey>
          Most good programmers do programming not because they expect to get
          paid, <br /> but bacause it's fun to program
        </GenereicPara>
        <h5> - Linus Torvalds</h5>
      </div>
    </SectionTwo> */}
    <SectionThree>
      <FlexBoxIndex>
        <div className="image">
          <img src="facebook.jpg" alt="facebook" />
        </div>
        <div className="text_section3">
          <GenericH2 none>Facebook</GenericH2>
        </div>
      </FlexBoxIndex>
      <FlexBoxIndex inverse>
        <div className="text_section3">
          <GenericH2 none>Deloitte</GenericH2>
        </div>
        <div className="image">
          <img src="Deloitte.jpg" alt="Deloitte" />
        </div>
      </FlexBoxIndex>
      <FlexBoxIndex>
        <div className="image">
          <img src="Microsoft.jpg" alt="Microsoft" />
        </div>
        <div className="text_section3">
          <GenericH2 none>Microsoft</GenericH2>
        </div>
      </FlexBoxIndex>
    </SectionThree>
  </Layout>
);
