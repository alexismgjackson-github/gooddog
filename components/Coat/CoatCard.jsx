import { useContext } from "react";
import { RadioContext } from "../../Context/radio";
import "./CoatCard.css";

export default function CoatCard(coat) {
  const { updateCoatTypeRadioValue } = useContext(RadioContext);

  // update the context value when a user interacts with the radio buttons

  const handleChange = (event) => {
    updateCoatTypeRadioValue(event.target.value);
  };

  return (
    <>
      <label>
        <div className="service-card-container">
          <div className="service-card">
            <div className="service-card-header">
              <input
                type="radio"
                name="service-radio"
                id={coat.id}
                value={coat.name}
                onChange={handleChange}
                required
              />
              <h2>{coat.name}</h2>
            </div>
            <p>{coat.description}</p>
          </div>
        </div>
      </label>
    </>
  );
}
