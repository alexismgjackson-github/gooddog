// Importing necessary hooks and context
import { useContext } from "react"; // React hook to access context and manage component state
import { RadioContext } from "../../Context/radio"; // Importing the custom context for managing radio button values
import "./ServiceCard.css"; // Importing custom CSS for styling the ServiceCard component

export default function ServiceCard(service) {
  // Using context to access the update function for the selected service
  const { updateServicesRadioValue } = useContext(RadioContext);

  // Handle the change in the radio button selection
  const handleChange = (event) => {
    updateServicesRadioValue(event.target.value); // Update the selected service in the context
  };

  return (
    <>
      {/* The label element is used to group the radio button with its description */}
      <label>
        <div className="service-card-container">
          <div className="service-card">
            <div className="service-card-header">
              {/* The radio input allows the user to select a service */}
              <input
                type="radio"
                name="service-radio" // All radio buttons with the same name are part of the same group
                id={service.id} // Using the service's id for unique identification of the input
                value={service.name} // The value associated with the selected radio button
                onChange={handleChange} // Trigger the handleChange function when the radio button is selected
                required // Ensures a selection is made before form submission
              />
              {/* Displaying the service name */}
              <h2>{service.name}</h2>
            </div>
            {/* Displaying the description of the service */}
            <p>{service.description}</p>
            {/* Displaying the approximate duration of the service */}
            <p>(Approx {service.duration})</p>
          </div>
        </div>
      </label>
    </>
  );
}
