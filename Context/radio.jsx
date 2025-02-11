import React, { createContext, useState } from "react";

export const RadioContext = createContext();

export const RadioProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const value = {
    selectedOption,
    setSelectedOption,
  };

  return (
    <RadioContext.Provider value={value}>{children}</RadioContext.Provider>
  );
};
