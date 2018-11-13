// @flow
import React from "react";
import Navigation from '../mainPage/Navigation'
import spice from "../../pictures/spices/love2.jpg";
import RecipeForm from './RecipeForm';

const AddRecipe = () => {
  const FrontPageStyle = {
    backgroundImage: "url(" + spice + ")"
  };
  
  return (
    <section
      className="main-page main-page__img-container"
      style={FrontPageStyle}>
      <Navigation />
      <div className="main-page__img-container--sm" style={FrontPageStyle}>
        <RecipeForm/>
      </div>
    </section>
  );
}

export default AddRecipe;
