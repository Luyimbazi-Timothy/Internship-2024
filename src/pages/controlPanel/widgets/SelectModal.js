import {  React, useContext} from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { Context } from '../ControlPanel'
import { controlPanelOptions } from './ControlPanelConfig'


function SelectModal({setAddBtnLabel}) {

    const {setColumnHeader, setTableData, setShowTableData, dataSets } = useContext(Context)

      const handleChange = (event, value) => {
        if (value) {
          setTableData(dataSets[value.id] || []);
          setColumnHeader(value.label);
          setAddBtnLabel(value.label);
          setShowTableData(true);
        } else {
          setTableData([]);
          setColumnHeader('Field');
          setShowTableData(false);
          setAddBtnLabel('');
        }
      };

    return (
    <>
    <br/>
    <Autocomplete
              disablePortal
              id="controlPanelOptions"
              options={controlPanelOptions}
              sx={{ width: 600 }}
              renderInput={(params) => <TextField  {...params} label="Select an Input field to configure" />}
              clearOnEscape
              onChange={handleChange}
              isOptionEqualToValue={(option, value) => option.id === value.id}
            />
    </>
  )
}

export default SelectModal