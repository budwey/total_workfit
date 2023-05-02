import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import logo from "Assets/logoMod2.png";

import { Text, Img } from "Components";

const Logo = ({ label = "Total WorkFit", src = { logo } }) => {
  return (
    <WrapperTitle>
      <Text font="heavy" size="1.2rem" color="white" padding="0 10px" ellipsis>
        {label}
      </Text>
      {src && <Img src={logo} width="40px" borderRadius="1px 18px 18px 1px" />}
    </WrapperTitle>
  );
};

Logo.propTypes = {
  label: PropTypes.string,
  src: PropTypes.string,
};

const WrapperTitle = styled.div`
  display: flex;
  gap: ${(props) => (props.src ? "12px" : "0")};
  justify-content: space-between;
  align-items: center;
  background-color: #292500;
  padding: 0;
  border: 1px solid black;
  border-radius: 18px;
`;

export default Logo;
