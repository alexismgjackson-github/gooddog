import data from "../src/breedtype.js";
import BreedTypeCard from "../components/BreedType/BreedTypeCard.jsx";
import { Link } from "react-router";
import { useContext } from "react";
import { ScrollContext } from "../Context/scroll.jsx";
import "./BreedType.css";

export default function BreedType() {
  const dogBreedTypes = data.map((dog) => {
    return <BreedTypeCard key={dog.id} {...dog} />;
  });

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="breedtype-container">
        <h1>Select a breed type</h1>
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
