import React, { useState, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { MenuItem } from "Components";

const Menu = ({ menuItems, onClick, selectedItem }) => {
  return (
    <Container>
      {Object.values(menuItems)?.map((item, index) => (
        <MenuItem
          key={index}
          id={item.ID}
          label={item.NAME}
          selectedItem={selectedItem}
          onClick={() => onClick(item)}
        />
      ))}
    </Container>
  );
};

Menu.propTypes = {
  menuItems: PropTypes.object,
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  padding: 0 1rem;
`;

export default Menu;
