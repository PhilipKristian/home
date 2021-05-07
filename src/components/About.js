import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const media = {
  desktop: "@media(min-width: 1000px)",
};

const AboutLayout = styled.div`
padding: 40px;
width: 90%;
${media.desktop} {
  width: 66%;
}
}
`;
const GenereicPara = styled.p`
  padding-bottom: ${props => (props.quoteListing ? "" : "30px")};
  font-size: ${props => (props.quote ? "20px" : "15px")};
  font-family: ${props => (props.quote ? "#Playfair Display" : "Fira Sans")};
  color: #080c50;
  ${media.desktop} {
    font-size: ${props => (props.quote ? "30px" : "20px")};
  }
`;

const About = props => {
  return (
    <AboutLayout>
      <GenereicPara quote>
        ‘I believe in a world in which we all trust each other. When we trust
        ourselves and others, we transform. Trust empowers us to become the best
        version of ourselves and humanity. <br /> It’s our shared foundation for
        greatness.’ – Philipp Kristian
      </GenereicPara>
      <GenereicPara quoteListing style={{ color: "#080c50" }}>
        Philipp Kristian is a global innovation x trust pioneer, voice of
        digital Generations Y to Z and author of RESET and The Trust Economy. He
        is a TEDx storyteller, futurist on our humanity and international
        keynote speaker deciphering our digital economy. As we approach a global
        post-pandemic reset, he speaks in service of a greater and happier
        humankind.
      </GenereicPara>
      <GenereicPara quoteListing style={{ color: "#080c50" }}>
        Philipp spent the past decade driving innovation for Fortune 500s in
        JAPAC and working with CEOs of Singapore’s most successful startups on
        reshaping entire industries. He’s inspired transformation in over a
        dozen sectors and 50+ countries, including Bhutan and the Maldives. His
        executive masterclasses for a top Asian business school have garnered
        rave reviews.
      </GenereicPara>
      <GenereicPara quoteListing style={{ color: "#080c50" }}>
        Philipp is an innovation strategist at heart, a change evangelist on
        stage and an eloquent rebel on the page. He’s a magician inspiring us to
        rediscover trust as the magic ingredient to our greatest human
        achievements. His work has attracted the attention of media including
        Business Insider, Esquire, Haymarket, Forbes, Economic Times, Springer
        and brand eins. He was named a Kairos Global Fellow in 2016 and World
        Economic Forum Global Shaper in 2018, and invited to the official St.
        Gallen Symposium Singapore delegation in 2015 and 2021.
      </GenereicPara>
      <GenereicPara quoteListing style={{ color: "#080c50" }}>
        In his free time, he’s an avid yogi, sailor and matcha enthusiast.
      </GenereicPara>
      <GenereicPara quoteListing style={{ color: "#080c50" }}>
        Join the likes of Daimler, Ernst & Young, Facebook, Generali, Microsoft,
        Salesforce, Turner, P&G, Prudential and Zillow as you get ready for some
        serious intellectual fireworks.
      </GenereicPara>
    </AboutLayout>
  );
};

export default About;
