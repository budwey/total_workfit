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
          <Text font="medium" size="1.3rem">
            {subtitle}
          </Text>
        </SubtitleWrapper>
        <InfoWrapper>
          {info.map((paragraph, index) => {
            return paragraph === "Total WorkFit" ? (
              <ImgWrapperLit key={index}>
                <Img height="100%" src={img} />
              </ImgWrapperLit>
            ) : (
              <Text size="1.15rem" key={index}>
                {paragraph}
              </Text>
            );
          })}
        </InfoWrapper>
      </Header>
      <Body>
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
          <Img
            height="100%"
            width="100%"
            src={location.img}
            borderRadius="10px"
            border="1px solid gray"
          />
        </LocationWrapper>
      </Body>
    </Container>
  );
};

SectionContact.propTypes = {
  src: PropTypes.object,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  padding: 10%;
  padding-top: 5%;
  box-sizing: border-box;
  gap: 1%;
  overflow: hidden;
`;

const Header = styled.div`
  padding-top: 20px;
  box-sizing: border-box;
  padding-left: 5%;
  padding-bottom: 10%;
  flex: 2;
`;

const Body = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5%;
  flex: 1;
  padding: 2% 10%;
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
  opacity: 0.2;
  box-sizing: border-box;
  padding-bottom: 2%;
  padding-top: 4%;
`;
const ImgWrapperLit = styled(ImgWrapper)`
  display: flex;
  justify-self: center;
  align-items: center;
  height: 100%;
  width: 100%;
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
      <Text size="1rem" font="bold">
        {name}:
      </Text>
      <Text size="1rem" font="normal" padding="0 0 0 15px">
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
  box-sizing: border-box;
`;

const LocationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 2%;
  padding-bottom: 2%;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
`;

export default SectionContact;
