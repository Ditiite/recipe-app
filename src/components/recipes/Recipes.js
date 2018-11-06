import React from "react";
import MainPage from "../mainPage/MainPage";
import salads from "../../pictures/salads/salad1.jpg";
import ChoiceCarousel from "./ChoiceCarousel";

const Recipes = () => {
  return (
    <MainPage
      header="My favorite"
      transparentHeader="salads"
      img={salads}
      children={<ChoiceCarousel />} />
  );
};
export default Recipes;
