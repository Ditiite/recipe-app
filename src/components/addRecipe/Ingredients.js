// @flow
import React from "react";
import { Field } from "redux-form";
import renderField from "./renderField.js";
import type { Node } from 'react';
import type { FieldArrayProps } from "redux-form";
import Button from '../button'

type Props = FieldArrayProps & {
	renderField: Node
};

const renderIngredients = ({ fields, meta: {error} }: Props) => {
  const ingredients = [
    {
      field: "amount",
      name: "Amount",
      label: "amount"
    },
    {
      field: "measure",
      name: "Measure",
      label: "measure"
    },
    {
      field: "ingredient",
      name: "Ingredient",
      label: "ingredient"
    }
  ];

  const renderIngredientsFields = fieldIndex => ingredients.map(ingredients => (
    <li key={ingredients.field}>
      <Field
        name={ingredients.field}
        component={renderField}
        label={ingredients.label} />
      {/* {error && <li className="">{error}</li>} */}
    </li>
  ));
  return (
    <ul>
      {fields.map((item, fieldIndex) => (
        <div key={item} className="">
            {renderIngredientsFields(fieldIndex)}
        </div>
      ))}
      <Button
        onClick={() => fields.push()} 
        label="Add ingredient"
        />
      {/* {error && <li className="">{error}</li>} */}
    </ul>
  );
};

export default renderIngredients;
