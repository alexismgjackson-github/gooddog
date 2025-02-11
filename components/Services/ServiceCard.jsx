import "./ServiceCard.css";

export default function ServiceCard(service) {
  return (
    <>
      <div className="service-card-container">
        <div className="service-card">
          <h2>{service.name}</h2>
          <span>***Starting at ${service.price} per hour</span>
          <p>{service.description}</p>
        </div>
      </div>
    </>
  );
}
