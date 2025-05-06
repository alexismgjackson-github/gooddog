// Importing necessary libraries and components
import { Link, useNavigate } from "react-router"; // React Router for navigation
import { useContext, useState, useEffect } from "react"; // React hooks for managing state and side effects
import { ScrollContext } from "../Context/scroll.jsx"; // Custom context to manage scroll behavior
import { FormContext } from "../Context/form.jsx"; // Custom context to manage form data
import "./Confirmation.css"; // Importing custom CSS for styling the confirmation page

export default function Confirmation() {
  // Extracting the updateFormData function from FormContext to save the form data in the global state
  const { updateFormData } = useContext(FormContext);

  // Initializing state variables for the form fields using the useState hook
  const [firstName, setFirstName] = useState(""); // Stores the first name of the owner
  const [lastName, setLastName] = useState(""); // Stores the last name of the owner
  const [dogName, setDogName] = useState(""); // Stores the name of the dog
  const [email, setEmail] = useState(""); // Stores the owner's email address
  const [apptDate, setApptDate] = useState(""); // Stores the selected appointment date
  const [phone, setPhone] = useState(""); // Stores the owner's phone number
  const [minDate, setMinDate] = useState(""); // Stores the minimum allowable date for the appointment

  // Use the useNavigate hook to navigate to different pages
  const navigate = useNavigate();

  // Function to handle form submission: Updates global state, saves data to LocalStorage, and navigates to next page
  function handleSubmit() {
    // Creating an object with all the form data
    const data = { firstName, lastName, dogName, email, apptDate, phone };

    // Update the global form data state via FormContext
    updateFormData(data);

    // Save the form data in LocalStorage for persistence across sessions
    localStorage.setItem("formData", JSON.stringify(data));

    // Navigate to the next step page (nextsteps)
    navigate(`/nextsteps`);
  }

  // Using ScrollContext to get the scrollToTop function for smooth scrolling
  const { scrollToTop } = useContext(ScrollContext);

  // UseEffect to scroll the page to the top whenever the Confirmation page is loaded
  useEffect(() => {
    scrollToTop();
  }, []);

  // useEffect to calculate and set today's date as the minimum date for the appointment
  useEffect(() => {
    const today = new Date(); // Get today's date
    const formattedDate = today.toISOString().split("T")[0]; // Format date as YYYY-MM-DD
    setMinDate(formattedDate); // Set today's date as the minimum date for the input field
  }, []);

  return (
    <>
      {/* Main container for the confirmation page */}
      <div className="confirmation-container">
        {/* Heading for the confirmation page */}
        <h1 className="animate__animated animate__flipInX">Confirm booking</h1>

        {/* The confirmation form */}
        <form className="confirmation-form" action={handleSubmit}>
          {/* Input for Owner's First Name */}
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

          {/* Input for Owner's Last Name */}
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

          {/* Input for Dog's Name */}
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

          {/* Input for Email Address */}
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
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" // Basic email pattern validation
            spellCheck="false"
            autoComplete="off"
            required
          />

          {/* Input for Phone Number */}
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
            pattern="^[0-9]+$" // Only digits allowed
            spellCheck="false"
            autoComplete="off"
            required
          />

          {/* Input for Appointment Date with minimum date set to today's date */}
          <label htmlFor="apptDate">
            Appointment Date <span className="required">(required)</span>
          </label>
          <input
            type="date"
            value={apptDate}
            onChange={(event) => setApptDate(event.target.value)}
            name="apptDate"
            id="apptDate"
            min={minDate} // Ensures the date cannot be earlier than today's date
            required
          />

          {/* Submit button to confirm and submit the form */}
          <button
            type="submit"
            className="confirmation next-btn"
            aria-label="Submit form details"
          >
            Submit
          </button>
        </form>

        {/* Button to navigate back to the previous step (size selection) */}
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
