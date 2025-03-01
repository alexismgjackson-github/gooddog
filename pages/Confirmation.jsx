import { Link, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { ScrollContext } from "../Context/scroll.jsx";
import { FormContext } from "../Context/form.jsx";
import "./Confirmation.css";

export default function Confirmation() {
  const { updateFormData } = useContext(FormContext);

  // initialize the state variables of the confirmation's form data with empty strings

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dogName, setDogName] = useState("");
  const [email, setEmail] = useState("");
  const [apptDate, setApptDate] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  // updating state of confirmation's form data and navigating to next page

  function handleSubmit() {
    updateFormData({ firstName, lastName, dogName, email, apptDate, phone });
    navigate(`/nextsteps`);
  }

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="confirmation-container">
        <h1 className="animate__animated animate__flipInX">Confirm booking</h1>
        <form className="confirmation-form" action={handleSubmit}>
          <label htmlFor="firstName">
            Owner's First Name <span className="required">(required)</span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            name="firstName"
            id="firstName"
            className="contact-form-input"
            spellCheck="false"
            required
          />
          <label htmlFor="lastName">
            Owner's Last Name <span className="required">(required)</span>
          </label>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            name="lastName"
            id="lastName"
            className="contact-form-input"
            spellCheck="false"
            required
          />
          <label htmlFor="dogName">
            Dog's Name <span className="required">(required)</span>
          </label>
          <input
            type="text"
            placeholder="Dog's Name"
            value={dogName}
            onChange={(event) => setDogName(event.target.value)}
            name="dogName"
            id="dogName"
            className="contact-form-input"
            spellCheck="false"
            required
          />
          <label htmlFor="email">
            Email Address <span className="required">(required)</span>
          </label>
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="email"
            id="email"
            className="contact-form-input"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            spellCheck="false"
            autoComplete="off"
            required
          />
          <label htmlFor="phone">
            Phone Number <span className="required">(required)</span>
          </label>
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            name="phone"
            id="phone"
            className="contact-form-input"
            minLength={10}
            maxLength={10}
            pattern="^[0-9]+$"
            spellCheck="false"
            autoComplete="off"
            required
          />
          <label htmlFor="apptDate">
            Appointment Date <span className="required">(required)</span>
          </label>
          <input
            type="date"
            value={apptDate}
            onChange={(event) => setApptDate(event.target.value)}
            name="apptDate"
            id="apptDate"
            required
          />
          <button
            type="submit"
            className="confirmation next-btn"
            aria-label="Submit form details"
          >
            Submit
          </button>
        </form>
        <div className="confirmation directional-btn-container">
          <Link to="/services">
            <button
              className="confirmation back-btn"
              aria-label="Back to grooming services"
            >
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
