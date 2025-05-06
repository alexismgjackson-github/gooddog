import { createContext } from "react";

// Create a context to manage and provide scroll functionality across the app
export const ScrollContext = createContext(); // Initializes context for managing scroll-related functionality

// ScrollProvider component that wraps around child components to provide access to scroll-related actions
export const ScrollProvider = ({ children }) => {
  // Function to scroll the page to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to the top of the page with smooth animation
  };

  // Provide the scrollToTop function to all child components via context
  return (
    <ScrollContext.Provider
      value={{
        scrollToTop, // Making scrollToTop available to child components that consume this context
      }}
    >
      {children}{" "}
      {/* Render child components, which can now call scrollToTop function */}
    </ScrollContext.Provider>
  );
};
