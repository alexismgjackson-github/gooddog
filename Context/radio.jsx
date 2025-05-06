import { createContext, useState } from "react";

// Create a context for managing the radio button state across the app
export const RadioContext = createContext();

// RadioProvider component that wraps around other components to provide shared radio button state
export const RadioProvider = ({ children }) => {
  // State for the selected breed type radio button, initialized to an empty string
  const [breedTypeRadioValue, setBreedTypeRadioValue] = useState("");

  // State for the selected services radio button, initialized to an empty string
  const [servicesRadioValue, setServicesRadioValue] = useState("");

  // State for the selected coat type radio button, initialized to an empty string
  const [coatTypeRadioValue, setCoatTypeRadioValue] = useState("");

  // State for the selected size radio button, initialized to an empty string
  const [sizeRadioValue, setSizeRadioValue] = useState("");

  // Function to update the breed type radio button value when a user selects a new option
  const updateBreedTypeRadioValue = (value) => {
    setBreedTypeRadioValue(value); // Sets the selected breed type value
    // Optional: console.log(value); // For debugging purposes, if you want to log the selected value
  };

  // Function to update the services radio button value when a user selects a new option
  const updateServicesRadioValue = (value) => {
    setServicesRadioValue(value); // Sets the selected service value
    // Optional: console.log(value); // For debugging purposes, if you want to log the selected value
  };

  // Function to update the coat type radio button value when a user selects a new option
  const updateCoatTypeRadioValue = (value) => {
    setCoatTypeRadioValue(value); // Sets the selected coat type value
    // Optional: console.log(value); // For debugging purposes, if you want to log the selected value
  };

  // Function to update the size radio button value when a user selects a new option
  const updateSizeRadioValue = (value) => {
    setSizeRadioValue(value); // Sets the selected size value
    // Optional: console.log(value); // For debugging purposes, if you want to log the selected value
  };

  // Providing the context to children components so that they can access the state and functions
  return (
    <RadioContext.Provider
      value={{
        breedTypeRadioValue, // The selected breed type value
        servicesRadioValue, // The selected service value
        coatTypeRadioValue, // The selected coat type value
        sizeRadioValue, // The selected size value
        updateBreedTypeRadioValue, // Function to update breed type radio value
        updateServicesRadioValue, // Function to update services radio value
        updateCoatTypeRadioValue, // Function to update coat type radio value
        updateSizeRadioValue, // Function to update size radio value
      }}
    >
      {children}{" "}
      {/* Render child components that can now access the radio button states */}
    </RadioContext.Provider>
  );
};
