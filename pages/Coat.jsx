// Importing necessary modules and components
import data from "../src/coat.js"; // Importing coat data
import CoatCard from "../components/Coat/CoatCard.jsx"; // Importing CoatCard component to display each coat option
import { Link, useNavigate } from "react-router"; // Importing navigation hooks for routing
import { useContext, useEffect } from "react"; // Importing React hooks to manage state and side-effects
import { ScrollContext } from "../Context/scroll.jsx"; // Importing ScrollContext to manage page scroll behavior
import "./Coat.css"; // Importing custom CSS for styling the Coat component

export default function Coat() {
  // Mapping through coat data and rendering CoatCard component for each coat type
  const coats = data.map((coat) => {
    return <CoatCard key={coat.id} {...coat} />; // Passing individual coat data as props to each CoatCard
  });

  // Use navigate hook to enable navigation between routes (pages)
  const navigate = useNavigate();

  // Function to handle the form submission and navigate to the size selection page
  function handleSubmit() {
    navigate(`/size`); // Navigates to the size page when the form is submitted
  }

  // Using ScrollContext to get the scrollToTop function for smooth scroll management
  const { scrollToTop } = useContext(ScrollContext);

  // useEffect hook to scroll the page to the top on initial render
  useEffect(() => {
    scrollToTop(); // Scroll to the top whenever this component is loaded
  }, []); // Empty dependency array ensures this effect runs only once when the component is mounted

  return (
    <>
      {/* Main container for coat type selection */}
      <div className="coat-container">
        {/* Heading for coat selection with a required indicator */}
        <h1 className="animate__animated animate__flipInX">
          Choose a coat type <span className="required">(required)</span>
        </h1>

        {/* Form to select a coat type, triggers handleSubmit on form submission */}
        <form className="coat-form" action={handleSubmit}>
          {/* Render a list of CoatCard components based on the imported data */}
          <div className="coat-selection">{coats}</div>

          {/* Container for the "Next" button that submits the form and proceeds to the size page */}
          <div className="coat directional-btn-container">
            <button
              type="submit" // Submit type to trigger the form submission
              className="coat next-btn" // Styling class for the "Next" button
              aria-label="Proceed to dog sizes" // Accessibility label for the button
            >
              Next
            </button>
          </div>
        </form>

        {/* Container for the "Back" button to navigate back to the services page */}
        <div className="coat directional-btn-container">
          <Link to="/services">
            {" "}
            {/* Using Link from react-router to create a back navigation */}
            <button
              className="coat back-btn" // Styling class for the "Back" button
              aria-label="Go back to services" // Accessibility label for the back button
            >
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
