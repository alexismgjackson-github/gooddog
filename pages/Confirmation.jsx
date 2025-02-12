import { Link, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { ScrollContext } from "../Context/scroll.jsx";
import "./Confirmation.css";

export default function Confirmation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    petName: "",
    email: "",
    date: "",
    phone: "",
  });

  const [isValid, setIsValid] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsValid(true);
    formData.firstName = "";
    formData.lastName = "";
    formData.petName = "";
    formData.email = "";
    formData.date = "";
    formData.phone = "";
    navigate(`/nextsteps`);
  }

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  const navigate = useNavigate();

  return (
    <>
      <div className="confirmation-container">
        <h1>Confirm your booking</h1>
        <form className="confirmation-form" onSubmit={handleSubmit}>
          <label htmlFor="">
            Owner's First Name <span className="required">(required)</span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
            className="contact-form-input"
            spellCheck="false"
            required
          />
          <label htmlFor="">
            Owner's Last Name <span className="required">(required)</span>
          </label>
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
            className="contact-form-input"
            spellCheck="false"
            required
          />
          <label htmlFor="">
            Pet's Name <span className="required">(required)</span>
          </label>
          <input
            type="text"
            placeholder="Pet's Name"
            onChange={handleChange}
            name="petName"
            value={formData.petName}
            className="contact-form-input"
            spellCheck="false"
            required
          />
          <label htmlFor="">
            Email Address <span className="required">(required)</span>
          </label>
          <input
            type="text"
            placeholder="Email Address"
            onChange={handleChange}
            name="email"
            value={formData.email}
            className="contact-form-input"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            spellCheck="false"
            required
          />
          <label htmlFor="">
            Phone Number <span className="required">(required)</span>
          </label>
          <input
            type="tel"
            placeholder="123-123-1234"
            onChange={handleChange}
            name="phone"
            value={formData.phone}
            className="contact-form-input"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            spellCheck="false"
            required
          />
          <label htmlFor="">
            Appointment Date <span className="required">(required)</span>
          </label>
          <input
            type="date"
            name="appointmentDate"
            id="appointmentDate"
            required
          />
          <button className="confirmation next-btn">Submit</button>
        </form>
        <div className="confirmation directional-btn-container">
          <Link to="/services">
            <button className="confirmation back-btn">Back</button>
          </Link>
        </div>
      </div>
    </>
  );
}
