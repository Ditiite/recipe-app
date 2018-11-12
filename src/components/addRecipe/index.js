// @flow
import React from "react";
import Navigation from '../mainPage/Navigation'
import MainPage from "../mainPage/MainPage";
import spice from "../../pictures/spices/love.jpg";
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


// import React, { Component } from "react";
// import { Field, reduxForm } from "redux-form";
// import type { FormProps } from "redux-form/lib/types";

// import MainPage from "../mainPage/MainPage";
// import spice from "../../pictures/spices/smallSpoons.jpg";

// type Props = { custom: string } & FormProps;

// class AddRecipe extends Component<Props> {
//   render() {
//     const { handleSubmit } = this.props;
//     console.log("this.props", this.props);
//     return (
//       <MainPage img={spice}>
//         <form onSubmit={handleSubmit} className="add-recipe-form">
//           <label htmlFor="title">Title</label>
//           <Field name="title" component="input" type="text" />
//           <div>
//             <label htmlFor="src">Add Image</label>
//             <Field name="src" component="input" type="text" />
//             <label htmlFor="alt">Add description for image</label>
//             <Field name="alt" component="input" type="text" />
//           </div>
//           <div>
//             <h3>Ingredients</h3>
//             <label htmlFor="amount">Amount</label>
//             <Field name="amount" component="input" type="text" />
//             <label htmlFor="measure">Measure</label>
//             <Field name="measure" component="input" type="text" />
//             <label htmlFor="ingredient">Ingredient</label>
//             <Field name="ingredient" component="input" type="text" />
//           </div>
//           <button>Add</button>
//         </form>
//       </MainPage>
//     );
//   }
// }

// /*eslint-disable */
// AddRecipe = reduxForm({
//   form: "AddRecipe"
// })(AddRecipe);
// /*eslint-enable */

// export default AddRecipe;
