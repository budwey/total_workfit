import { useEffect, useState } from "react";
import sections from "Data/sections";

export function useScrollEvents(scrollPos) {
  const [activeItem, setActiveItem] = useState(sections.HOME);

  const selectActiveItem = () => {
    const optionsList = Object.values(sections);
    optionsList.forEach((item) => {
      if (scrollPos >= item.SCROLLPOS) {
        setActiveItem(item);
      }
    });
  };

  useEffect(() => {
    selectActiveItem();
    // selectActiveItem not necessary for this case, so warning is ignored.
    // eslint-disable-next-line
  }, [scrollPos]);

  return {
    activeItem,
  };
}

export default useScrollEvents;
