import data from "../src/breedtype.js";
import BreedTypeCard from "../components/BreedType/BreedTypeCard.jsx";
import { Link } from "react-router";
import { useContext, useState } from "react";
import { ScrollContext } from "../Context/scroll.jsx";
import "./BreedType.css";

export default function BreedType() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };

  const dogBreedTypes = data.map((dog) => {
    return (
      <BreedTypeCard
        key={dog.id}
        {...dog}
        selectedValue={selectedValue}
        onChange={handleRadioChange}
      />
    );
  });

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="breedtype-container">
        <h1>
          Select a breed type <span className="required">(required)</span>
        </h1>
        <form className="breedtype-form">{dogBreedTypes}</form>
        <div className="breedtype directional-btn-container">
          <Link to="/services">
            <button className="breedtype next-btn">Next</button>
          </Link>
        </div>
      </div>
    </>
  );
}
