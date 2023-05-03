import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { sections_types } from "Data/sections";

import PropTypes from "prop-types";
import { FloatContainer } from "Components/FloatContainer";
import { SectionContact, SectionTemplate } from "Components/SectionTemplate";

const Feed = ({ src }) => {
  const refs = useRef({});
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

  useEffect(() => {
    console.log(refs);
  }, [refs]);

  return DATA.map((SECTION) => (
    <FloatContainer
      ref={(ref) => (refs.current[SECTION.ID] = ref)}
      backgroundImage={SECTION.BACKGROUND}
      children={getChildren(SECTION)}
    />
  ));
};

Feed.propTypes = {};

const Container = styled.div``;

export default Feed;
