// Importing required dependencies and components
import data from "../src/services.js"; // Service data (service options)
import ServiceCard from "../components/Services/ServiceCard.jsx"; // Component to render individual service cards
import { Link, useNavigate } from "react-router"; // For routing
import { useContext, useEffect } from "react"; // To manage context and lifecycle
import { ScrollContext } from "../Context/scroll.jsx"; // Custom context to manage scroll behavior
import "./Services.css"; // Styles specific to the Services component

export default function Services() {
  // Mapping through the data to create ServiceCard components for each service
  const services = data.map((service) => {
    return <ServiceCard key={service.id} {...service} />;
  });

  // Hook to navigate between pages
  const navigate = useNavigate();

  // Function to handle form submission and navigate to the next page
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    navigate(`/coat`); // Navigate to the coat page
  }

  // Scroll to the top when the page loads
  const { scrollToTop } = useContext(ScrollContext);

  useEffect(() => {
    scrollToTop(); // Ensures the page scrolls to the top when the component mounts
  }, []);

  return (
    <>
      <div className="services-container">
        {/* Heading for the services page */}
        <h1 className="animate__animated animate__flipInX">
          Choose a service <span className="required">(required)</span>
        </h1>

        {/* Form for selecting a service */}
        <form className="services-form" onSubmit={handleSubmit}>
          {" "}
          {/* Changed action to onSubmit */}
          <div className="services-selection">{services}</div>
          {/* Button to proceed to the next page */}
          <div className="services directional-btn-container">
            <button
              type="submit"
              className="services next-btn"
              aria-label="Proceed to coat types"
            >
              Next
            </button>
          </div>
        </form>

        {/* Button to go back to the previous page */}
        <div className="services directional-btn-container">
          <Link to="/">
            <button
              className="services back-btn"
              aria-label="Go back to breed types"
            >
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
