// Import necessary modules and components
import data from "../src/breedtype.js"; // Import breed type data
import BreedTypeCard from "../components/BreedType/BreedTypeCard.jsx"; // Import the BreedTypeCard component
import { useNavigate } from "react-router"; // Import navigate hook for routing
import { useContext, useEffect } from "react"; // Import hooks for state and side-effects
import { ScrollContext } from "../Context/scroll.jsx"; // Import scroll context to manage scroll behavior
import "./BreedType.css"; // Import custom CSS for styling

export default function BreedType() {
  // Map through the imported breed type data to render each BreedTypeCard component
  const dogBreedTypes = data.map((dog) => {
    return <BreedTypeCard key={dog.id} {...dog} />; // Pass individual breed type props to each BreedTypeCard
  });

  // useNavigate hook allows for navigation to different routes
  const navigate = useNavigate();

  // Function to handle form submission and navigate to the next page (services page)
  function handleSubmit() {
    navigate(`/services`); // Navigates to the services page when the form is submitted
  }

  // Use the ScrollContext to get the scrollToTop function to manage page scrolling
  const { scrollToTop } = useContext(ScrollContext);

  // Using useEffect to scroll the page to the top whenever the component is loaded
  useEffect(() => {
    scrollToTop(); // Scrolls the page to the top when the component is mounted
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      {/* Main container for breed type selection */}
      <div className="breedtype-container">
        <h1 className="animate__animated animate__flipInX">
          Select a breed type <span className="required">(required)</span>
        </h1>

        {/* Form for breed type selection, triggers handleSubmit function on submit */}
        <form className="breedtype-form" action={handleSubmit}>
          {/* Displays the list of BreedTypeCard components */}
          <div className="breedtype-selection">{dogBreedTypes}</div>

          {/* Container for the navigation button to proceed to the services page */}
          <div className="breedtype directional-btn-container">
            <button
              type="submit" // Button will trigger the form submission
              className="breedtype next-btn" // Button styling class
              aria-label="Proceed to services" // Accessibility label for the button
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
