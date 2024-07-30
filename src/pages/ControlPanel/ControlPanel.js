import { useState, React, createContext } from 'react'
import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import AddModal from './widgets/AddModal'
import TableData from './widgets/TableData'
import DeleteDialogBox from './widgets/DeleteDialogBox'
import SelectModal from './widgets/SelectModal'


export const Context = createContext()

const ControlPanel = () => {

  const [fieldId, setFieldId] = useState('')
  const [columnHeader, setColumnHeader] = useState('Field')
  const [isPreview, setIsPreview] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [editData, setEditData] = useState(null)
  const [alertOpen, setAlertOpen] = useState(false)
  const [rowToDelete, setRowToDelete] = useState(null)
  const [tableData, setTableData] = useState([])


  const handleAdd = () => {
    setFormOpen(true)
    setIsPreview(false)
    setEditData(null)
  }

  return (
    <>
      <Container minWidth="sm">
        <Grid container spacing={1}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>

          <Grid item xs={12}>
            <Context.Provider value={[setFieldId, setColumnHeader, setTableData ]}>
            <SelectModal />
            </Context.Provider>
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end" width="100%">
              <Button onClick={handleAdd} variant="contained" endIcon={<AddIcon />}>
                Add
              </Button>
            </Box>
          </Grid>
          {/* Add / Edit Modal  */}
          <Context.Provider value={[isPreview, formOpen, setFormOpen, tableData, setTableData, editData, setEditData]}>
          <AddModal />
          </Context.Provider>
          {/* Delete dialog box  */}
          <Context.Provider value={[rowToDelete, tableData, alertOpen , setTableData, setAlertOpen ]}>
         <DeleteDialogBox />
         
          </Context.Provider>
          <Grid item xs={12}>
          {/* table data  */}
          <Context.Provider value={[columnHeader, tableData, setFormOpen, setIsPreview, setEditData, setRowToDelete, setAlertOpen]}>
         <TableData />
         </Context.Provider>
         </Grid>
        </Grid>
      </Container>
    </>
  )

}

export default ControlPanel
