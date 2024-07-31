import {  React, useContext} from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Formik, Form, Field, ErrorMessage } from "formik"
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'
import { controlPanelValidationSchema } from '../../AppraisalActivity/addActivity/Schema'
import { Context } from '../ControlPanel'
import { Box } from '@mui/material'
import Swal from 'sweetalert2'

function AddModal() {

  const {isPreview, formOpen, setFormOpen, tableData, setTableData, editData, setEditData} = useContext(Context)

  const initialValues = { content: editData ? editData.field : '' }

  const handleClose = () => {
    setFormOpen(false)
    setEditData(null)
  }

  const handleFormSubmit = (values) => {
    if (isPreview) {
      setTableData(tableData.map((item) =>
        item === editData ? { field: values.content } : item
      ))
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Record has been updated succesfully",
        showConfirmButton: false,
        timer: 1500
      })

    } else {
      const newEntry = { field: values.content }
      setTableData([...tableData, newEntry])
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Entry has been added successfully",
        showConfirmButton: false,
        timer: 1500
      })
    }
    handleClose()
  }

  return (
    <>
    <Dialog open={formOpen} onClose={handleClose}>
            <DialogTitle>{isPreview ? 'Edit details' : 'Add an Entry'}</DialogTitle>
            <DialogContent>
              <Formik
                initialValues={initialValues}
                validationSchema={controlPanelValidationSchema}
                onSubmit={handleFormSubmit}
                validateOnChange={true}
                enableReinitialize
              >
                {formik => (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Field
                          as={TextField}
                          label=""
                          id="content"
                          name="content"
                        />
                        <ErrorMessage
                          component="div"
                          name="content"
                          className="error"
                        />
                      </Grid>
                      <Grid item xs={12}>
                  <Box display="flex" justifyContent="flex-end">
                  <Button
                      type="submit"
                      disabled={!formik.isValid || formik.isSubmitting}
                      color="primary"
                      variant='contained'
                      sx={{ mr: 1 }}
                    >
                      {isPreview ? 'Save' : 'Add'}
                    </Button>
                    <Button
                      onClick={handleClose}
                      color="error"
                      variant='contained'
                    >
                      Cancel
                    </Button>
                    
                  </Box>
                </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </DialogContent>
          </Dialog>
    </>
  )
}

export default AddModal