import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './textError'

function Select (props) {
  const { label, name, options, ...rest } = props
  return (
    <div >
      <label htmlFor={name} className='form-label fw-semibold'>{label}</label>
      <Field as='select' id={name} name={name} {...rest} className='form-select form-select-sm'>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          )
        })}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Select