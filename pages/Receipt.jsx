import { Link } from "react-router";
import { useContext } from "react";
import { ScrollContext } from "../Context/scroll.jsx";
import "./Receipt.css";

export default function Receipt() {
  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="receipt-container">
        <h1>View Receipt</h1>
        <div className="receipt-selection"></div>
        <div className="receipt-btn-container">
          <Link to="/">
            <button className="receipt next-btn">
              Book Another Appointment
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
