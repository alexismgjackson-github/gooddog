import { Link } from "react-router";
import { useContext } from "react";
import { ScrollContext } from "../Context/scroll.jsx";
import "./NextSteps.css";

export default function NextSteps() {
  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="next-steps-container">
        <h1 className="animate__animated animate__flipInX">Next Steps...</h1>
        <div className="next-steps">
          <h2>
            Congratulations! Your appointment for *NAME* is scheduled on *DATE*
          </h2>
          <h2>
            The "*SERVICE*" on a *BREEDTYPE* will be starting at *PRICE* an hour
          </h2>
          <p>
            <span className="bold">Gooddog Grooming Services</span> will follow
            up with you via email or text to schedule a{" "}
            <span className="bold">FREE 15-min Discovery Call.</span>
            <br />
            <br />
            We want to learn more about *PETNAME* (e.g. temperament, medical
            history, physical condition, favorite treats) so we can provide them
            with the <span className="bold">best tailored service.</span>
            <br />
            <br />
            We look forward to speaking with you and meeting *PETNAME* very
            soon!
          </p>
          <div className="next-steps-btn-container">
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
