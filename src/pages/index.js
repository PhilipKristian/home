import React, { Component } from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faCode, faGem, fas } from "@fortawesome/free-solid-svg-icons";

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

library.add(faHeart, faCode, faGem, fas);

export default () => (
  <>
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
      <div className="header_section4">
        <div className="title_section4"> My Technologies</div>
        <GenereicPara lessSize grey>
          I am interested in the latest technologies <br />
          as they are highly scalable and maintainable.
        </GenereicPara>
      </div>
    </SectionFour>
  </>
);
