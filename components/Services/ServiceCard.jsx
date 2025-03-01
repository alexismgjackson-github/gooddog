import { useContext } from "react";
import { RadioContext } from "../../Context/radio";
import "./ServiceCard.css";

export default function ServiceCard(service) {
  const { updateServicesRadioValue } = useContext(RadioContext);

  const handleChange = (event) => {
    updateServicesRadioValue(event.target.value);
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
                onChange={handleChange}
                required
              />
              <h2>{service.name}</h2>
            </div>
            <p>{service.description}</p>
            <p>(Approx {service.duration})</p>
          </div>
        </div>
      </label>
    </>
  );
}
