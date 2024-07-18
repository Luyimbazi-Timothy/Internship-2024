import React from 'react'
import Input from './input'
import Textarea from './textArea'
import Select from './select'
import DatePicker from './datePicker'

function FormikControl (props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'date':
        return <DatePicker {...rest} />   
    default:
      return null
  }
}

export default FormikControl