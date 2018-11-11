// @flow
import React from 'react';
import type { Element } from 'react';
import type { FieldProps } from 'redux-form'

type Props = FieldProps & {
  label: string,
  type: string,
  meta: {
    touched: boolean,
    error: string
  },
  input: Element<'input'>
}

const renderField = ({ input, label, type, meta: { touched, error } }: Props) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>
        {/* {error} */}
        </span>}
      </div>
    </div>
  )
  

export default renderField;
