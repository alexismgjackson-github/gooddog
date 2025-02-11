import "./CoatCard.css";

export default function CoatCard(coat) {
  return (
    <>
      <div className="pseudo-btn">
        <label className="coat-label">{coat.name}</label>
        <input
          type="radio"
          name="coat-radio"
          id={coat.id}
          value={coat.name}
          /*checked={selectedValue === `${dog.name}`}*/
          /*onChange={handleChange}*/
        />
      </div>
    </>
  );
}
