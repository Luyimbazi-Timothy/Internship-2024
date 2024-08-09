import {  React, useContext} from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Formik, Form, Field, ErrorMessage } from "formik"
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'
import { Context } from '../ControlPanel'
import { Box } from '@mui/material'
import Swal from 'sweetalert2'
import { controlPanelValidationSchema } from '../../appraisalActivity/addActivity/Schema'
import axios from 'axios'
import urlConfig from '../../../services/Urls'


function AddModal() {

  const {isPreview, formOpen, setFormOpen, tableData, setTableData, editData, setEditData, addBtnLabel} = useContext(Context)

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

      if(addBtnLabel === 'Perspectives'){
        axios.put(`http://localhost:5003/api/Perspective/update-a-perspective/${editData?.id}`, {
          fieldName: 'Perspective',
          fieldDescription: values.content,
          userId: urlConfig.loggedInId
        })
      }
      else if(addBtnLabel === 'Initiatives') {
        axios.put(`http://localhost:5003/api/Initiative/update-an-initiative/${editData?.id}`, {
          fieldName: 'Initiative',
          fieldDescription: values.content,
          userId: urlConfig.loggedInId
        })
      }
      else if(addBtnLabel === 'Periods') {
        axios.post(`http://localhost:5003/api/Period/update-period-item/${editData?.id}`, {
          fieldName: 'Period',
          fieldDescription: values.content,
          userId: urlConfig.loggedInId
        })
      }
  
      else if(addBtnLabel === 'Ssmarta Objectives') {
        axios.post(`http://localhost:5003/api/ssmarta-objective/update-objective-item/${editData?.id}`, {
          fieldName: 'Objective',
          fieldDescription: values.content,
          userId: urlConfig.loggedInId
        })
      }
      else if(addBtnLabel === 'Activities') {
        axios.post(`http://localhost:5003/api/Activity/update-activity-item/${editData?.id}`, {
          fieldName: 'Measurable Activity',
          fieldDescription: values.content,
          userId: urlConfig.loggedInId
        })
      }

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Record has been updated succesfully",
        showConfirmButton: false,
        timer: 1500
      })

    } else {
      const newEntry = { field: values.content }
      setTableData([...tableData, newEntry])

      if(addBtnLabel === 'Perspectives'){
        axios.post('http://localhost:5003/api/Perspective/add-a-perspective', {
          fieldName: 'Perspective',
          fieldDescription: values.content,
          userId: urlConfig.loggedInId
        })
        }
        else if(addBtnLabel === 'Initiatives') {
          axios.post('http://localhost:5003/api/Initiative/add-an-initiative', {
            fieldName: 'Initiative',
            fieldDescription: values.content,
            userId: urlConfig.loggedInId
          })
        }
        else if(addBtnLabel === 'Periods') {
          axios.post('http://localhost:5003/api/Period/create-period-item', {
            fieldName: 'Period',
            fieldDescription: values.content,
            userId: urlConfig.loggedInId
          })
        }
        else if(addBtnLabel === 'Ssmarta Objectives') {
          axios.post('http://localhost:5003/api/ssmarta-objective/create-objective-item', {
            fieldName: 'Objective',
            fieldDescription: values.content,
            userId: urlConfig.loggedInId
          })
        }
        else if(addBtnLabel === 'Activities') {
          axios.post('http://localhost:5003/api/Activity/create-activity-item', {
            fieldName: 'Measurable Activity',
            fieldDescription: values.content,
            userId: urlConfig.loggedInId
          })
        }

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Item has been added successfully",
        showConfirmButton: false,
        timer: 1500
      })

    }
    handleClose()
  }
  return (
    <>
    <Dialog open={formOpen} onClose={handleClose}>
            <DialogTitle>{isPreview ? 'Edit details' : 'Add an Item'}</DialogTitle>
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