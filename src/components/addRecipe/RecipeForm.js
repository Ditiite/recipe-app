// @flow
import React from 'react';
import { FieldArray, reduxForm } from "redux-form";
import renderIngredients from './Ingredients';
import Button from '../button';
import type { FormProps } from "redux-form/lib/types";

type Props = FormProps;

const RecipeForm = (props: Props) => {
    const { handleSubmit } = props;
    return(
        <form onSubmit={handleSubmit}>
            <FieldArray name="ingredients" component={renderIngredients}/>
            <Button
                label="Save"
                onClick={handleSubmit}
                type="submit" />
        </form>
    ) 
}

export default reduxForm({
    form: "fieldArrays" // a unique identifier for this form
    // validate
  })(RecipeForm);
