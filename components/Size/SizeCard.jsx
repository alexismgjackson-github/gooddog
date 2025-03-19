import { useContext } from "react";
import { RadioContext } from "../../Context/radio";
import "./SizeCard.css";

export default function SizeCard(size) {
  const { updateSizeRadioValue } = useContext(RadioContext);

  // update the context value when a user interacts with the radio buttons

  const handleChange = (event) => {
    updateSizeRadioValue(event.target.value);
  };

  return (
    <>
      <label>
        <div className="size-card-container">
          <div className="size-card">
            <div className="size-card-header">
              <input
                type="radio"
                name="size-radio"
                id={size.id}
                value={size.name}
                onChange={handleChange}
                required
              />
              <h2>{size.name}</h2>
            </div>
            <p>{size.description}</p>
          </div>
        </div>
      </label>
    </>
  );
}
