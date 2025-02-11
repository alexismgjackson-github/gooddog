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
  });

  const [firstNameMessage, setFirstNameMessage] = useState("");
  const [lastNameMessage, setLastNameMessage] = useState("");
  const [petNameMessage, setPetNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
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

    if (formData.firstName.length > 0) {
      // console.log("First name is valid");
      setFullNameMessage("Full name successfully submitted!");
      formData.firstName = "";
      setIsValid(true);
    }

    if (formData.lastName.length > 0) {
      // console.log("First name is valid");
      setFullNameMessage("Full name successfully submitted!");
      formData.lastName = "";
      setIsValid(true);
    }

    if (formData.email.length > 0) {
      // console.log("Email is valid");
      setEmailMessage("Email successfully submitted!");
      formData.email = "";
      setIsValid(true);
    }
  }

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="confirmation-container">
        <h1>Confirm your booking</h1>
        <form className="confirmation-form" onClick={handleSubmit}>
          <label htmlFor="">Owner's First Name (required)</label>
          {firstNameMessage && (
            <span
              className={`contact-message ${
                isValid == true ? "contact-success" : "contact-error"
              }`}
            >
              {firstNameMessage}
            </span>
          )}
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
          {lastNameMessage && (
            <span
              className={`contact-message ${
                isValid == true ? "contact-success" : "contact-error"
              }`}
            >
              {lastNameMessage}
            </span>
          )}
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
          {petNameMessage && (
            <span
              className={`contact-message ${
                isValid == true ? "contact-success" : "contact-error"
              }`}
            >
              {petNameMessage}
            </span>
          )}
          <input
            type="text"
            placeholder="Pet Name"
            onChange={handleChange}
            name="lastName"
            value={formData.petName}
            className="contact-form-input"
            spellCheck="false"
            required
          />
          <label htmlFor="">Email Address (required)</label>
          {emailMessage && (
            <span
              className={`contact-message ${
                isValid == true ? "contact-success" : "contact-error"
              }`}
            >
              {emailMessage}
            </span>
          )}
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
        </form>
        <div className="confirmation directional-btn-container">
          <Link to="/moreinfo">
            <button className="confirmation back-btn">Back</button>
          </Link>
          <Link to="/receipt">
            <button type="submit" className="confirmation next-btn">
              Next
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
