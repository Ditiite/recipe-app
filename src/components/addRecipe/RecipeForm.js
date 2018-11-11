// @flow
import React from 'react';
import { FieldArray, reduxForm } from "redux-form";
import renderIngredients from './Ingredients';

const RecipeForm = () => {
    return(
        <form>
            <FieldArray name="ingredients" component={renderIngredients}/>
        </form>
    ) 
}

export default reduxForm({
    form: "fieldArrays" // a unique identifier for this form
    // validate
  })(RecipeForm);
