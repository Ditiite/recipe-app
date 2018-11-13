// @flow
import React from "react";
import { Field } from "redux-form";
import renderField from "./renderField.js";
import type { Node } from "react";
import type { FieldProps } from "redux-form";

type Props = FieldProps & {
  renderField: Node,
  fieldIndex: number
};

const renderSingleFields = ({ fields }: Props) => {
  const independentFields = [
    {
      className: "title",
      field: "title",
      name: "title",
      label: "Title"
    },
    {
      className: "cooking-time",
      field: "cookingTime",
      name: "cookingTime",
      label: "Cooking Time"
    },
    {
      className: "cooking-temp",
      field: "cookingTemperature",
      name: "cookingTemperature",
      label: "Cooking Temperature"
    }
  ];

  return (
    <section className="single-section">
      {independentFields.map(singleField => (
        <div key={singleField.field} className={singleField.className}>
          <Field
            name={singleField.field}
            component={renderField}
            label={singleField.label}
          />
        </div>
      ))}
    </section>
  );
};

export default renderSingleFields;
