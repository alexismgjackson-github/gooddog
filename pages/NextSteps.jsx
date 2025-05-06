// Importing required dependencies and components
import { useNavigate } from "react-router"; // For navigation between pages
import { useState, useContext, useEffect } from "react"; // React hooks for managing state and side effects
import { ScrollContext } from "../Context/scroll.jsx"; // Custom context to handle scroll position
import { FormContext } from "../Context/form.jsx"; // Custom context to manage form data
import { RadioContext } from "../Context/radio.jsx"; // Custom context to handle selected radio button values
import "./NextSteps.css"; // Importing custom styles for the next steps page

export default function NextSteps() {
  // Using FormContext to get form data
  const formContext = useContext(FormContext);

  const [formData, setFormData] = useState({}); // Local state for form data

  // Load form data from context or localStorage when the component mounts
  useEffect(() => {
    if (formContext?.formData && Object.keys(formContext.formData).length > 0) {
      setFormData(formContext.formData); // Use form data from context
    } else {
      // Fallback to localStorage if no form data in context
      const storedFormData = localStorage.getItem("formData");
      if (storedFormData) {
        setFormData(JSON.parse(storedFormData));
      }
    }
  }, [formContext]);

  // Getting radio button values from RadioContext
  const {
    breedTypeRadioValue,
    servicesRadioValue,
    coatTypeRadioValue,
    sizeRadioValue,
  } = useContext(RadioContext);

  // Array of random dog image URLs
  const imageUrls = [
    "/assets/images/randomURL1.jpg",
    "/assets/images/randomURL2.jpg",
    "/assets/images/randomURL3.jpg",
    "/assets/images/randomURL4.jpg",
    "/assets/images/randomURL5.jpg",
    "/assets/images/randomURL6.jpg",
    "/assets/images/randomURL7.jpg",
    "/assets/images/randomURL8.jpg",
    "/assets/images/randomURL9.jpg",
    "/assets/images/randomURL10.jpg",
    "/assets/images/randomURL11.jpg",
    "/assets/images/randomURL12.jpg",
    "/assets/images/randomURL13.jpg",
    "/assets/images/randomURL14.jpg",
    "/assets/images/randomURL15.jpg",
    "/assets/images/randomURL16.jpg",
    "/assets/images/randomURL17.jpg",
    "/assets/images/randomURL18.jpg",
    "/assets/images/randomURL19.jpg",
    "/assets/images/randomURL20.jpg",
    "/assets/images/randomURL21.jpg",
    "/assets/images/randomURL22.jpg",
    "/assets/images/randomURL23.jpg",
    "/assets/images/randomURL24.jpg",
    "/assets/images/randomURL25.jpg",
  ];

  const [imageSource, setImageSource] = useState(""); // Local state for the random dog image

  // Function to generate a random dog image
  const generateRandomUrl = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length); // Generate random index
    setImageSource(imageUrls[randomIndex]); // Set the random image URL
  };

  // navigate hook to move between pages
  const navigate = useNavigate();

  // Function to handle the "Book Another Appointment" button click
  function handleClick() {
    // Clear the form data from localStorage
    localStorage.removeItem("formData");
    localStorage.removeItem("radioValues");
    // Navigate back to the start page
    navigate("/");
  }

  // scrollToTop from ScrollContext to scroll to the top of the page on mount
  const { scrollToTop } = useContext(ScrollContext);

  useEffect(() => {
    scrollToTop(); // Ensures that the page scrolls to the top when the component mounts
  }, []);

  return (
    <>
      <div className="next-steps-container">
        {/* Heading for the next steps page */}
        <h1 className="animate__animated animate__flipInX">
          Next Steps{" "}
          <img
            src="/assets/icons/paw.svg"
            alt="Paw icon"
            className="next-steps-icon"
          />
          <img
            src="/assets/icons/paw.svg"
            alt="Paw icon"
            className="next-steps-icon"
          />
        </h1>

        {/* Booking Summary Section */}
        <div className="next-steps">
          <h3>Booking Summary</h3>
          <ul className="next-steps-list">
            <li>
              Appointment Date:{" "}
              <span className="bold highlight">{formData.apptDate}</span>
            </li>
            <li>
              Service & Hourly Rate:{" "}
              <span className="bold highlight">{servicesRadioValue}</span>
            </li>
            <li>
              Dog's Name:{" "}
              <span className="bold highlight">{formData.dogName}</span>
            </li>
            <li>
              Owner's Name:{" "}
              <span className="bold highlight">
                {formData.firstName} {formData.lastName}
              </span>
            </li>
            <li>
              Breed Type:{" "}
              <span className="bold highlight">{breedTypeRadioValue}</span>
            </li>
            <li>
              Coat Type:{" "}
              <span className="bold highlight">{coatTypeRadioValue}</span>
            </li>
            <li>
              Size (Weight):{" "}
              <span className="bold highlight">{sizeRadioValue}</span>
            </li>
            <li>
              Phone Number:{" "}
              <span className="bold highlight">{formData.phone}</span>
            </li>
            <li>
              Email Address:{" "}
              <span className="bold highlight">{formData.email}</span>
            </li>
          </ul>
          <hr />
          <p>
            Hello {formData.firstName}! Thank you for booking with us today!
            <span className="bold"> Gooddog Grooming Services</span> will follow
            up with you via email or text to schedule a
            <span className="bold"> FREE 15-min Discovery Call.</span>
          </p>
          <p>
            <span className="bold">
              We want to learn more about {formData.dogName}
            </span>{" "}
            (e.g. temperament, medical history, physical condition, favorite
            treats) so we can provide them with the{" "}
            <span className="bold">best tailored service.</span>
          </p>
          <p>
            We look forward to speaking with you and meeting {formData.dogName}{" "}
            very soon!
          </p>
          <hr />
        </div>

        {/* Random Dog Image */}
        <div className="random-dog-container">
          <img className="random-dog-img" src={imageSource || null} alt="" />
        </div>

        {/* Buttons for further actions */}
        <div className="next-steps-btn-container">
          <button
            className="surprise-me-btn"
            onClick={generateRandomUrl} // Calls the function to show a random dog image
            aria-label="Surprise me with doggies"
          >
            Surprise Me
          </button>

          <button
            className="next-steps next-btn"
            onClick={handleClick} // Clears data and navigates back to the start page
            aria-label="Book another appointment"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    </>
  );
}
