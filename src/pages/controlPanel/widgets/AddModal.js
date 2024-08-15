import { React, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import { Context } from "../ControlPanel";
import { Box } from "@mui/material";
import Swal from "sweetalert2";
import { controlPanelValidationSchema } from "../../appraisalActivity/addActivity/Schema";
import axios from "axios";
import urlConfig from "../../../services/Urls";
import { Container } from "react-bootstrap";

function AddModal({ isPreview }) {
  const {
    formOpen,
    setFormOpen,
    setTableData,
    editData,
    setEditData,
    addBtnLabel,
    setNoOfNewUpdates,
  } = useContext(Context);

  const initialValues = { content: editData ? editData.field : "" };

  const handleClose = () => {
    setFormOpen(false);
    setEditData(null);
  };

  const handleFormSubmit = (values) => {
    if (isPreview) {
      if (addBtnLabel === "Initiatives") {
        axios.put(
          `${urlConfig.updateInitiativeUrl}/${editData?.id}`,
          {
            fieldName: "Initiative",
            fieldDescription: values.content,
            userId: urlConfig.loggedInId,
          }
        )
        .then(() => {
          axios.get(`${urlConfig.allInitiativesUrl}`).then((response) => {
            const formattedData = response.data.map((item) => ({
              field: item.fieldDescription,
              id: item.itemId,
            }));
            setTableData(formattedData);
          });
        });
      } else if (addBtnLabel === "Ssmarta Objectives") {
        axios.post(
          `${urlConfig.updateSsmartaObjectiveUrl}/${editData?.id}`,
          {
            fieldName: "Objective",
            fieldDescription: values.content,
            userId: urlConfig.loggedInId,
          }
        )
        .then(() => {
          axios
            .get(`${urlConfig.allSsmartaObjectiveUrl}`)
            .then((response) => {
              const formattedData = response.data.map((item) => ({
                field: item.fieldDescription,
                id: item.itemId,
              }));
              setTableData(formattedData);
            });
        });
      } else if (addBtnLabel === "Activities") {
        axios.post(
          `${urlConfig.updateActivityUrl}/${editData?.id}`,
          {
            fieldName: "Measurable Activity",
            fieldDescription: values.content,
            userId: urlConfig.loggedInId,
          }
        )
        .then(() => {
          axios
            .get(`${urlConfig.allMeasurableActivitiesUrl}`)
            .then((response) => {
              const formattedData = response.data.map((item) => ({
                field: item.fieldDescription,
                id: item.itemId,
              }));
              setTableData(formattedData);
            });
        });
      }

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Record has been updated succesfully",
        showConfirmButton: false,
        timer: 1500,
      });

      setNoOfNewUpdates((_prev) => _prev + 1);

    } else {
      if (addBtnLabel === "Initiatives") {
        axios
          .post(`${urlConfig.addInitiativeUrl}`, {
            fieldName: "Initiative",
            fieldDescription: values.content,
            userId: urlConfig.loggedInId,
          })
          .then(() => {
            axios.get(`${urlConfig.allInitiativesUrl}`).then((response) => {
              const formattedData = response.data.map((item) => ({
                field: item.fieldDescription,
                id: item.itemId,
              }));
              setTableData(formattedData);
            });
          });
      }  else if (addBtnLabel === "Ssmarta Objectives") {
        axios
          .post(
            `${urlConfig.addSsmartaObjectiveUrl}`,
            {
              fieldName: "Objective",
              fieldDescription: values.content,
              userId: urlConfig.loggedInId,
            }
          )
          .then(() => {
            axios
              .get(`${urlConfig.allSsmartaObjectiveUrl}`)
              .then((response) => {
                const formattedData = response.data.map((item) => ({
                  field: item.fieldDescription,
                  id: item.itemId,
                }));
                setTableData(formattedData);
              });
          });
      } else if (addBtnLabel === "Activities") {
        axios
          .post(`${urlConfig.addActivityUrl}`, {
            fieldName: "Measurable Activity",
            fieldDescription: values.content,
            userId: urlConfig.loggedInId,
          })
          .then(() => {
            axios
              .get(`${urlConfig.allMeasurableActivitiesUrl}`)
              .then((response) => {
                const formattedData = response.data.map((item) => ({
                  field: item.fieldDescription,
                  id: item.itemId,
                }));
                setTableData(formattedData);
              });
          });
      }

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Item has been added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    setNoOfNewUpdates((_prev) => _prev + 1);
    handleClose();
  };
  return (
    <>
      <Dialog open={formOpen} onClose={handleClose} maxWidth="sm" fullWidth={true}>
        <DialogTitle>{isPreview ? "Edit details" : "Add an Item"}</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            validationSchema={controlPanelValidationSchema}
            onSubmit={handleFormSubmit} 
            validateOnChange={true}
            enableReinitialize
          >
            {(formik) => (
              <Form>
                  <Grid spacing={2}>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        label=""
                        id="content"
                        name="content"
                        className="mb-2"
                        fullWidth
                        variant="outlined"
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
                          onClick={handleClose}
                          color="error"
                          variant="contained"
                          sx={{ mr: 1 }}
                        >
                          Cancel
                        </Button>

                        <Button
                          type="submit"
                          disabled={!formik.isValid || formik.isSubmitting}
                          color="primary"
                          variant="contained"

                        >
                          {isPreview ? "Save" : "Add"}
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
  );
}

export default AddModal;
