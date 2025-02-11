import { Link } from "react-router";
import { useContext, useState } from "react";
import { ScrollContext } from "../Context/scroll.jsx";
import "./Confirmation.css";

export default function Confirmation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    date: "",
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
  }

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="confirmation-container">
        <h1>Confirm your booking</h1>
        <form className="confirmation-form" onClick={handleSubmit}>
          <label htmlFor="">Owner's First Name (required)</label>
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
          <label htmlFor="">Owner's Last Name (required)</label>
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
          <label htmlFor="">Pet's Name (required)</label>
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
          <label htmlFor="">Email Address (required)</label>
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
          <label htmlFor="">Appointment Date (required)</label>
          <input
            type="date"
            name="appointmentDate"
            id="appointmentDate"
            required
          />
        </form>
        <div className="confirmation directional-btn-container">
          <Link to="/moreinfo">
            <button className="confirmation back-btn">Back</button>
          </Link>
          <Link to="/nextsteps">
            <button type="submit" className="confirmation next-btn">
              Next
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
