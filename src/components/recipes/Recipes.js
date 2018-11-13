import React from "react";
import MainPage from "../mainPage/MainPage";
import salads from "../../pictures/salads/sa.png";
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
