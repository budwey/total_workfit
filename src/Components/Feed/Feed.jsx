import React, { createRef, useEffect, useRef } from "react";
import styled from "styled-components";
import { FloatContainer } from "Components/FloatContainer";
import { SectionContact, SectionTemplate } from "Components/SectionTemplate";

import { sections_types } from "Data/sections";

import PropTypes from "prop-types";

const Feed = ({ src }) => {
  const DATA = Object.values(src)?.sort((a, b) => {
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;
  });

  const getChildren = (section) => {
    switch (section.TYPE) {
      case sections_types.TEMPLATE_LOGO:
        return <SectionTemplate src={section} isLogo />;
      case sections_types.TEMPLATE:
        return <SectionTemplate src={section} />;
      case sections_types.CONTACT:
        return <SectionContact src={section} />;
    }
  };

  return DATA.map((SECTION) => {
    return (
      <FloatContainer
        backgroundImage={SECTION.BACKGROUND}
        children={getChildren(SECTION)}
      />
    );
  });
};

Feed.propTypes = {};

const Container = styled.div``;

export default Feed;
