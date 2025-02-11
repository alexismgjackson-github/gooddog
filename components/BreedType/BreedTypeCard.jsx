import "./BreedTypeCard.css";

export default function BreedTypeCard(dog) {
  return (
    <>
      <div className="breed-type-card-container">
        <div className="breed-type-card">
          <h2>{dog.name}</h2>
          <p>(Examples: {dog.examples})</p>
          <img src={dog.url} alt={dog.name} />
        </div>
      </div>
    </>
  );
}
