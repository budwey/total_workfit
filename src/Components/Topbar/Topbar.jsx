import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { size } from "sizes";

import { Menu, Logo } from "Components";

const Topbar = ({ menuItems, onClickItem, selectedItem }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth >= size.mobile);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= size.mobile);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  if (!isDesktop) {
    return (
      <Container>
        <FlexWrapper>
          <IconWrapper>{selectedItem?.ICON}</IconWrapper>
        </FlexWrapper>
        <FlexWrapperEnd>
          <Logo />
        </FlexWrapperEnd>
      </Container>
    );
  } else {
    return (
      <Container>
        <FlexWrapper>
          <IconWrapper>{selectedItem?.ICON}</IconWrapper>
        </FlexWrapper>
        <FlexWrapper>
          <Menu
            menuItems={menuItems}
            onClick={onClickItem}
            selectedItem={selectedItem}
          />
        </FlexWrapper>
        <FlexWrapperEnd>
          <Logo />
        </FlexWrapperEnd>
      </Container>
    );
  }
};

export default Topbar;

//Styled components:
const Container = styled.div`
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  box-sizing: border-box;
  height: 100%;
`;

const IconWrapper = styled.div`
  background-color: #292500;
  padding: 8px 10px;
  box-sizing: border-box;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

const FlexWrapperEnd = styled(FlexWrapper)`
  justify-content: flex-end;
`;
