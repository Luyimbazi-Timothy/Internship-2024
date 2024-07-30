import {  React, useContext} from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { Context } from '../ControlPanel'


function SelectModal() {

    const [setFieldId, setColumnHeader, setTableData ] = useContext(Context)

    const dataSets = {
        1: [{ field: 'Quarter 1' }, { field: 'Quarter 2' }, { field: 'Quarter 3' }, { field: 'Quarter 4' }],
        2: [{ field: 'Client' }, { field: 'Financial' }],
        3: [{ field: 'Increase Revenue' }, { field: 'Increase Brand Awareness' }],
        4: [{ field: 'Develop tax collection applications' }, { field: 'Create a new marketing plan' }],
        5: [{ field: 'Develop E-Ttax' }, { field: 'Develop a New Marketing Strategy' }],
      }


    const controlPanelOptions = [
        { label: 'Period', id: 1 },
        { label: 'Perspective', id: 2 },
        { label: 'Ssmarta Objectives', id: 3 },
        { label: 'Initiatives', id: 4 },
        { label: 'Measurable Activities', id: 5 },
      ]

      const handleChange = (event, value) => {
        if (value) {
          setFieldId(value.id)
          setTableData(dataSets[value.id] || [])
          setColumnHeader(value.label)
        } else {
          setFieldId('')
          setTableData([])
          setColumnHeader('Field')
        }
      }  

    return (
    <>
    <Autocomplete
              disablePortal
              id="controlPanelOptions"
              options={controlPanelOptions}
              sx={{ width: 130 }}
              renderInput={(params) => <TextField  {...params} label="Select" />}
              clearOnEscape
              onChange={handleChange}
              isOptionEqualToValue={(option, value) => option.id === value.id}
            />
    </>
  )
}

export default SelectModal