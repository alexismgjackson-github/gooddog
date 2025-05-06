// Importing necessary hooks and context
import { useContext } from "react"; // React hook to access context and manage state
import { RadioContext } from "../../Context/radio"; // Importing the custom context for managing radio button values
import "./SizeCard.css"; // Importing custom CSS for styling the SizeCard component

export default function SizeCard(size) {
  // Using context to access the update function for the selected size
  const { updateSizeRadioValue } = useContext(RadioContext);

  // Handle the change in the radio button selection
  const handleChange = (event) => {
    updateSizeRadioValue(event.target.value); // Update the selected size in the context
  };

  return (
    <>
      {/* The label element is used to group the radio button with its description */}
      <label>
        <div className="size-card-container">
          <div className="size-card">
            <div className="size-card-header">
              {/* The radio input allows the user to select a size */}
              <input
                type="radio"
                name="size-radio" // All radio buttons with the same name are part of the same group
                id={size.id} // Using the size's id for unique identification of the input
                value={size.name} // The value associated with the selected radio button (size name)
                onChange={handleChange} // Trigger the handleChange function when the radio button is selected
                required // Ensures a selection is made before form submission
              />
              {/* Displaying the size name */}
              <h2>{size.name}</h2>
            </div>
            {/* Displaying the description of the size */}
            <p>{size.description}</p>
          </div>
        </div>
      </label>
    </>
  );
}
