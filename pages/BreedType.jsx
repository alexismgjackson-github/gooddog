import data from "../src/breedtype.js";
import BreedTypeCard from "../components/BreedType/BreedTypeCard.jsx";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { ScrollContext } from "../Context/scroll.jsx";

import "./BreedType.css";

export default function BreedType() {
  const dogBreedTypes = data.map((dog) => {
    return <BreedTypeCard key={dog.id} {...dog} />;
  });

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/services`);
  }

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="breedtype-container">
        <h1 className="animate__animated animate__flipInX">
          Select a breed type <span className="required">(required)</span>
        </h1>
        <form className="breedtype-form" onSubmit={handleSubmit}>
          <div className="breedtype-selection">{dogBreedTypes}</div>
          <div className="breedtype directional-btn-container">
            <button type="submit" className="breedtype next-btn">
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
