// Importing necessary libraries and components
import { useContext } from "react"; // React hook to consume context
import { RadioContext } from "../../Context/radio"; // Importing RadioContext to manage radio button state
import "./CoatCard.css"; // Importing the specific CSS for styling the CoatCard component

export default function CoatCard(coat) {
  // Using context value for updating the selected coat type radio button value
  const { updateCoatTypeRadioValue } = useContext(RadioContext);

  // Function to handle changes when a radio button is selected
  const handleChange = (event) => {
    // Updates the context with the selected coat type value
    updateCoatTypeRadioValue(event.target.value);
  };

  return (
    <>
      <label>
        {/* Label wrapping the individual coat type card */}
        <div className="coat-card-container">
          {/* Container for each coat type card */}
          <div className="coat-card">
            {/* Header section for the coat type card (includes the radio button) */}
            <div className="coat-card-header">
              {/* Radio button input for selecting a coat type */}
              <input
                type="radio" // Indicates this is a radio button
                name="coat-radio" // Group name to ensure only one radio button can be selected
                id={coat.id} // Unique ID for each coat type
                value={coat.name} // Value corresponds to the coat type name (used in context)
                onChange={handleChange} // Calls handleChange to update the context value when selected
                required // Makes the radio button a required input
              />
              {/* Coat name displayed as a header */}
              <h2>{coat.name}</h2>
            </div>
            {/* Description of the coat type */}
            <p>{coat.description}</p>
          </div>
        </div>
      </label>
    </>
  );
}
