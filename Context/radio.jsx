import { createContext, useState } from "react";

export const RadioContext = createContext();

export const RadioProvider = ({ children }) => {
  const [breedTypeRadioValue, setBreedTypeRadioValue] = useState("");
  
  const [servicesRadioValue, setServicesRadioValue] = useState("");

  const updateBreedTypeRadioValue = (value) => {
    setBreedTypeRadioValue(value);
  };

  const updateServicesRadioValue = (value) => {
    setServicesRadioValue(value);
  };

  return (
    <RadioContext.Provider
      value={{
        breedTypeRadioValue,
        servicesRadioValue,
        updateBreedTypeRadioValue,
        updateServicesRadioValue,
      }}
    >
      {children}
    </RadioContext.Provider>
  );
};
