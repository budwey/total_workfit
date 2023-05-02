import React, { forwardRef } from "react";
import styled from "styled-components";
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
  height: 100%;
  color: black;
  display: flex;
  justify-content: center;
  position: relative;

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
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 100px 2%;
  min-width: 750px;
  max-width: 1000px;
  z-index: 1;
  border-left: 1px solid silver;
  border-right: 1px solid silver;
`;

export default FloatContainer;
