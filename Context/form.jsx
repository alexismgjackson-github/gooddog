import { createContext, useState } from "react";

// Create a context for managing form data across the app
export const FormContext = createContext(null); // Initializes context with a default value of 'null'

// FormProvider component that wraps around other components to provide shared form data state
export const FormProvider = ({ children }) => {
  // State for holding the form data, initially an empty object
  const [formData, setFormData] = useState({});

  // Function to update form data when any field in the form changes
  const updateFormData = (data) => {
    setFormData(data); // Updates the form data with the new data object passed in
    // Optional: console.log(data); // For debugging purposes, you can log the data being passed
  };

  // Providing the context to child components so they can access and update the form data
  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}{" "}
      {/* Render child components, which can now access 'formData' and 'updateFormData' */}
    </FormContext.Provider>
  );
};
