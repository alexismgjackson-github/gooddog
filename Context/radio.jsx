import { createContext, useState } from "react";

export const RadioContext = createContext();

export const RadioProvider = ({ children }) => {
  const [radioValue, setRadioValue] = useState("");

  const updateRadioValue = (value) => {
    setRadioValue(value);
  };
  return (
    <RadioContext.Provider value={{ radioValue, updateRadioValue }}>
      {children}
    </RadioContext.Provider>
  );
};
