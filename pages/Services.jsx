import data from "../src/services.js";
import ServiceCard from "../components/Services/ServiceCard.jsx";
import { Link, useNavigate } from "react-router";
import { useContext } from "react";
import { ScrollContext } from "../Context/scroll.jsx";
import { RadioContext } from "../Context/radio.jsx";
import "./Services.css";

export default function Services() {
  /*const { updateServicesRadioValue } = useContext(RadioContext);

  const handleChange = (event) => {
    updateServicesRadioValue(event.target.value);
  };*/

  const services = data.map((dog) => {
    return <ServiceCard key={dog.id} {...dog} />;
  });

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/confirmation`);
  }

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="services-container">
        <h1 className="animate__animated animate__flipInX">
          Choose a service <span className="required">(required)</span>
        </h1>
        <form className="services-form" onSubmit={handleSubmit}>
          <div className="services-selection"> {services}</div>
          <div className="services directional-btn-container">
            <button type="submit" className="services next-btn">
              Next
            </button>
          </div>
        </form>
        <div className="services directional-btn-container">
          <Link to="/">
            <button className="services back-btn">Back</button>
          </Link>
        </div>
      </div>
    </>
  );
}
