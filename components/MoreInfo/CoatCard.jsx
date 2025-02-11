import "./CoatCard.css";

export default function CoatCard(coat) {
  return (
    <>
      <button className="coat option-btn">{coat.name}</button>
    </>
  );
}
