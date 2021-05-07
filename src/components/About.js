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
  padding: ${props => (props.quoteListing ? "" : "30px")};
  font-size: ${props => (props.quote ? "20px" : "15px")};
  font-family: ${props => (props.quote ? "#Playfair Display" : "Fira Sans")};
  color: #ff0085;
  color: "black";
  ${media.desktop} {
    font-size: ${props => (props.quote ? "30px" : "20px")};
  }
`;

const About = props => {
  return (
    <AboutLayout>
      <GenereicPara quote>
        ‘Imagine a world where we can all trust each other. When we trust
        ourselves and others, we transform the way we collaborate, innovate and
        create. Trust leadership empowers us to become the best version of
        ourselves and humanity.’ <br /> – Philipp Kristian
      </GenereicPara>
      <GenereicPara quoteListing style={{ color: "#080c50" }}>
        Imagine a world in which we can all trust each other: That’s the world
        Philipp is dreaming of creating. He believes trust is our shared human
        superpower. When we trust ourselves and others, it transforms the way we
        collaborate, innovate and create. Trust leadership empowers us to change
        things for the better and become the best version of ourselves and
        humanity.
      </GenereicPara>
      <GenereicPara quoteListing style={{ color: "#080c50" }}>
        Philipp is a TEDx storyteller and global innovation x trust pioneer.
        He’s a futurist on our humanity, a voice of digital Generations Y to Z
        and author of RESET and The Trust Economy. He’s that global keynote
        speaker deciphering the digital economy and our looming global reset, in
        service of a greater and happier humankind.
      </GenereicPara>
      <GenereicPara quoteListing style={{ color: "#080c50" }}>
        Philipp spent the past decade driving innovation for Fortune 500s in
        JAPAC and working with CEOs of Singapore’s most successful startups on
        reshaping entire industries. He’s inspired transformation in over a
        dozen sectors across five continents and 50+ countries, including Bhutan
        and the Maldives. His executive masterclasses for a top Asian business
        school have garnered rave reviews.
      </GenereicPara>
      <GenereicPara quoteListing style={{ color: "#080c50" }}>
        Philipp has attracted the attention of media including Business Insider,
        Esquire, Haymarket, Forbes, Economic Times, Springer and brand eins.
        He’s been a St. Gallen Symposium Leader of Tomorrow (2015), Kairos
        Global Fellow (2016) and World Economic Forum Global Shaper (2018). In
        his free time, he’s an avid yogi, sailor and matcha enthusiast.
      </GenereicPara>
      <GenereicPara quoteListing style={{ color: "#080c50" }}>
        Philipp is an innovation strategist at heart, a change evangelist on
        stage and an eloquent rebel on the page. He’s a magician inspiring us to
        rediscover trust as the magic ingredient to our greatest human
        achievements. Join the likes of Daimler, EY, Facebook, Generali,
        Microsoft, Salesforce, Turner, P&G, Prudential and Zillow as you get
        ready for some serious intellectual fireworks.
      </GenereicPara>
    </AboutLayout>
  );
};

export default About;
