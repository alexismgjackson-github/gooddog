import "./SizeCard.css";

export default function SizeCard(size) {
  return (
    <>
      <div className="pseudo-btn">
        <label className="size-label">{size.name}</label>
        <input
          type="radio"
          name="size-radio"
          id={size.id}
          value={size.name}
          /*checked={selectedValue === `${dog.name}`}*/
          /*onChange={handleChange}*/
        />
      </div>
    </>
  );
}
