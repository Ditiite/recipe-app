// @flow
import React from "react";
import { Field } from "redux-form";
import type { Node } from "react";
import type { FieldArrayProps } from "redux-form";
import Button from "../button";

type Props = FieldArrayProps & {
  renderField: Node,
  Button: Node,
  fieldIndex: number
};

const renderDescription = ({ fields, meta: { touched, error } }: Props) => {
  const description = [
    {
      className: "description-title input-wrap",
      field: "whatPrepare",
      name: "whatPrepare",
      label: "What to prepare..",
      component: "input",
      placeholder: ""
    },
    {
      className: "description-textarea",
      field: "description",
      name: "description",
      label: "",
      component: "textarea",
      placeholder: "How to prepare.."
    }
  ];

  const renderDescriptionFields = (item) =>
    description.map(description => (
      <div  key={Math.random() * 1000} className={description.className}>
        <li key={description.field}>
          <Field
            className="input-text"
            name={`${item}.${description.field}`}
            component={description.component}
            label={description.label}
            placeholder={description.placeholder}
          />
          {touched && ((error && <span>{error}</span>))}
          <label className="floating-label">{description.label}</label>
        </li>
      </div>
    ));
  return (
    <ul className="form-description">
        {fields.map((item: string) => (
          <React.Fragment key={item}>
            {renderDescriptionFields(item)}
          </React.Fragment>
        ))}
      {touched && ((error && <span>{error}</span>))}
      <Button
        className="add-btn"
        type="button"
        label="Add description"
        onClick={() => fields.push()}
      />
    </ul>
  );
};

export default renderDescription;
