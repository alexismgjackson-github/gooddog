import { Link, useNavigate } from "react-router";
import { useContext, useState, useEffect } from "react";
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
  const [minDate, setMinDate] = useState("");

  const navigate = useNavigate();

  // updates state of confirmation's form data, persists data to LocalStorage and navigates to next page

  function handleSubmit() {
    const data = { firstName, lastName, dogName, email, apptDate, phone };
    updateFormData(data); // update context
    localStorage.setItem("formData", JSON.stringify(data)); // save to localStorage
    navigate(`/nextsteps`);
  }

  // scrolls the page to the top

  const { scrollToTop } = useContext(ScrollContext);

  useEffect(() => {
    scrollToTop();
  }, []);

  // calculates today's date, setting it as the minimum allowable date for the input field

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Get date part only (YYYY-MM-DD)
    setMinDate(formattedDate);
  }, []);

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
            min={minDate}
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
          <Link to="/size">
            <button
              className="confirmation back-btn"
              aria-label="Back to dog sizes"
            >
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
