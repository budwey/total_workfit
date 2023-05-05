import React from "react";
import styled from "styled-components";
import { Text } from "Components/Text";
import PropTypes from "prop-types";

const TopbarSection = ({ section, onClick }) => {
  return (
    <Wrapper onClick={() => onClick(section)}>
      <Text font="bold" size="1.5rem">
        {section.NAME}
      </Text>
    </Wrapper>
  );
};

TopbarSection.propTypes = {
  section: PropTypes.object,
  onClick: PropTypes.func,
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

export default TopbarSection;
