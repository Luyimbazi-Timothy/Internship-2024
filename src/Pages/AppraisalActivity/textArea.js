import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './textError'

function Textarea (props) {
  const { label, name, ...rest } = props
  return (
    <div >
      <label htmlFor={name}>{label}</label>
      <Field as='textarea' id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Textarea