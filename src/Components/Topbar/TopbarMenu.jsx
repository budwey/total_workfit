import React from "react";
import styled from "styled-components";
import Expand from "react-expand-animated";
import PropTypes from "prop-types";

const TopbarMenu = ({ open, children }) => {
  return (
    <Expand open={open}>
      <Container>{children}</Container>
    </Expand>
  );
};

TopbarMenu.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.any,
};

const Container = styled.div`
  background-color: ${(props) => props.theme.COLOR.YELLOW};
  width: 100%;
  padding: 0;
  height: fit-content;
  box-sizing: border-box;
  transition: 1s all;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default TopbarMenu;
