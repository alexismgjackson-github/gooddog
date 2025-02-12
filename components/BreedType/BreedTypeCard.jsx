// import { useState } from "react";
import "./BreedTypeCard.css";

export default function BreedTypeCard(dog, selectedValue, handleRadioChange) {
  return (
    <>
      <label>
        <div className="breed-type-card-container">
          <div className="breed-type-card">
            <h2>{dog.name}</h2>
            <img src={dog.url} alt={dog.name} />
            <div className="pseudo-btn">
              <label className="pseudo-btn-label" htmlFor={dog.id}>
                Select
              </label>
              <input
                type="radio"
                name="breedtype-radio"
                id={dog.id}
                value={dog.name}
                onChange={handleRadioChange}
                required
              />
            </div>
          </div>
        </div>
      </label>
    </>
  );
}
