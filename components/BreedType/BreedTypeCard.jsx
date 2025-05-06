// Importing necessary libraries and components
import { useContext } from "react"; // React hook for consuming context
import { RadioContext } from "../../Context/radio"; // Importing RadioContext to manage radio button state
import "./BreedTypeCard.css"; // Importing the specific CSS for styling the BreedTypeCard component

export default function BreedTypeCard(dog) {
  // Using the context value for updating the selected breed type radio button value
  const { updateBreedTypeRadioValue } = useContext(RadioContext);

  // Function to handle changes when a radio button is selected
  const handleChange = (event) => {
    updateBreedTypeRadioValue(event.target.value); // Updates the context with the selected breed type value
  };

  return (
    <>
      <label>
        {/* Label that wraps the breed type card */}
        <div className="breed-type-card-container">
          {/* Container for individual breed type card */}
          <div className="breed-type-card">
            {/* Header section for the breed type card (includes the radio button) */}
            <div className="breed-type-card-header">
              {/* Radio button input for selecting a breed type */}
              <input
                type="radio" // Indicates a radio button
                name="breedtype-radio" // Group name to ensure only one can be selected
                id={dog.id} // Unique ID for each dog breed
                value={dog.name} // Value corresponds to the breed type name (used in the context)
                onChange={handleChange} // Calls handleChange to update context value when selected
                required // Makes the radio button a required input
              />
              {/* Body content of the breed type card, showing the breed name */}
              <div className="breed-type-body">
                <h2>{dog.name}</h2> {/* Display the breed type name */}
              </div>
            </div>
            {/* Image representing the breed type */}
            <img src={dog.url} alt={dog.name} />
          </div>
        </div>
      </label>
    </>
  );
}
