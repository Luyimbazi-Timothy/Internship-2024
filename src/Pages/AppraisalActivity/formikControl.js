import React from 'react'
import Input from './input'
import Textarea from './textArea'
import Select from './select'
import DatePicker from './datePicker'
import Upload from './upload'
import UnrequiredInput from './unrequiredInput'
import UnrequiredTextArea from './unrequiredTextArea'

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
    case 'upload':
        return <Upload {...rest} />    
    case 'unrequiredInput':
        return <UnrequiredInput {...rest} /> 
    case 'unrequiredTextArea':
        return <UnrequiredTextArea {...rest} />       
    default:
      return null
  }
}

export default FormikControl