import React from "react";
import styled from "styled-components";

import { GenericH2 } from "../styles/IndexStyles";

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`;

const ImgIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-right: 20px;

  svg {
    margin-right: 10px;
  }
`;

const ImgMeta = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  justify-content: flex-start;
  padding: 30px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Img = styled.img`
  cursor: pointer;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const SingleImage = props => {
  return (
    <ImgContainer>
      <Img src={props.client.source} />
      <ImgMeta>
        <GenericH2>{props.client.title}</GenericH2>
      </ImgMeta>
    </ImgContainer>
  );
};

export default SingleImage;
