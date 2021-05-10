import React from "react";
import styled from "styled-components";

const media = {
  desktop: "@media(min-width: 1000px)",
};

const TileLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding-bottom: 100px;

  ${media.desktop} {
    flex-flow: row nowrap;
  }
  div {
    background-image: ${props => props.img};
    background-size: cover;
    padding-left: 16px;
    width: 100%;
    height: 390px;
    ${media.desktop} {
      height: 350px;
      padding-left: 42px;
    }
  }
  p {
    font-family: Fira Sans;
    font-weight: 300;
    font-size: 12px;
    color: white;
    line-height: 25px;
    ${media.desktop} {
      font-size: 16px;
    }
  }
  h1 {
    padding-top: 20px;
    font-family: Fira Sans;
    color: white;
  }
`;

const TICTile = props => {
  return (
    <TileLayout>
      <div style={{ backgroundColor: "#080c50" }}>
        <h1>
          TRUST: Unite your people <br />
          (because we’re better together!){" "}
        </h1>
        <p>
          Introduction to trust economy and digital trust revolution <br />
          (based on The Trust Economy) <br />
          Navigating intergenerational leadership dynamics <br />
          New normal, future of work and digital leadership <br />
          Organisational purpose and ESG driving change for good <br />
          Values driven leadership and stakeholder management{" "}
        </p>
      </div>
      <div style={{ backgroundColor: "#080c50" }}>
        <h1>
          INNOVATE: Imagine your future <br />
          (because we all dream of a better world!){" "}
        </h1>
        <p>
          A global new normal and post-pandemic reset (based on RESET) <br />
          Trends, foresight and disruptive shifts from a human futurist lens{" "}
          <br />
          Innovation, digital transformation and future value propositions{" "}
          <br />
          Open data economy, global privacy revolution, data trust strategy{" "}
          <br />
          Nurturing start-up ecosystems and strategic digital partnerships{" "}
          <br />
          Amplifying digital customer experience stickiness with behaviour
          design <br />
          New customer insight generation, product and service design thinking{" "}
          <br />
          Digital by default, interface revolution and digital business design{" "}
        </p>
      </div>
      <div style={{ backgroundColor: "#080c50" }}>
        <h1>
          CHANGE: Transform your reality <br />
          (because making it happen is everything!){" "}
        </h1>
        <p>
          Translating agile transformation into everyday agility <br />
          Redesigning organisational structures for the digital age <br />
          Understanding change management and cultural transformation <br />
          Sustaining innovation momentum with ongoing engagement <br />
          Transforming corporate and board governance{" "}
        </p>
      </div>
    </TileLayout>
  );
};

export default TICTile;
