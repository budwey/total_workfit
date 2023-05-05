import { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import { THEME as theme } from "./theme";

import favicon from "Assets/favicon.ico";

import { Window, Header, Body } from "Layout";
import {
  Topbar,
  SectionTemplate,
  SectionContact,
  FloatContainer,
} from "Components";

import useScroll from "Utils/Hooks/useScroll";
import useScrollEvents from "Utils/Hooks/useScrollEvents";

import sections, { sections_types } from "Data/sections";

function App() {
  const [selectedItem, setSelectedItem] = useState(sections.HOME);
  const { scrollPercentage } = useScroll();
  const { activeItem } = useScrollEvents(scrollPercentage);
  const ref = useRef({});

  useEffect(() => {
    setSelectedItem(activeItem);
  }, [activeItem]);

  const handleClick = (item) => {
    if (ref && ref.current[item.ID]) {
      ref.current[item.ID].scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  };

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

  return (
    <ThemeProvider theme={theme}>
      <Window>
        <Header>
          <Topbar
            menuItems={sections}
            onClickItem={handleClick}
            selectedItem={selectedItem}
          />
        </Header>
        <Body>
          {Object.values(sections).map((SECTION) => {
            return (
              <FloatContainer
                key={SECTION.ID}
                ref={(item) => (ref.current[SECTION.ID] = item)}
                backgroundImage={SECTION.BACKGROUND}
                children={getChildren(SECTION)}
              />
            );
          })}
        </Body>
      </Window>
      <Helmet>
        <title>Total WorkFit</title>
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      </Helmet>
    </ThemeProvider>
  );
}

export default App;
