// src/components/AddActivityForm.js
import React from 'react'
import { Formik, Form , Field, ErrorMessage } from "formik";
import validationSchema from "./Schema";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Configs from "../../../commons/Configs";

function AddActivityForm({ onSubmit }) {
  const handleSubmit = (values, onSubmitProps) => {
    const formData = {
      ...values,
      date: new Date(values.date).toISOString() // Ensure date is a string
    };
    console.log('Form data:', formData);
    // Convert record to a data_object_structure
    const new_record =  {
      id: 1,
      measurableActivity: {
        activity: formData.measurableActivities,
        period: formData.period,
        perspective: formData.perspectiveActivity,
        ssMartaObjectives: formData.ssMartaObjectivesActivity,
        initiative: formData.initiative,
        implementations: [  ],
      },
    }
    onSubmit(new_record);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <Formik
      initialValues={Configs.initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange={true}
      enableReinitialize
    >
      {formik => (
        <Form>
          <div className='container-sm border'>
            <div className="row g-3">
              <h4 className='text-center fw-semibold label'>Create Activity Form</h4>
              
              {/* Period Field */}
              <div className="col-sm-6">
                <label htmlFor='period' className='form-label fw-semibold'>Period<span className="error">*</span></label>
                <Field as='select' id='period' name='period' className='form-select form-select-sm'>
                  {Configs.quarterDropdownOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.key}
                    </option>
                  ))}
                </Field>
                <ErrorMessage component="div" name='period' className='text-danger' />
              </div>

              {/* Perspective Field */}
              <div className="col-sm-6">
                <label htmlFor='perspective' className='form-label fw-semibold'>Perspective<span className="error">*</span></label>
                <Field as='select' id='perspective' name='perspective' className='form-select form-select-sm'>
                  {Configs.perspectiveDropdownOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.key}
                    </option>
                  ))}
                </Field>
                <ErrorMessage component="div" name='perspective' className='text-danger' />
              </div>

              {/* Ssmarta Objectives Field */}
              <div className="col-sm-6">
                <label htmlFor='ssMartaObjectives' className='form-label fw-semibold'>Ssmarta Objectives<span className="error">*</span></label>
                <Field as='select' id='ssMartaObjectives' name='ssMartaObjectives' className='form-select form-select-sm'>
                  {Configs.ssmartaObjectiveDropdownOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.key}
                    </option>
                  ))}
                </Field>
                <ErrorMessage component="div" name='ssMartaObjectives' className='text-danger' />
              </div>

              {/* Initiative Field */}
              <div className="col-sm-6">
                <label htmlFor='initiative' className='form-label fw-semibold'>Initiative<span className="error">*</span></label>
                <Field as='select' id='initiative' name='initiative' className='form-select form-select-sm'>
                  {Configs.initiativeDropdownOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.key}
                    </option>
                  ))}
                </Field>
                <ErrorMessage component="div" name='initiative' className='text-danger' />
              </div>

              {/* Measurable Activities Field */}
              <div className="col-sm-6">
                <label htmlFor='measurableActivities' className='form-label fw-semibold'>Measurable Activity<span className="error">*</span></label>
                <Field as='select' id='measurableActivities' name='measurableActivities' className='form-select form-select-sm'>
                  {Configs.measurableActivityDropdownOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.key}
                    </option>
                  ))}
                </Field>
                <ErrorMessage component="div" name='measurableActivities' className='text-danger' />
              </div>

              {/* Date Field */}
              <div className="col-sm-6">
                <label htmlFor='date' className="fw-semibold form-label">Date<span className="error">*</span></label>
                <Field name='date'>
                  {({ form, field }) => {
                    const { setFieldValue } = form;
                    const { value } = field;
                    return (
                      <DateView
                        id='date'
                        {...field}
                        selected={value}
                        onChange={(val) => setFieldValue('date', val)}
                        className="form-control form-control-sm"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage component="div" name='date' className='text-danger' />
              </div>

              {/* Submit and Cancel Buttons */}
              <div className='col-sm-12'></div>
              <div className='d-flex justify-content-end align-content-end my-1'>
                <button type="reset" disabled={formik.isSubmitting} className="btn btn-danger me-2">Cancel</button>
                <button type="submit" disabled={!formik.isValid || formik.isSubmitting} className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AddActivityForm;