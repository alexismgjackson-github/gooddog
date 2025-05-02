import data from "../src/services.js";
import ServiceCard from "../components/Services/ServiceCard.jsx";
import { Link, useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { ScrollContext } from "../Context/scroll.jsx";
import "./Services.css";

export default function Services() {
  const services = data.map((service) => {
    return <ServiceCard key={service.id} {...service} />;
  });

  // navigates to the next page

  const navigate = useNavigate();

  function handleSubmit() {
    navigate(`/coat`);
  }

  // scrolls the page to the top

  const { scrollToTop } = useContext(ScrollContext);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <div className="services-container">
        <h1 className="animate__animated animate__flipInX">
          Choose a service <span className="required">(required)</span>
        </h1>
        <form className="services-form" action={handleSubmit}>
          <div className="services-selection">{services}</div>
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
