import { useState } from "react";
import "./BreedTypeCard.css";

export default function BreedTypeCard(dog) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
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
                onChange={handleRadioChange}
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
