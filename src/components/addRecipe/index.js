// @flow
import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import type { FormProps } from 'redux-form';

import MainPage from "../mainPage/MainPage";
import spice from "../../pictures/spices/smallSpoons.jpg";

type Props = {
  handleSubmit: () => mixed
} & FormProps;

class AddRecipe extends Component<Props> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <MainPage img={spice}>
        <form onSubmit={handleSubmit} className="add-recipe-form">
          <label htmlFor="title">Title</label>
          <Field name="title" component="input" type="text"/>
          <div>
            <label htmlFor="src">Add Image</label>
            <Field name="src" component="input" type="text"/>
            <label htmlFor="alt">Add description for image</label>
            <Field name="alt" component="input" type="text"/>
          </div>
          <div>
            <h3>Ingredients</h3>
            <label htmlFor="amount">Amount</label>
            <Field name="amount" component="input" type="text"/>
            <label htmlFor="measure">Measure</label>
            <Field name="measure" component="input" type="text" />
            <label htmlFor="ingredient">Ingredient</label>
            <Field name="ingredient" component="input" type="text" />
          </div>
          <button>Add</button>
        </form>
      </MainPage>
    );
  }
}

/*eslint-disable */
AddRecipe = reduxForm({
    form: 'AddRecipe'
})(AddRecipe);
/*eslint-enable */

export default AddRecipe;
