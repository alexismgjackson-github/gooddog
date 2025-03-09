import { useContext } from "react";
import { RadioContext } from "../../Context/radio";
import "./BreedTypeCard.css";

export default function BreedTypeCard(dog) {
  const { updateBreedTypeRadioValue } = useContext(RadioContext);

  // update the context value when a user interacts with the radio buttons

  const handleChange = (event) => {
    updateBreedTypeRadioValue(event.target.value);
  };

  return (
    <>
      <label>
        <div className="breed-type-card-container">
          <div className="breed-type-card">
            <div className="breed-type-card-header">
              <input
                type="radio"
                name="breedtype-radio"
                id={dog.id}
                value={dog.name}
                onChange={handleChange}
                required
              />
              <div className="breed-type-body">
                <h2>{dog.name}</h2>
              </div>
            </div>
            <img src={dog.url} alt={dog.name} />
          </div>
        </div>
      </label>
    </>
  );
}
