import React from 'react'
import Input from './Input'
import Textarea from './TextArea'
import Select from './Select'
import DatePicker from './DatePicker'
import Upload from './Upload'
import UnrequiredInput from './UnrequiredInput'
import UnrequiredTextArea from './UnrequiredTextArea'

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