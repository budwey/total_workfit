import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Text } from "Components/Text";

const TopbarSection = ({ section, onClick }) => {
  return (
    <Wrapper onClick={() => onClick(section)}>
      <Text font="bold" size="1.75rem">
        {section.NAME}
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90%;
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;
  cursor: pointer;

  &:hover,
  &:active {
    opacity: 0.5;
    transform: scale(1.1);
    transition: 0.25s ease all;
  }
`;

TopbarSection.propTypes = {};

export default TopbarSection;
