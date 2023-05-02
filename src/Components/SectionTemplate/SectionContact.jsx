import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Text, Img } from "Components";

const SectionContact = ({ src }) => {
  const {
    TITLE: title,
    SUBTITLE: subtitle,
    INFO: info,
    IMG: img,
    CHANNELS: contact,
    LOCATION: location,
  } = src;

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
      <ContactWrapper>
        {contact.map((channel, index) => (
          <ContactRow
            key={index}
            icon={channel.icon}
            name={channel.name}
            value={channel.value}
          />
        ))}
      </ContactWrapper>
      <LocationWrapper onClick={location.onClick}>
        <Img height="100%" width="100%" src={location.img} />
      </LocationWrapper>
    </Container>
  );
};

SectionContact.propTypes = {};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 5rem;
  box-sizing: border-box;
  gap: 50px;
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
  opacity: 0.5;
  height: 300px;
  opacity: 0.35;
  padding-top: 50px;
  box-sizing: border-box;
`;
const ImgWrapperLit = styled(ImgWrapper)`
  height: 350px;
  padding: 0;
  opacity: 0.5;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContactRow = ({ icon, name, value }) => {
  return (
    <ContactRowWrapper>
      {icon}
      <Text size="1.2rem" font="bold">
        {name}:
      </Text>
      <Text size="1.2rem" font="normal" padding="0 0 0 15px">
        {value}
      </Text>
    </ContactRowWrapper>
  );
};

const ContactRowWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  flex-direction: row;
`;

const LocationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  height: 40%;
  border: 3px solid silver;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
`;

export default SectionContact;
