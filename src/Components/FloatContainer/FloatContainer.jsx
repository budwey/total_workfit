import React, { forwardRef } from "react";
import styled from "styled-components";
import { device } from "sizes";
import PropTypes from "prop-types";

const FloatContainer = forwardRef(
  ({ backgroundImage, backgroundColor, children }, ref) => {
    return (
      <Container
        ref={ref}
        backgroundImage={backgroundImage}
        backgroundColor={backgroundColor}
      >
        <Wrapper>{children || "Children"}</Wrapper>
      </Container>
    );
  }
);

FloatContainer.propTypes = {};

const Container = styled.div`
  background-color: ${(props) => props.backgroundColor || "aliceblue"};
  width: 100%;
  height: fit-content;
  color: black;
  display: flex;
  justify-content: center;
  position: relative;
  scroll-margin-top: 50px;

  &:before {
    content: "";
    position: absolute;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    filter: blur(1px) sepia(100%) hue-rotate(185deg) saturate(50%);
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.backgroundImage || "none"});
  }
`;

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  width: 50%;
  min-height: 100vh;
  height: fit-content;
  min-width: 412px;
  max-width: 1000px;
  z-index: 1;
  border-left: 1px solid silver;
  border-right: 1px solid silver;

  @media ${device.tablet} {
    min-width: 70%;
  }

  @media ${device.mobile} {
    min-width: 100%;
    border-bottom: 1px solid silver;
  }
`;

export default FloatContainer;
