import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Card, Form as BootstrapForm, Button, Row, Col } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import Configs from "../../../commons/Configs";
import * as Yup from 'yup';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const validationSchema = Yup.object({
  period: Yup.string().required('This is a required field.'),
  perspective: Yup.string().required('This is a required field.'),
  ssMartaObjectives: Yup.string().required('This is a required field.'),
  initiative: Yup.string().required('This is a required field.'),
  measurableActivities: Yup.string().required('This is a required field.'),
  date: Yup.date().required('This is a required field.').max(new Date(), 'Date cannot be in the future'),
});

function AddActivityForm({ onSubmit }) {
  const handleSubmit = (values, onSubmitProps) => {
    const formData = {
      ...values,
      date: new Date(values.date).toISOString(),
    };

    const new_record = {
      id: 1,
      measurableActivity: {
        activity: formData.measurableActivities,
        period: formData.period,
        perspective: formData.perspective,
        ssMartaObjectives: formData.ssMartaObjectives,
        initiative: formData.initiative,
        implementations: [],
      },
    };

    onSubmit(new_record);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <>
      <Row className='mb-3'>
        <Col className='d-flex justify-content-end'>
          <Link to="/dashboard">
            <Button className='btn btn-primary'>
              <FaArrowLeft />
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h5 className='text-center fw-semibold label'>Create Activity Form</h5>
            </Card.Header>
            <Card.Body>
              <Formik
                initialValues={Configs.initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                validateOnChange={true}
                enableReinitialize
              >
                {formik => (
                  <Form>
                    <div className='container'>
                      <div className='row'>
                        {/* Period Field */}
                        <div className='col-sm-6 mb-3'>
                          <BootstrapForm.Group>
                            <BootstrapForm.Label htmlFor='period'>Period <span className='text-danger'>*</span></BootstrapForm.Label>
                            <Field as={BootstrapForm.Select} name='period'>
                              {Configs.quarterDropdownOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                  {option.key}
                                </option>
                              ))}
                            </Field>
                            <ErrorMessage name='period' component='div' className='text-danger' />
                          </BootstrapForm.Group>
                        </div>

                        {/* Perspective Field */}
                        <div className='col-sm-6 mb-3'>
                          <BootstrapForm.Group>
                            <BootstrapForm.Label htmlFor='perspective'>Perspective <span className='text-danger'>*</span></BootstrapForm.Label>
                            <Field as={BootstrapForm.Select} name='perspective'>
                              {Configs.perspectiveDropdownOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                  {option.key}
                                </option>
                              ))}
                            </Field>
                            <ErrorMessage name='perspective' component='div' className='text-danger' />
                          </BootstrapForm.Group>
                        </div>

                        {/* SsMarta Objectives Field */}
                        <div className='col-sm-6 mb-3'>
                          <BootstrapForm.Group>
                            <BootstrapForm.Label htmlFor='ssMartaObjectives'>SsMarta Objectives <span className='text-danger'>*</span></BootstrapForm.Label>
                            <Field as={BootstrapForm.Select} name='ssMartaObjectives'>
                              {Configs.ssmartaObjectiveDropdownOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                  {option.key}
                                </option>
                              ))}
                            </Field>
                            <ErrorMessage name='ssMartaObjectives' component='div' className='text-danger' />
                          </BootstrapForm.Group>
                        </div>

                        {/* Initiative Field */}
                        <div className='col-sm-6 mb-3'>
                          <BootstrapForm.Group>
                            <BootstrapForm.Label htmlFor='initiative'>Initiative <span className='text-danger'>*</span></BootstrapForm.Label>
                            <Field as={BootstrapForm.Select} name='initiative'>
                              {Configs.initiativeDropdownOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                  {option.key}
                                </option>
                              ))}
                            </Field>
                            <ErrorMessage name='initiative' component='div' className='text-danger' />
                          </BootstrapForm.Group>
                        </div>

                        {/* Measurable Activities Field */}
                        <div className='col-sm-6 mb-3'>
                          <BootstrapForm.Group>
                            <BootstrapForm.Label htmlFor='measurableActivities'>Measurable Activity <span className='text-danger'>*</span></BootstrapForm.Label>
                            <Field as={BootstrapForm.Select} name='measurableActivities'>
                              {Configs.measurableActivityDropdownOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                  {option.key}
                                </option>
                              ))}
                            </Field>
                            <ErrorMessage name='measurableActivities' component='div' className='text-danger' />
                          </BootstrapForm.Group>
                        </div>

                        {/* Date Field */}
                        <div className='col-sm-6 mb-3'>
                          <BootstrapForm.Group>
                            <BootstrapForm.Label htmlFor='date'>Date <span className='text-danger'> *</span></BootstrapForm.Label>
                            <Field as={BootstrapForm.Control} type='date' name='date' />
                            <ErrorMessage name='date' component='div' className='text-danger' />
                          </BootstrapForm.Group>
                        </div>

                        <div className='col-12 d-flex justify-content-end mt-3'>
                          <button type='reset' disabled={formik.isSubmitting} className='btn btn-danger me-2'>Cancel</button>
                          <button type='submit' disabled={!formik.isValid || formik.isSubmitting} className='btn btn-primary'>Save</button>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>

  );
}

export default AddActivityForm;
