import styled from "styled-components";
import PropTypes from "prop-types";

const Text = styled.span.attrs({
  onclick: (props) => props.onClick,
})`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.size || "1rem"};
  font-family: ${(props) => props.size && handleFontSize(props)};
  padding: ${(props) => props.padding};
  transition: 1s ease all;
  user-select: none;
  ${(props) => {
    if (props.ellipsis)
      return `
      white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `;
  }}
`;

Text.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  font: PropTypes.oneOf(["light", "normal", "medium", "bold", "heavy"]),
  color: PropTypes.string,
  padding: PropTypes.string,
  ellipsis: PropTypes.bool,
};

const handleFontSize = (props) => {
  switch (props.font) {
    case "light":
      return props.theme.FONT.LIGHT;
    case "normal":
      return props.theme.FONT.NORMAL;
    case "medium":
      return props.theme.FONT.MEDIUM;
    case "bold":
      return props.theme.FONT.BOLD;
    case "heavy":
      return props.theme.FONT.HEAVY;
    default:
      break;
  }
};

export default Text;
