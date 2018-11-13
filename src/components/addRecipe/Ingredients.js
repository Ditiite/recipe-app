// @flow
import React from "react";
import { Field } from "redux-form";
import renderField from "./renderField.js";
import type { Node } from "react";
import type { FieldArrayProps } from "redux-form";
import Button from "../button";

type Props = FieldArrayProps & {
  renderField: Node,
  Button: Node,
  fieldIndex: number
};

const renderIngredients = ({ fields, meta: { error } }: Props) => {
  const ingredients = [
    {
      className: "amount",
      field: "amount",
      name: "Amount",
      label: "amount"
    },
    {
      className: "measure",
      field: "measure",
      name: "Measure",
      label: "measure"
    },
    {
      className: "ingredient",
      field: "ingredient",
      name: "Ingredient",
      label: "ingredient"
    }
  ];

  const renderIngredientsFields = (item) =>
      ingredients.map(ingredient => (
        <li key={ingredient.field}>
          <Field
            name={`${item}.${ingredient.field}`}
            component={renderField}
            label={ingredient.label}
          />
          {/* {error && <li className="">{error}</li>} */}
        </li>
      ))

  return (
    <ul className="form-ingredients">
      {fields.map((item: any) => (
        <React.Fragment key={item}>{renderIngredientsFields(item)}</React.Fragment>
      ))}
      <Button
        className="add-btn"
        type="button"
        label="Add ingredient"
        onClick={() => fields.push({})}
      />
      {/* {error && <li className="">{error}</li>} */}
    </ul>
  );
};

export default renderIngredients;
