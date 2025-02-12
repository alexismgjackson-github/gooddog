import data from "../src/services.js";
import ServiceCard from "../components/Services/ServiceCard.jsx";
import { Link } from "react-router";
import { useContext } from "react";
import { ScrollContext } from "../Context/scroll.jsx";
import "./Services.css";

export default function Services() {
  const services = data.map((dog) => {
    return <ServiceCard key={dog.id} {...dog} />;
  });

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="services-container">
        <h1 className="animate__animated animate__flipInX">
          Choose a service <span className="required">(required)</span>
        </h1>
        <form className="services-form">{services}</form>
        <div className="services directional-btn-container">
          <Link to="/">
            <button className="services back-btn">Back</button>
          </Link>
          <Link to="/confirmation">
            <button className="services next-btn">Next</button>
          </Link>
        </div>
      </div>
    </>
  );
}
