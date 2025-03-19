import data from "../src/size.js";
import SizeCard from "../components/Size/SizeCard.jsx";
import { Link, useNavigate } from "react-router";
import { useContext } from "react";
import { ScrollContext } from "../Context/scroll.jsx";
import "./Size.css";

export default function Size() {
  const sizes = data.map((size) => {
    return <SizeCard key={size.id} {...size} />;
  });

  const navigate = useNavigate();

  function handleSubmit() {
    navigate(`/confirmation`);
  }

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="size-container">
        <h1 className="animate__animated animate__flipInX">
          Choose a size type <span className="required">(required)</span>
        </h1>
        <form className="size-form" action={handleSubmit}>
          <div className="size-selection">{sizes}</div>
          <div className="size directional-btn-container">
            <button
              type="submit"
              className="size next-btn"
              aria-label="Proceed to confirmation"
            >
              Next
            </button>
          </div>
        </form>
        <div className="size directional-btn-container">
          <Link to="/">
            <button
              className="size back-btn"
              aria-label="Go back to coat types"
            >
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
