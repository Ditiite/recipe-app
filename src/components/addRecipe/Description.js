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

const renderDescription = ({ fields, meta: { error } }: Props) => {
  const description = [
    {
      className: "description-title",
      field: "whatPrepare",
      name: "whatPrepare",
      label: "What to prepare..",
      component: "input"
    },
    {
      className: "description-textarea",
      field: "description",
      name: "description",
      label: "How to prepare..",
      component: "textarea"
    }
  ];

  const renderDescriptionFields = () =>
    description.map(description => (
      <div className={description.className}>
        <li key={description.field} className="input-wrap">
          <Field
            className="input-text"
            name={description.field}
            component={description.component}
            label={description.label}
          />
          {/* {error && <li className="">{error}</li>} */}
          <label className="floating-label">{description.label}</label>
        </li>
      </div>
    ));
  return (
    <ul className="form-description">
      <div className="form-description-wrap">
        {fields.map((item: string) => (
          <React.Fragment key={item}>
            {renderDescriptionFields()}
          </React.Fragment>
        ))}
        {/* {error && <li className="">{error}</li>} */}
      </div>
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
