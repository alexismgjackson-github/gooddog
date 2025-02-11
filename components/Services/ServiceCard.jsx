// import { useContext } from "react";
import "./ServiceCard.css";

export default function ServiceCard(service) {
  /*const [selectedValue, setSelectedValue] = useContext(RadioContext);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };*/

  return (
    <>
      <label>
        <div className="service-card-container">
          <div className="service-card">
            <div className="service-card-header">
              <h2>
                {service.name} - ${service.price}
              </h2>
            </div>

            <p>{service.description}</p>
            <input
              type="radio"
              name="service-radio"
              id={service.id}
              value={service.name}
              /*checked={selectedValue === `${service.name}`}*/
              /*onChange={handleChange}*/
            />
          </div>
        </div>
      </label>
    </>
  );
}
