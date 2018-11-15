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
    <div className="input-wrap">
      <input {...input} type={type} className="input-text" autoComplete="off"/>
      {
        touched && error && <span className="error">
          {error}
        </span>
      }
      <label className="floating-label">{label}</label>
    </div>
  )
  

export default renderField;
