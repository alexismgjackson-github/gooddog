// import { useContext } from "react";
import { useState } from "react";
import "./ServiceCard.css";

export default function ServiceCard(service) {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

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
            <h2>{service.name}</h2>
            <h3>Starts at ${service.price}</h3>
            <p>{service.description}</p>
            <p>(Approx {service.duration})</p>
            <div className="pseudo-btn" onClick={handleToggle}>
              <label className="pseudo-btn-label" htmlFor={service.id}>
                {isToggled ? "Unselect" : "Select"}
              </label>
              <input
                type="radio"
                name="service-radio"
                id={service.id}
                value={service.name}
                onChange={handleRadioChange}
                required
              />
            </div>
          </div>
        </div>
      </label>
    </>
  );
}
