import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Textarea (props) {
  const { label, name, ...rest } = props
  return (
    <div >
      <label htmlFor={name} className='fw-semibold form-label'>{label}<span className="error">*</span></label>
      <Field as='textarea' id={name} name={name} {...rest} className='form-control' style={{height: 50}}/>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Textarea