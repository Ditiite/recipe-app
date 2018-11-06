import React from "react";
import { Link } from "react-router-dom";
import breakfast from "../../pictures/salads/breakfast.jpg";
// import SingleRecipe from './SingleRecipe';

const ChoiceCarousel = () => {
  return (
    <section className="choice-carousel">
      <div>
        <Link to="salad">
          <img src={breakfast} alt="salad" />
        </Link>
      </div>
      <div>
        <Link to="/">
          <img src={breakfast} alt="salad" />
        </Link>
      </div>
      <div>
        <Link to="/">
          <img src={breakfast} alt="salad" />
        </Link>
      </div>
      <div>
        <Link to="/">
          <img src={breakfast} alt="salad" />
        </Link>
      </div>
      <div>
        <Link to="/">
          <img src={breakfast} alt="salad" />
        </Link>
      </div>
      <div>
        <Link to="/">
          <img src={breakfast} alt="salad" />
        </Link>
      </div>
      <div>
        <Link to="/">
          <img src={breakfast} alt="salad" />
        </Link>
      </div>
    </section>
  );
};

export default ChoiceCarousel;
