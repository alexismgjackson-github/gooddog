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
        <h1>Next Steps</h1>
        <div className="next-steps-selection"></div>
        <div className="next-steps-btn-container">
          <Link to="/">
            <button className="next-steps next-btn">
              Book Another Appointment
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
