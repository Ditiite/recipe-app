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
            field: "whatPrepare",
            name: "whatPrepare",
            label: "What to prepare..",
            component: "input"
        },
        {
            field: "description",
            name: "description",
            label: "How to prepare..",
            component: "textarea"
        },
    ];

    const renderDescriptionFields = () =>
        description.map(description => (
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
        ));
    return (
        <ul className="form-description">
            {fields.map((item: string) => (
                <React.Fragment key={item}>
                    {renderDescriptionFields()}
                </React.Fragment>
            ))}
            <Button
                type="button"
                label="Add description"
                onClick={() => fields.push()}
            />
            {/* {error && <li className="">{error}</li>} */}
        </ul>
    );
};

export default renderDescription;
