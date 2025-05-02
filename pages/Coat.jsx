import data from "../src/coat.js";
import CoatCard from "../components/Coat/CoatCard.jsx";
import { Link, useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { ScrollContext } from "../Context/scroll.jsx";
import "./Coat.css";

export default function Coat() {
  const coats = data.map((coat) => {
    return <CoatCard key={coat.id} {...coat} />;
  });

  // navigates to the next page

  const navigate = useNavigate();

  function handleSubmit() {
    navigate(`/size`);
  }

  // scrolls the page to the top

  const { scrollToTop } = useContext(ScrollContext);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <div className="coat-container">
        <h1 className="animate__animated animate__flipInX">
          Choose a coat type <span className="required">(required)</span>
        </h1>
        <form className="coat-form" action={handleSubmit}>
          <div className="coat-selection">{coats}</div>
          <div className="coat directional-btn-container">
            <button
              type="submit"
              className="coat next-btn"
              aria-label="Proceed to dog sizes"
            >
              Next
            </button>
          </div>
        </form>
        <div className="coat directional-btn-container">
          <Link to="/services">
            <button className="coat back-btn" aria-label="Go back to services">
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
