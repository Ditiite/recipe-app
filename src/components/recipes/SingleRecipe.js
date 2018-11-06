import React from "react";
// import MainPage from '../mainPage/MainPage';
import Navigation from "../mainPage/Navigation";

import salads from "../../mockup/salads/index.json";
import Redish from "../../pictures/salads/salad.jpg";

const FrontPageStyle = {
  backgroundImage: "url(" + Redish + ")",
  backgroundPositionX: "50%",
  backgroundPositionY: "50%",
  backgroundSize: "cover"
};

const SingleRecipe = () => {
  return (
    <section
      className="main-page main-page__img-container"
      style={FrontPageStyle}>
      <Navigation />
      {salads.map(salad => {
        return (
          <div
            className="single-recipe__img-container--sm"
            key={Math.random() * 1000}>
            <div className="single-recipe__basic">
              <h2>{salad.title}</h2>
              <img
                className="single-recipe__img"
                src={require(`../../pictures/salads/${salad.src}`)}
                alt={salad.alt}/>
              <p>
                Time to prepare: <span>{salad.cookingTime}</span>{" "}
              </p>
              <p>
                Cooking temperature: <span>{salad.cookingTemperature}</span>
              </p>
            </div>

            {/* INGREDIENTS */}
            <div>
              <h3>Ingredients</h3>
              {salad.ingredients.map(item => {
                return (
                  <React.Fragment key={Math.random() * 1000}>
                    <h4>{item.section}</h4>
                    <ul>
                      {item.ingredients.map(ingredient => {
                        return (
                          <li key={Math.random() * 1000}>
                            {ingredient.amount}
                            <span> {ingredient.measure}</span>
                            <span> {ingredient.item}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </React.Fragment>
                );
              })}
            </div>

            {/* PREPARATION */}
            <div>
              <h3>Preparation</h3>
              {salad.methods.map(method => {
                return (
                  <React.Fragment key={Math.random() * 1000}>
                    <h4>{method.whatToPrepare}</h4>
                    <p>{method.description}</p>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default SingleRecipe;
