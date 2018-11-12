// @flow
import React from "react";
import { FieldArray, reduxForm } from "redux-form";
import renderIngredients from "./Ingredients";
import Button from "../button";
import type { Node } from "react";
import type { FormProps } from "redux-form/lib/types";
import SingleFields from "./SingleFields";
import ImageComponent from "./ImageComponent";

type Props = FormProps & {
  SingleFields: Node
};

const RecipeForm = (props: Props) => {
  const { handleSubmit } = props;
  return (
    <form className="form add-recipe-form " onSubmit={handleSubmit}>
      <SingleFields />
      <ImageComponent />
      <FieldArray name="ingredients" component={renderIngredients} />
      <Button className="save-btn" label="Save" onClick={handleSubmit} type="submit" />
    </form>
  );
};

export default reduxForm({
  form: "fieldArrays" // a unique identifier for this form
  // validate
})(RecipeForm);
