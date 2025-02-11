import "./SizeCard.css";

export default function SizeCard(size) {
  return (
    <>
      <button className="size option-btn">{size.name}</button>
    </>
  );
}
