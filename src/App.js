import { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import { THEME as theme } from "./theme";

import favicon from "Assets/favicon.ico";

import { Window, Header, Body } from "Layout";
import {
  FloatContainer,
  SectionTemplate,
  SectionContact,
  Topbar,
} from "Components";

import useScroll from "Utils/Hooks/useScroll";
import useScrollEvents from "Utils/Hooks/useScrollEvents";

import sections from "Data/sections";

function App() {
  const refs = useRef({});
  const [selectedItem, setSelectedItem] = useState(sections.HOME);
  const { scrollPercentage } = useScroll();
  const { activeItem } = useScrollEvents(scrollPercentage);

  useEffect(() => {
    setSelectedItem(activeItem);
  }, [activeItem]);

  const handleClick = (item) => {
    if (refs && refs.current) {
      refs.current[item.ID].scrollIntoView({ behavior: "smooth" });
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
          {/* HOME PAGE */}
          <FloatContainer
            ref={(refHome) => (refs.current[sections.HOME.ID] = refHome)}
            backgroundImage={sections.HOME.BACKGROUND}
            children={<SectionTemplate src={sections.HOME} />}
          />
          {/* MOTIVATION PAGE */}
          <FloatContainer
            ref={(refMotivation) =>
              (refs.current[sections.MOTIVATION.ID] = refMotivation)
            }
            backgroundImage={sections.MOTIVATION.BACKGROUND}
            children={<SectionTemplate src={sections.MOTIVATION} isLogo />}
          />
          {/* ABOUTUS PAGE */}
          <FloatContainer
            ref={(refAbout) => (refs.current[sections.ABOUTUS.ID] = refAbout)}
            backgroundImage={sections.ABOUTUS.BACKGROUND}
            children={<SectionTemplate src={sections.ABOUTUS} isLogo />}
          />
          {/* CONTACT PAGE */}
          <FloatContainer
            ref={(refContact) =>
              (refs.current[sections.CONTACT.ID] = refContact)
            }
            backgroundImage={sections.CONTACT.BACKGROUND}
            children={<SectionContact src={sections.CONTACT} />}
          />
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
