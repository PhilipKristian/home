import React, { Component } from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faCode, faGem, fas } from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faHtml5,
  faJs,
  faReact,
  faCss3,
  faGalacticSenate,
} from "@fortawesome/free-brands-svg-icons";

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

library.add(faHeart, faCode, faGem, fab, fas);

export default () => (
  <Layout>
    <section style={{ position: "relative" }}>
      <Banner></Banner>
      <TextWrapper>
        <div>
          {/* <MyAnimation /> */}
          <GenericH2>EUJURIKA</GenericH2>
          <GenereicPara>
            One Stop for <br />
            all you development <br />
            and design needs
          </GenereicPara>
          <Link to="/works">MY WORK</Link>
        </div>
      </TextWrapper>
      <MoreText>Learn more about me</MoreText>
    </section>
    <SectionTwo>
      <div>
        <GenericH2>MY PASSION</GenericH2>
        <GenereicPara lessSize grey>
          Most good programmers do programming not because they expect to get
          paid, <br /> but bacause it's fun to program
        </GenereicPara>
        <h5> - Linus Torvalds</h5>
      </div>
      <span>
        <FontAwesomeIcon
          icon="gem"
          color="white"
          size="6x"
          style={{ marginRight: "3rem" }}
          fixedWidth
          border
        />
        <FontAwesomeIcon
          icon="heart"
          color="white"
          size="6x"
          style={{ marginRight: "3rem" }}
          fixedWidth
          border
        />
        <FontAwesomeIcon
          icon="code"
          color="white"
          size="6x"
          fixedWidth
          border
        />
      </span>
    </SectionTwo>
    <SectionThree>
      <FlexBoxIndex>
        <div className="image">
          <img src="pic01.jpg" alt="pic01" />
        </div>
        <div className="text_section3">
          <GenericH2 none>Website Development</GenericH2>
          <GenereicPara lessSize lessSpacing>
            I handcode beautiful websites using HTML5, CSS3, JS - because they
            are full customizable and efficient. <br /> No WordPress websites
            here.
          </GenereicPara>
        </div>
      </FlexBoxIndex>
      <FlexBoxIndex inverse>
        <div className="text_section3">
          <GenericH2 none>Website Design</GenericH2>
          <GenereicPara lessSize lessSpacing>
            Design beautiful and usable websites.
          </GenereicPara>
        </div>
        <div className="image">
          <img src="pic02.jpg" alt="pic02" />
        </div>
      </FlexBoxIndex>
      <FlexBoxIndex>
        <div className="image">
          <img src="pic03.jpg" alt="pic03" />
        </div>
        <div className="text_section3">
          <GenericH2 none>Mobile App Development</GenericH2>
          <GenereicPara lessSize lessSpacing>
            I develop Mobile apps in React Native, which can be used in both ios
            and Android.
          </GenereicPara>
        </div>
      </FlexBoxIndex>
    </SectionThree>
    <SectionFour>
      <div className="header__section4">
        <div className="title__section4">MY Technologies</div>
      </div>
      <div className="grid__section4">
        <div className="item1" style={{ backgroundColor: "#2b343d" }}>
          <div className="flex__section4">
            <FontAwesomeIcon
              icon={faReact}
              color="#ed4933"
              size="3x"
              fixedWidth
            />
            <GenericH2 none>React</GenericH2>
          </div>
          <GenereicPara lessSize lessSpacing grey>
            Modern JavaScript framework which will make your web application
            extremely fast and, at the same time, handy for every user.
          </GenereicPara>
        </div>
        <div className="item2" style={{ backgroundColor: "#4D0000" }}>
          <div className="flex__section4">
            <FontAwesomeIcon icon="code" color="#ed4933" size="3x" fixedWidth />
            <GenericH2 none>React Native</GenericH2>
          </div>
          <GenereicPara lessSize lessSpacing grey>
            Cross-platform for mobile app development based on Javascript, whose
            resulting code is compiled to Android and iOS.
          </GenereicPara>
        </div>
        <div className="item3" style={{ backgroundColor: "#4D0000" }}>
          <div className="flex__section4">
            <FontAwesomeIcon icon={faJs} color="#ed4933" size="3x" fixedWidth />
            <GenericH2 none>JavaScript</GenericH2>
          </div>
          <GenereicPara lessSize lessSpacing grey>
            JavaScript is the language of the web. It is used for Web
            development, mobile development and app development and everything
            else.
          </GenereicPara>
        </div>
        <div className="item4" style={{ backgroundColor: "#2b343d" }}>
          <div className="flex__section4">
            <FontAwesomeIcon
              icon={faHtml5}
              color="#ed4933"
              size="3x"
              fixedWidth
            />
            <GenericH2 none>HTML5</GenericH2>
          </div>
          <GenereicPara lessSize lessSpacing grey>
            HTML, a standardized system for tagging text files to achieve font,
            colour, graphic, and hyperlink effects on World Wide Web pages.
          </GenereicPara>
        </div>
        <div className="item5" style={{ backgroundColor: "#2b343d" }}>
          <div className="flex__section4">
            <FontAwesomeIcon
              icon={faCss3}
              color="#ed4933"
              size="3x"
              fixedWidth
            />
            <GenericH2 none>CSS3</GenericH2>
          </div>
          <GenereicPara lessSize lessSpacing grey>
            CSS is a style sheet language used for describing the presentation
            of a document written in a markup language like HTML.
          </GenereicPara>
        </div>
        <div className="item6" style={{ backgroundColor: "#4D0000" }}>
          <div className="flex__section4">
            <FontAwesomeIcon
              icon={faGalacticSenate}
              color="#ed4933"
              size="3x"
              fixedWidth
            />
            <GenericH2 none>Gatsby</GenericH2>
          </div>
          <GenereicPara lessSize lessSpacing grey>
            Gatsby is a free and open source framework based on React that helps
            developers build blazing fast websites and apps
          </GenereicPara>
        </div>
      </div>
    </SectionFour>
  </Layout>
);
