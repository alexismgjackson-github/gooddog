import "./AgeCard.css";

export default function AgeCard(age) {
  return (
    <>
      <div className="pseudo-btn">
        <label className="age-label">{age.name}</label>
        <input
          type="radio"
          name="age-radio"
          id={age.id}
          value={age.name}
          /*checked={selectedValue === `${dog.name}`}*/
          /*onChange={handleChange}*/
        />
      </div>
    </>
  );
}
