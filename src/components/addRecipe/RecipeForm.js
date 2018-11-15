// @flow
import React from "react";
import { FieldArray, reduxForm } from "redux-form";
import renderIngredients from "./Ingredients";
import renderDescription from "./Description";
import Button from "../button";
import type { Node } from "react";
import type { FormProps } from "redux-form/lib/types";
import SingleFields from "./SingleFields";
import ImageComponent from "./ImageComponent";
import validate from './validation';

type Props = FormProps & {
  SingleFields: Node
};

const RecipeForm = (props: Props) => {
  const { handleSubmit } = props;

    return (
    <section className="form-section">
      <form className="form" onSubmit={handleSubmit}>
        <div className="border-right single">
          <h3>Recipe:</h3>
          <SingleFields />
          <ImageComponent />
        </div>
        <div className="border-right ingredient">
					<h3 className="ingredient-title">Ingredients:</h3>
					<FieldArray name="ingredients" component={renderIngredients} />
        </div>
        <div>
					<h3 className="description-title preparation">Description:</h3>
					<FieldArray name="preparation" component={renderDescription} />
				</div>
        <Button
          className="save-btn"
          label="Save"
          onClick={handleSubmit}
          type="submit"
        />
      </form>
    </section>
  );
};

export default reduxForm({
  form: "newRecipe", // a unique identifier for this form
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(RecipeForm);
