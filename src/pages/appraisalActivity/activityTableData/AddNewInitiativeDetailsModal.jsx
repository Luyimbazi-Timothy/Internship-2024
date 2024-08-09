import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function AddNewInitiativeDetailsModal({ displaySuccessMessage, measurableActivity, show, handleClose, MeasurableActivityId}) {
  const today = new Date().toISOString().split('T')[0];

  const initialValues = {
    date: today,
    implementation: '',
    comment: '',
    stakeholder: '',
    evidence: '', // Initialize as an empty string
  };

  const validationSchema = Yup.object({
    date: Yup.date().max(today, "Date cannot be in the future"),
    implementation: Yup.string().max(40, 'Must be 20 characters or less').required('Required'),
    comment: Yup.string().required('Required'),
    stakeholder: Yup.string().required('Required'),
    evidence: Yup.mixed().required('Required'),
  });

  const onSubmit = async (values, { setSubmitting }) => {

    const userId = localStorage.getItem("loggedInId")
    console.log(userId, MeasurableActivityId)


    var date="2024-08-02T16:58:37Z"
    const formData = {
      CreatedDate: date,
      Description: values.implementation,
       Comment: values.comment,
       Stakeholder: values.stakeholder,
      Evidence: values.evidence,
      MeasurableActivityId: MeasurableActivityId,
      UserId: userId
    }

    console.log(formData)
    

    try {
      const response = await axios.post('http://localhost:5003/api/Implementations/create-an-implementation', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      displaySuccessMessage();
      handleClose();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <Modal size="lg" show={show} onHide={handleClose}  backdrop="static"
>
      <Modal.Header closeButton>
        <Modal.Title>Activity: {measurableActivity}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ setFieldValue }) => (
            <FormikForm>
              <div className="row">
                <div className="col">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="date">Date <span className="text-danger"> *</span></Form.Label>
                    <Field as={Form.Control} type="date" name="date" max={today} />
                    <ErrorMessage name="date" component="div" className="text-danger" />
                  </Form.Group>
                </div>
                <div className="col">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="stakeholder">Stakeholders <span className="text-danger"> *</span></Form.Label>
                    <Field as={Form.Control} name="stakeholder" />
                    <ErrorMessage name="stakeholder" component="div" className="text-danger" />
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <Form.Group>
                    <div>
                      <Form.Label htmlFor="implementation">Implementation <span className="text-danger"> *</span></Form.Label>

                    </div>
                    <Field as={Form.Control} as="textarea" style={{ width: "100%" }} rows={3} name="implementation" />
                    <ErrorMessage name="implementation" component="div" className="text-danger" />
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Form.Group>
                    <div>
                      <Form.Label htmlFor="comment">Comment<span className="text-danger"> *</span></Form.Label>

                    </div>
                    <Field as={Form.Control} as="textarea" style={{ width: "100%" }} rows={3} name="comment" />
                    <ErrorMessage name="comment" component="div" className="text-danger" />
                  </Form.Group>
                </div>
              </div>



              <div className="row mb-3">
                <div className="col">
                <Form.Group>
                    <Form.Label htmlFor="evidence">Evidence <span className="text-danger">*</span></Form.Label>
                    <input
                      id="evidence"
                      name="evidence"
                      type="file"
                      onChange={(event) => {
                        setFieldValue('evidence', event.currentTarget.files[0]);
                      }}
                      className="form-control"
                    />
                    <ErrorMessage name="evidence" component="div" className="text-danger" />
                  </Form.Group>

                </div>

              </div>

              <hr />
              <div className="row">
                <div className="col d-flex justify-content-end align-items-end">
                  <Button variant="secondary" className="m-1" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" className="m-1" type="submit">
                    Save Changes
                  </Button>
                </div>
              </div>
            </FormikForm>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
}

export default AddNewInitiativeDetailsModal;
