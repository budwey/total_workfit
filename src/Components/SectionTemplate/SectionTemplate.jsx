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
          <Text font="medium" size="1.3rem">
            {subtitle}
          </Text>
        </SubtitleWrapper>
        <InfoWrapper>
          {info.map((paragraph, index) => {
            return paragraph === "Total WorkFit" ? (
              <ImgWrapperLit key={index}>
                <Img height="250px" src={img} />
              </ImgWrapperLit>
            ) : (
              <Text size="1.15rem" key={index}>
                {paragraph}
              </Text>
            );
          })}
        </InfoWrapper>
      </Header>
      {isLogo && (
        <Body>
          <ImgWrapper>
            <Img height="250px" src={img} />
          </ImgWrapper>
        </Body>
      )}
    </Container>
  );
};

SectionTemplate.propTypes = {};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  padding: 2% 10%;
  padding-top: 8%;
  box-sizing: border-box;
  gap: 1%;
  overflow: auto;
`;

const Header = styled.div`
  box-sizing: border-box;
  padding-left: 5%;
  padding-bottom: 5%;
  flex: 5;
`;

const Body = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5%;
  flex: 1;
`;

const TitleWrapper = styled.div``;

const SubtitleWrapper = styled.div`
  padding-top: 0.8rem;
  box-sizing: border-box;
`;

const InfoWrapper = styled.div`
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-sizing: border-box;
  padding-top: 10%;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 250px;
  opacity: 0.2;
  box-sizing: border-box;
  padding-bottom: 2%;
  padding-top: 4%;
`;
const ImgWrapperLit = styled(ImgWrapper)`
  display: flex;
  justify-self: center;
  align-items: center;
  height: 250px;
  width: 100%;
  padding: 0;
  opacity: 0.5;
`;

export default SectionTemplate;
