import { Link } from "react-router";
import { useState, useContext } from "react";
import { ScrollContext } from "../Context/scroll.jsx";
import { FormContext } from "../Context/form.jsx";
import "./NextSteps.css";

export default function NextSteps() {
  const { formData } = useContext(FormContext);

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

  const generateRandomUrl = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    setImageSource(imageUrls[randomIndex]);
  };

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
              Dog's Name: <span className="bold">{formData.dogName}</span>
            </li>
            <li>
              Owner's Name:{" "}
              <span className="bold">
                {formData.firstName} {formData.lastName}
              </span>
            </li>
            <li>
              Breed Type: <span className="bold highlight">*BREEDTYPE*</span>
            </li>
            <li>
              Service: <span className="bold highlight">*SERVICE*</span>
            </li>
            <li>
              Est. Hourly Base Rate:{" "}
              <span className="bold highlight">*PRICE*</span>
            </li>
            <li>
              Phone Number:{" "}
              <span className="bold highlight"> {formData.phone}</span>
            </li>
            <li>
              Email Address:{" "}
              <span className="bold highlight"> {formData.email}</span>
            </li>
            <li>
              Appointment Date:{" "}
              <span className="bold highlight"> {formData.apptDate}</span>{" "}
            </li>
          </ul>
          <p>
            Hello {formData.firstName}. Thank you for booking with us today!
            <span className="bold"> Gooddog Grooming Services</span> will follow
            up with you via email or text to schedule a
            <span className="bold"> FREE 15-min Discovery Call.</span>
          </p>
          <p>
            We want to learn more about {formData.dogName} (e.g. temperament,
            medical history, physical condition, favorite treats) so we can
            provide them with the{" "}
            <span className="bold">best tailored service.</span>
          </p>
          <p>
            We look forward to speaking with you and meeting {formData.dogName}{" "}
            very soon!
          </p>
          <div className="random-dog-container">
            {" "}
            <img className="random-dog-img" src={imageSource} alt="" />
          </div>
          <div className="next-steps-btn-container">
            <button className="surprise-me-btn" onClick={generateRandomUrl}>
              Surprise Me
            </button>
            <Link to="/">
              <button className="next-steps next-btn">
                Book Another Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
