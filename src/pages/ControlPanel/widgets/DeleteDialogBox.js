import {  React, useContext} from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Context } from '../ControlPanel'
import Swal from 'sweetalert2'

function DeleteDialogBox() {

    const [rowToDelete, tableData, alertOpen , setTableData, setAlertOpen ] = useContext(Context)

    const handleFormDelete = () => {
        setTableData(tableData.filter(item => item !== rowToDelete.original))
        setAlertOpen(false)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Record has been deleted successfully",
          showConfirmButton: false,
          timer: 1500
        })
      }

      const handleClose = () => {
        setAlertOpen(false)
      }

    return (
    <>
     <Dialog
            open={alertOpen}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Are you sure you'd like to delete this record?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                This action can't be undone.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color='error' onClick={handleClose}>Cancel</Button>
              <Button onClick={handleFormDelete} autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
    </>
  )
}

export default DeleteDialogBox