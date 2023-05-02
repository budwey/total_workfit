import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Img, Text } from "Components";

const SectionTemplate = ({ src, isLogo = false }) => {
  const { TITLE: title, SUBTITLE: subtitle, INFO: info, IMG: img } = src;

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Text font="bold" size="1.5rem">
            {title}
          </Text>
        </TitleWrapper>
        <SubtitleWrapper>
          <Text font="medium" size="1.5rem">
            {subtitle}
          </Text>
        </SubtitleWrapper>
      </Header>
      <InfoWrapper>
        {info.map((paragraph, index) => {
          return paragraph === "Total WorkFit" ? (
            <ImgWrapperLit key={index}>
              <Img height="100%" src={img} />
            </ImgWrapperLit>
          ) : (
            <Text size="1.3rem" key={index}>
              {paragraph}
            </Text>
          );
        })}
      </InfoWrapper>
      <ImgWrapper>{isLogo && <Img height="100%" src={img} />}</ImgWrapper>
    </Container>
  );
};

SectionTemplate.propTypes = {};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  padding: 0 5rem;
  padding-top: 15%;
  box-sizing: border-box;
  gap: 50px;
  position: relative;
  overflow: auto;
`;

const Header = styled.div`
  padding-top: 20px;
  padding-left: 50px;
  flex: 1;
`;

const TitleWrapper = styled.div``;

const SubtitleWrapper = styled.div`
  padding-top: 0.8rem;
`;

const InfoWrapper = styled.div`
  padding-top: 0.8rem;
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  opacity: 0.35;
  box-sizing: border-box;
  padding-bottom: 50px;
`;
const ImgWrapperLit = styled(ImgWrapper)`
  height: 350px;
  padding: 0;
  opacity: 0.5;
`;

export default SectionTemplate;
