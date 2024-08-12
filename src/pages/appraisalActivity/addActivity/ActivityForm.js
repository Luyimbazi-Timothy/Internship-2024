import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Card, Form as BootstrapForm, Button, Row, Col } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import Configs from "../../../commons/Configs";
import * as Yup from 'yup';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import urlConfig from '../../../services/Urls';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  period: Yup.string().required('This is a required field.'),
  perspective: Yup.string().required('This is a required field.'),
  ssMartaObjectives: Yup.string().required('This is a required field.'),
  initiative: Yup.string().required('This is a required field.'),
  measurableActivities: Yup.string().required('This is a required field.'),
  date: Yup.date().required('This is a required field.').max(new Date(), 'Date cannot be in the future'),
});

function AddActivityForm() {
  const [measurableActivityOptions, setMeasurableActivityOptions] = useState([]);
  const [periodOptions, setPeriodOptions] = useState([]);
  const [perspectiveOptions, setPerspectiveOptions] = useState([]);
  const [ssMartaOptions, setSsMartaOptions] = useState([]);
  const [initiativeOptions, setInitiativeOptions] = useState([]);
  const loggedInId = localStorage.getItem('loggedInId');
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const [measurableActivityresponse, periodResponse, perspectiveResponse, ssMartaResponse, initiativeResponse] = await Promise.all([
        axios.get(urlConfig.allMeasurableActivitiesUrl),
        axios.get(urlConfig.allPeriodsUrl),
        axios.get(urlConfig.allPerspectivesUrl),
        axios.get(urlConfig.allSsmartaObjectiveUrl),
        axios.get(urlConfig.allInitiativesUrl),
      ]);

      setMeasurableActivityOptions(measurableActivityresponse.data);
      setPeriodOptions(periodResponse.data);
      setPerspectiveOptions(perspectiveResponse.data);
      setSsMartaOptions(ssMartaResponse.data);
      setInitiativeOptions(initiativeResponse.data);
    } catch (error) {
      Swal.fire({
        title: 'Error fetching data',
        text: error.message,
        icon: 'error',
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  const createMeasurableActivityProperties = async (record) => {
    const url = urlConfig.createMeasurableActivityPropertiesUrl;
    try {
      const result = await Swal.fire({
        title: "Save measurable Activity Details?",
        showConfirmButton: true,
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok",
        cancelButtonText: "Cancel",
        allowOutsideClick: false,
        allowEscapeKey: false,
      });

      if (result.isConfirmed) {
        const response = await axios.post(url, record);
        if (response.status === 200) {
          Swal.fire({
            title: "Details saved successfully.",
            icon: "success",
            timer: 1000,
            showConfirmButton: false,
          });
        navigate("/dashboard");
        }
      } else {
        navigate("/dashboard");
      }

    } catch (error) {
      Swal.fire({
        title: 'Error adding measurable activity',
        text: error.response?.data?.message || error.message,
        icon: 'error',
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (values, onSubmitProps) => {
    const formData = {
      ...values,
      date: new Date(values.date).toISOString(),
    };
    const new_rec = {
      periodId: formData.period,
      activityId: formData.measurableActivities,
      perspectiveId: formData.perspective,
      ssMartaObjectivesId: formData.ssMartaObjectives,
      initiativeId: formData.initiative,
      userId: loggedInId,
    };

    createMeasurableActivityProperties(new_rec);
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
                              <option key="default-period" value="">
                                Select Period
                              </option>
                              {periodOptions && periodOptions.map(option => (
                                <option key={option.itemId} value={option.itemId}>
                                  {option.fieldDescription}
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
                              <option key="default" value="">
                                Select Perspective
                              </option>
                              {perspectiveOptions && perspectiveOptions.map(option => (
                                <option key={option.itemId} value={option.itemId}>
                                  {option.fieldDescription}
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
                              <option key="default-object" value="">
                                Select Objective
                              </option>
                              {ssMartaOptions && ssMartaOptions.map(option => (
                                <option key={option.itemId} value={option.itemId}>
                                  {option.fieldDescription}
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
                              <option key="default-initiative" value="">
                                Select Initiative
                              </option>
                              {initiativeOptions && initiativeOptions.map(option => (
                                <option key={option.itemId} value={option.itemId}>
                                  {option.fieldDescription}
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
                              <option key="default-measurable-activity" value="">
                                Select Activity
                              </option>
                              {measurableActivityOptions && measurableActivityOptions.map(option => (
                                <option key={option.itemId} value={option.itemId}>
                                  {option.fieldDescription}
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

                        {/* Submit Button */}
                        <div className='d-flex justify-content-end mt-3'>
                          <Button type='submit' className='btn btn-primary'>Save</Button>
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
