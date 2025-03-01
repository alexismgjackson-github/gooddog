import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import { ScrollContext } from "../Context/scroll.jsx";
import { FormContext } from "../Context/form.jsx";
import { RadioContext } from "../Context/radio.jsx";
import "./NextSteps.css";

export default function NextSteps() {
  const { formData } = useContext(FormContext);

  const { breedTypeRadioValue, servicesRadioValue } = useContext(RadioContext);

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

  const [imageSource, setImageSource] = useState("");

  // generating a random dog image from array of urls

  const generateRandomUrl = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    setImageSource(imageUrls[randomIndex]);
  };

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/`);
  }

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="next-steps-container">
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
        <div className="next-steps">
          <h3>Booking Summary</h3>
          <ul className="next-steps-list">
            <li>
              Appointment Date:{" "}
              <span className="bold highlight"> {formData.apptDate}</span>{" "}
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
              Phone Number:{" "}
              <span className="bold highlight"> {formData.phone}</span>
            </li>
            <li>
              Email Address:{" "}
              <span className="bold highlight"> {formData.email}</span>
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
        <div className="random-dog-container">
          {" "}
          <img
            className="random-dog-img"
            src={imageSource}
            alt="Random cute dog"
          />
        </div>
        <div className="next-steps-btn-container">
          <button
            className="surprise-me-btn"
            onClick={generateRandomUrl}
            aria-label="Surprise me with doggies"
          >
            Surprise Me
          </button>

          <button
            className="next-steps next-btn"
            onClick={handleClick}
            aria-label="Book another appointment"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    </>
  );
}
