import data_a from "../src/age.js";
import data_b from "../src/coat.js";
import data_c from "../src/size.js";
import { useContext } from "react";
import { ScrollContext } from "../Context/scroll.jsx";
import { Link } from "react-router";
import AgeCard from "../components/MoreInfo/AgeCard.jsx";
import CoatCard from "../components/MoreInfo/CoatCard.jsx";
import SizeCard from "../components/MoreInfo/SizeCard.jsx";
import "./MoreInfo.css";

export default function MoreInfo() {
  const dogAge = data_a.map((age) => {
    return <AgeCard key={age.id} {...age} />;
  });

  const dogCoat = data_b.map((coat) => {
    return <CoatCard key={coat.id} {...coat} />;
  });

  const dogSize = data_c.map((size) => {
    return <SizeCard key={size.id} {...size} />;
  });

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="moreinfo-container">
        <h1>Tell us more about your dog</h1>
        <div className="moreinfo-selection">
          <div className="age-container">
            <h2>What is their age?</h2>
            <div className="age-selection">{dogAge}</div>
          </div>
          <div className="coat-container">
            <h2>What is their coat?</h2>
            <div className="coat-selection">{dogCoat}</div>
          </div>
          <div className="size-container">
            <h2>What is their size?</h2>
            <div className="size-selection">{dogSize}</div>
          </div>
        </div>
        <div className="moreinfo directional-btn-container">
          <Link to="/services">
            {" "}
            <button className="moreinfo back-btn">Back</button>
          </Link>
          <Link to="/confirmation">
            {" "}
            <button className="moreinfo next-btn">Next</button>
          </Link>
        </div>
      </div>
    </>
  );
}
