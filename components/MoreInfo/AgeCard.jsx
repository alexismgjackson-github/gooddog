import "./AgeCard.css";

export default function AgeCard(age) {
  return (
    <>
      <button className="age option-btn">{age.name}</button>
    </>
  );
}
