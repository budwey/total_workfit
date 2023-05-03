import { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import { THEME as theme } from "./theme";

import favicon from "Assets/favicon.ico";

import { Window, Header, Body } from "Layout";
import { Topbar, Feed } from "Components";

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
          <Feed src={sections} />
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
