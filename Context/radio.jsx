import { createContext, useState } from "react";

export const RadioContext = createContext();

export const RadioProvider = ({ children }) => {
  const [breedTypeRadioValue, setBreedTypeRadioValue] = useState(""); // initialize the state variable "breedTypeRadioValue" with empty string

  const [servicesRadioValue, setServicesRadioValue] = useState(""); // initialize the state variable "servicesRadioValue" with empty string

  const [coatTypeRadioValue, setCoatTypeRadioValue] = useState(""); // initialize the state variable "coatTypeRadioValue" with empty string

  const [sizeRadioValue, setSizeRadioValue] = useState(""); // initialize the state variable "sizeRadioValue" with empty string

  // updates the "setBreedTypeRadioValue" value by passing in a value (string)

  const updateBreedTypeRadioValue = (value) => {
    setBreedTypeRadioValue(value);
    // console.log(value);
  };

  // updates the "setServicesRadioValue" value by passing in a value (string)

  const updateServicesRadioValue = (value) => {
    setServicesRadioValue(value);
    // console.log(value);
  };

  // updates the "setBreedTypeRadioValue" value by passing in a value (string)

  const updateCoatTypeRadioValue = (value) => {
    setCoatTypeRadioValue(value);
    // console.log(value);
  };

  // updates the "setServicesRadioValue" value by passing in a value (string)

  const updateSizeRadioValue = (value) => {
    setSizeRadioValue(value);
    // console.log(value);
  };

  return (
    <RadioContext.Provider
      value={{
        breedTypeRadioValue,
        servicesRadioValue,
        coatTypeRadioValue,
        sizeRadioValue,
        updateBreedTypeRadioValue,
        updateServicesRadioValue,
        updateCoatTypeRadioValue,
        updateSizeRadioValue,
      }}
    >
      {children}
    </RadioContext.Provider>
  );
};
