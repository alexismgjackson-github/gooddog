import data from "../src/breedtype.js";
import BreedTypeCard from "../components/BreedType/BreedTypeCard.jsx";
import { Link /*useNavigate*/ } from "react-router";
import { useContext /*useState*/ } from "react";
import { ScrollContext } from "../Context/scroll.jsx";
import "./BreedType.css";

export default function BreedType() {
  const dogBreedTypes = data.map((dog) => {
    return (
      <BreedTypeCard
        key={dog.id}
        {...dog}
        // selectedValue={selectedValue}
        // handleRadioChange={handleRadioChange}
      />
    );
  });

  /*
  const [selectedValue, setSelectedValue] = useState("");

  const [isValid, setIsValid] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };



  function handleSubmit(event) {
    event.preventDefault();
    setIsValid(true);
    navigate(`/services`);
  }
  */

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  // const navigate = useNavigate();

  return (
    <>
      <div className="breedtype-container">
        <h1 className="animate__animated animate__flipInX">
          Select a breed type <span className="required">(required)</span>
        </h1>
        <form className="breedtype-form" /*onSubmit={handleSubmit}*/>
          {dogBreedTypes}
        </form>
        <div className="breedtype directional-btn-container">
          <Link to="/services">
            <button className="breedtype next-btn">Next</button>
          </Link>
        </div>
      </div>
    </>
  );
}
