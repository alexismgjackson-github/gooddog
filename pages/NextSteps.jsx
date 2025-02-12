import { Link } from "react-router";
import { useState, useContext } from "react";
import { ScrollContext } from "../Context/scroll.jsx";
import "./NextSteps.css";

export default function NextSteps() {
  const imageUrls = [
    "/public/assets/images/randomURL1.jpg",
    "/public/assets/images/randomURL2.jpg",
    "/public/assets/images/randomURL3.jpg",
    "/public/assets/images/randomURL4.jpg",
    "/public/assets/images/randomURL5.jpg",
    "/public/assets/images/randomURL6.jpg",
    "/public/assets/images/randomURL7.jpg",
    "/public/assets/images/randomURL8.jpg",
    "/public/assets/images/randomURL9.jpg",
    "/public/assets/images/randomURL10.jpg",
    "/public/assets/images/randomURL11.jpg",
    "/public/assets/images/randomURL12.jpg",
    "/public/assets/images/randomURL13.jpg",
    "/public/assets/images/randomURL14.jpg",
    "/public/assets/images/randomURL15.jpg",
    "/public/assets/images/randomURL16.jpg",
    "/public/assets/images/randomURL17.jpg",
    "/public/assets/images/randomURL18.jpg",
    "/public/assets/images/randomURL19.jpg",
    "/public/assets/images/randomURL20.jpg",
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
        <h1 className="animate__animated animate__flipInX">Next Steps</h1>
        <div className="next-steps">
          <p>
            Congratulations *OWNER NAME* You've booked a SERVICE* for *PETNAME*
            scheduled for *DATE*. The "*SERVICE*" of your *BREEDTYPE* dog will
            be starting at *PRICE* an hour.
          </p>
          <p>
            <span className="bold">Gooddog Grooming Services</span> will follow
            up with you via email or text to schedule a
            <span className="bold"> FREE 15-min Discovery Call.</span>
          </p>
          <p>
            We want to learn more about *PETNAME* (e.g. temperament, medical
            history, physical condition, favorite treats) so we can provide them
            with the <span className="bold">best tailored service.</span>
          </p>
          <p>
            We look forward to speaking with you and meeting *PETNAME* very
            soon!
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
