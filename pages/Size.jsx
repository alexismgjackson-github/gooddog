// Importing required dependencies and components
import data from "../src/size.js"; // Size data (size options)
import SizeCard from "../components/Size/SizeCard.jsx"; // Component to render individual size cards
import { Link, useNavigate } from "react-router"; // For routing
import { useContext, useEffect } from "react"; // To manage context and lifecycle
import { ScrollContext } from "../Context/scroll.jsx"; // Custom context to manage scroll behavior
import "./Size.css"; // Styles specific to the Size component

export default function Size() {
  // Mapping over the size data to render individual size cards
  const sizes = data.map((size) => {
    return <SizeCard key={size.id} {...size} />;
  });

  // Navigation function to move to the confirmation page
  const navigate = useNavigate();
  function handleSubmit() {
    navigate(`/confirmation`);
  }

  // Use ScrollContext to scroll the page to the top when the component mounts
  const { scrollToTop } = useContext(ScrollContext);
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <div className="size-container">
        <h1 className="animate__animated animate__flipInX">
          Choose a size type <span className="required">(required)</span>
        </h1>
        {/* Form to handle size selection */}
        <form className="size-form" action={handleSubmit}>
          <div className="size-selection">{sizes}</div>
          {/* Button to submit the form and move to the next page */}
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
        {/* Back button to navigate back to coat types */}
        <div className="size directional-btn-container">
          <Link to="/coat">
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
