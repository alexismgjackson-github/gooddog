import { createContext, useState } from "react";

export const RadioContext = createContext();

export const RadioProvider = ({ children }) => {
  const [breedTypeRadioValue, setBreedTypeRadioValue] = useState(""); // initialize the state variable "breedTypeRadioValue" with empty string

  const [servicesRadioValue, setServicesRadioValue] = useState(""); // initialize the state variable "servicesRadioValue" with empty string

  // update the "setBreedTypeRadioValue" value by passing in a value (string)

  const updateBreedTypeRadioValue = (value) => {
    setBreedTypeRadioValue(value);
    console.log(value);
  };

  // update the "setServicesRadioValue" value by passing in a value (string)

  const updateServicesRadioValue = (value) => {
    setServicesRadioValue(value);
    console.log(value);
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
