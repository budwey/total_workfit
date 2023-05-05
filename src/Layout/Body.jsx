import React, { forwardRef } from "react";
import styled from "styled-components";

const Body = forwardRef(({ children }, ref) => {
  return <BodyBase ref={ref}>{children}</BodyBase>;
});

const BodyBase = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 75px;
  transition: transform 0.5s;
  box-sizing: border-box;
`;

export default Body;
