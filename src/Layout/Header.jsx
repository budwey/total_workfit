import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  height: 65px;
  padding: 1rem;
  transition: 0.25s ease all;
  z-index: 3;

  box-sizing: border-box;
  background-color: ${(props) => props.theme.COLOR.YELLOW};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export default Header;
