import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { AiOutlinePicture as DefaultImg } from "react-icons/ai";

const Img = ({ src, height, width, borderRadius }) => {
  if (!src) return <DefaultImg height={height} />;
  return (
    <ImgBase
      src={src}
      height={height}
      width={width}
      borderRadius={borderRadius}
    />
  );
};

Img.propTypes = {
  src: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.string,
};

const ImgBase = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  user-select: none;
`;

export default Img;
