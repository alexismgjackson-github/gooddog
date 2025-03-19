import { createContext, useState } from "react";

export const FormContext = createContext(null);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({}); // initialize the state variable "formData" with empty object

  // update the "setFormData" by passing in values (strings)

  const updateFormData = (data) => {
    setFormData(data);
    console.log(data);
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
