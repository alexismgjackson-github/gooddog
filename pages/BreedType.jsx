import data from "../src/breedtype.js";
import BreedTypeCard from "../components/BreedType/BreedTypeCard.jsx";
import { Link } from "react-router";
import { useContext, useState } from "react";
import { ScrollContext } from "../Context/scroll.jsx";
import "./BreedType.css";

export default function BreedType() {
  const [selectedDogType, setSelectedDogType] = useState("");

  const handleRadioChange = (event) => {
    setSelectedDogType(event.target.value);
    console.log(event.target.value);
  };
  const dogBreedTypes = data.map((dog) => {
    return <BreedTypeCard key={dog.id} {...dog} />;
  });

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  // const navigate = useNavigate();

  return (
    <>
      <div className="breedtype-container">
        <h1 className="animate__animated animate__flipInX">
          Select a breed type <span className="required">(required)</span>
        </h1>
        <form className="breedtype-form">{dogBreedTypes}</form>
        <div className="breedtype directional-btn-container">
          <Link to="/services">
            <button type="submit" className="breedtype next-btn">
              Next
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
