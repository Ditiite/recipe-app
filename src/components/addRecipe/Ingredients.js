// @flow
import React from "react";
import { Field, FieldArray } from "redux-form";
import renderField from "./renderField.js";
import type { Node } from 'react';
import type { FieldArrayProps } from "redux-form";

type Props = FieldArrayProps & {
	renderField: Node
};

const renderIngredients = ({ fields, meta: {error} }: Props) => {
  const ingredients = [
    {
      name: "Amount",
      label: "amount"
    },
    {
      name: "Measure",
      label: "measure"
    },
    {
      name: "Ingredient",
      label: "ingredients"
    }
  ];

  return (
    <ul>
			<li>
				<button type="button" onClick={() => fields.push()}>
					Add Ingredient
				</button>
			</li>
			{ingredients.map(item => {
				return (
					<li>
						<Field
							name={item.name}
							label={item.label}
							type="text"
							component={renderField}
						/>
					</li>
				);
			})}
    </ul>
  );
};

export default renderIngredients;
