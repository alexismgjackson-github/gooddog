import { useState } from "react";
import "./ServiceCard.css";

export default function ServiceCard(service) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <label>
        <div className="service-card-container">
          <div className="service-card">
            <div className="service-card-header">
              <input
                type="radio"
                name="service-radio"
                id={service.id}
                value={service.name}
                onChange={handleRadioChange}
                required
              />
              <h2>{service.name}</h2>
            </div>
            <h3>Starts at ${service.price}</h3>
            <p>{service.description}</p>
            <p>(Approx {service.duration})</p>
          </div>
        </div>
      </label>
    </>
  );
}
