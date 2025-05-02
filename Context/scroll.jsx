import { createContext, useEffect } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  // ensures that the page scrolls to the top smoothly

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider
      value={{
        scrollToTop,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
