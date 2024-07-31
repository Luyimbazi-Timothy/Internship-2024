import { useState, React, createContext } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TableData from './widgets/TableData'
import DeleteDialogBox from './widgets/DeleteDialogBox'
import SelectModal from './widgets/SelectModal'
import AddModal from './widgets/AddModal'

export const Context = createContext()

const ControlPanel = () => {


  const [columnHeader, setColumnHeader] = useState('Field')
  const [isPreview, setIsPreview] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [editData, setEditData] = useState(null)
  const [alertOpen, setAlertOpen] = useState(false)
  const [rowToDelete, setRowToDelete] = useState(null)
  const [tableData, setTableData] = useState([])
  const [showTableData, setShowTableData] = useState(false)
  const [addBtnLabel, setAddBtnLabel] = useState("")


  const handleAdd = () => {
    setFormOpen(true)
    setIsPreview(false)
    setEditData(null)
  }

  return (
    <>
      <Container minWidth="sm">
        <Grid container spacing={1}>

          {/* Select Field to configure  */}
          <Grid item xs={12}>
            <Context.Provider value={{setShowTableData, setColumnHeader, setTableData}}>
              <SelectModal setAddBtnLabel={setAddBtnLabel}/>
            </Context.Provider>
          </Grid>
          {/* Add / Edit Modal  */}
          <Context.Provider value={{isPreview, formOpen, setFormOpen, tableData, setTableData, editData, setEditData}}>
            <AddModal />
          </Context.Provider>
          {/* Delete dialog box  */}
          <Context.Provider value={{rowToDelete, tableData, alertOpen, setTableData, setAlertOpen}}>
            <DeleteDialogBox />
          </Context.Provider>
          {showTableData &&
            <Grid item xs={12}>
              {/* table data  */}
              <Context.Provider value={{columnHeader, tableData, setFormOpen, setEditData, setIsPreview, setRowToDelete, setAlertOpen}}>
                <TableData handleAdd={handleAdd} addBtnLabel={addBtnLabel}/>
              </Context.Provider>
            </Grid>
          }
        </Grid>
      </Container>
    </>
  )

}

export default ControlPanel
