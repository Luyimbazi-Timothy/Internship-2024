import { useMemo, useState, React } from 'react'
import {
  MaterialReactTable,
  MRT_ActionMenuItem
} from 'material-react-table'
import { Edit, Delete } from '@mui/icons-material'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'
import { Formik, Form , Field, ErrorMessage } from "formik"
import { controlPanelValidationSchema } from '../AppraisalActivity/addActivity/Schema'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';

const Widgets = () => {
  
    const controlPanelOptions = [
      { label: 'Period', id: 1 },
      { label: 'Perspective', id: 2 },
      { label: 'Ssmarta Objectives', id: 3 },
      { label: 'Initiatives', id: 4 },
      { label: 'Measurable Activities', id: 5 },
    ]
  
    const dataSets = {
      1: [{ field: 'Quarter 1' }, { field: 'Quarter 2' }, { field: 'Quarter 3' }, { field: 'Quarter 4' }],
      2: [{ field: 'Client' }, { field: 'Financial' }],
      3: [{ field: 'Increase Revenue' }, { field: 'Increase Brand Awareness' }],
      4: [{ field: 'Develop tax collection applications' }, { field: 'Create a new marketing plan' }],
      5: [{ field: 'Develop E-Ttax' }, { field: 'Develop a New Marketing Strategy' }],
    }
  
    const [editData, setEditData] = useState(null)
    const [isPreview, setIsPreview] = useState(false)
    const [formOpen, setFormOpen] = useState(false) 
    const [alertOpen, setAlertOpen] = useState(false) 
    const [fieldId, setFieldId] = useState('')
    const [tableData, setTableData] = useState([])
    const [columnHeader, setColumnHeader] = useState('Field')
    const [rowToDelete, setRowToDelete] = useState(null) 
  
    const initialValues = { content: editData ? editData.field : '' }
  
    const handleAdd = () => {
      setFormOpen(true)
      setIsPreview(false)
      setEditData(null)
    }
  
    const handleEdit = (row) => {
      setFormOpen(true)
      setIsPreview(true)
      setEditData(row.original)
    }
  
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
  
    const handleClose = () => {
      setFormOpen(false)
      setAlertOpen(false)
      setEditData(null)
    }  
  
    const handleFormSubmit = (values) => {
      if (isPreview) {
        setTableData(tableData.map((item) => 
          item === editData ? { field: values.content } : item
        ))
      } else {
        const newEntry = { field: values.content }
        setTableData([...tableData, newEntry])
      }
        handleClose()
    }
  
    const handleDelete = (row) => {
      setRowToDelete(row)
      setAlertOpen(true)
    }
  
    const handleFormDelete = () => {
      setTableData(tableData.filter(item => item !== rowToDelete.original))
      setAlertOpen(false)
    }
  
    const columns = useMemo(
      () => [
        {
          accessorKey: 'field',
          header: columnHeader, 
          size: 150,
        },
      ],
      [columnHeader], 
    )
  
    return (
      <>
        <Container minWidth="sm">
          <Grid container spacing={1}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
  
            <Grid item xs={12}>
            {/* <Box display="flex" justifyContent="flex-start" width="100%"> */}
              <Autocomplete
                disablePortal
                id="controlPanelOptions"
                options={controlPanelOptions}
                sx={{ width: 200 }}
                renderInput={(params) => <TextField {...params} label="Select" />}
                clearOnEscape
                onChange={handleChange}
                isOptionEqualToValue={(option, value) => option.id === value.id}
              />
              {/* </Box> */}
            </Grid>
  
                <Grid item xs={12}>
                <Box display="flex" justifyContent="flex-end" width="100%">
                  <Button onClick={handleAdd} variant="contained" endIcon={<AddIcon />}>
                    Add
                  </Button>
                  </Box>
                </Grid>
  
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
                              <DialogActions>
                                <Grid item xs={4}><div></div></Grid>
                                <Grid item xs={4}>
                                  <Button onClick={handleClose} color="error">Cancel</Button>
                                </Grid>
                                <Grid item xs={4}>
                                  <Button
                                    type="submit"
                                    disabled={!formik.isValid || formik.isSubmitting}
                                    color="primary"
                                  >
                                    {isPreview ? 'Save' : 'Add'}
                                  </Button>
                                </Grid>
                              </DialogActions>
                            </Grid>
                          </Form>
                        )}
                      </Formik>
                    </DialogContent>
                  </Dialog>
  
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
  
                <Grid item xs={12}>
                  <MaterialReactTable
                    columns={columns}
                    data={tableData}
                    enableRowActions
                    renderRowActionMenuItems={({ row, table }) => [
                      // eslint-disable-next-line react/jsx-pascal-case
                      <MRT_ActionMenuItem
                        icon={<Edit />}
                        key="edit"
                        label="Edit"
                        onClick={() => handleEdit(row)}
                        table={table}
                      />,
                      // eslint-disable-next-line react/jsx-pascal-case
                      <MRT_ActionMenuItem
                        icon={<Delete />}
                        key="delete"
                        label="Delete"
                        onClick={() => handleDelete(row)}
                        table={table}
                      />,
                    ]}
                  />
                </Grid>
              </Grid>
        </Container>
      </>
    )
  }
  
  export default Widgets
  