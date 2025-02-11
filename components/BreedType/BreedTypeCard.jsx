import "./BreedTypeCard.css";

export default function BreedTypeCard(dog) {
  /*const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };*/

  return (
    <>
      <label>
        <div className="breed-type-card-container">
          <div className="breed-type-card">
            <h2>{dog.name}</h2>
            <p>(e.g. {dog.examples})</p>
            <img src={dog.url} alt={dog.name} />
            <input
              type="radio"
              name="breedtype-radio"
              id={dog.id}
              value={dog.name}
              /*checked={selectedValue === `${dog.name}`}*/
              /*onChange={handleChange}*/
            />
          </div>
        </div>
      </label>
    </>
  );
}
