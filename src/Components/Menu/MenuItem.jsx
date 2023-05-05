import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MenuItem = ({ id, label = "MenuItem", selectedItem, onClick }) => {
  return (
    <Item
      id={id}
      selectedItem={selectedItem?.ID === id}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      {label}
    </Item>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string,
  selectedItem: PropTypes.object,
  onClick: PropTypes.func,
};

const Item = styled.span`
  font-weight: ${(props) => (props.selectedItem ? "bold" : "normal")};
  transform: ${(props) => (props.selectedItem ? "scale(1.1)" : "none")};
  color: ${(props) => (props.selectedItem ? "black" : "#292500")};
  transition: 0.25s ease;
  font-family: "SFUIDisplay-Normal";
  font-size: 1.15rem;
`;

export default MenuItem;
