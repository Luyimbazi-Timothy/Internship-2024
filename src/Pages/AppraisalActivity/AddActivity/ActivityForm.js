// src/components/AddActivityForm.js
import React from 'react'
import { Formik, Form , Field, ErrorMessage } from "formik";
import validationSchema from "./Schema";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Configs from "../../../commons/Configs";

function AddActivityForm() {
  const onSubmit = (values, onSubmitProps) => {
    const formData = {
      ...values,
      evidence: values.evidence.split(",").map((item) => item.trim()), // Assuming evidence is a comma-separated string
      date: new Date(values.date).toISOString(), // Ensure date is a string
    };
    onSubmit(formData);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <Formik
      initialValues={Configs.initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, onSubmitProps) => {
        const formData = {
          ...values,
          evidence: values.evidence.split(",").map((item) => item.trim()), // Convert evidence back to an array
          date: new Date(values.date).toISOString(), // Ensure date is a string
        };
        onSubmit(formData);
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
      }}
      validateOnChange={true}
      enableReinitialize
    >
      {(formik) => (
        <Form>
          <div className="container-sm border">
            <div className="row g-3">
              <p></p>
              <p className="text-center fw-semibold label">APPRAISAL FORM</p>

              <div className="col-sm-6">
                <div >
                    <label htmlFor='period' className='form-label fw-semibold'>Period<span className="error">*</span></label>
                    <Field as='select' id='period' name='period' className='form-select form-select-sm'>
                        {Configs.quarterDropdownOptions.map(option => {
                        return (
                            <option key={option.value} value={option.value}>
                            {option.key}
                            </option>
                        )
                        })}
                    </Field>
                    <ErrorMessage component={(props)=>{return <div className='error lh-sm'>{props.children}</div>}} name='period' />
                    </div>
              </div>

              <div className="col-sm-6">
                    <div >
                    <label htmlFor='perspective' className='form-label fw-semibold'>Perspective<span className="error">*</span></label>
                    <Field as='select' id='perspective' name='perspective' className='form-select form-select-sm'>
                        {Configs.perspectiveDropdownOptions.map(option => {
                        return (
                            <option key={option.value} value={option.value}>
                            {option.key}
                            </option>
                        )
                        })}
                    </Field>
                    <ErrorMessage component={(props)=>{return <div className='error lh-sm'>{props.children}</div>}} name='perspective' />
                    </div>
                    </div>

                <div className="col-sm-6">
                    <div >
                    <label htmlFor='ssMartaObjectives' className='form-label fw-semibold'>Ssmarta Objectives<span className="error">*</span></label>
                    <Field as='select' id='ssMartaObjectives' name='ssMartaObjectives' className='form-select form-select-sm'>
                        {Configs.ssmartaObjectiveDropdownOptions.map(option => {
                        return (
                            <option key={option.value} value={option.value}>
                            {option.key}
                            </option>
                        )
                        })}
                    </Field>
                    <ErrorMessage component={(props)=>{return <div className='error lh-sm'>{props.children}</div>}} name='ssMartaObjectives' />
                    </div>
                    </div>

              <div className="col-sm-6">
                <div >
                    <label htmlFor='initiative' className='form-label fw-semibold'>Initiative<span className="error">*</span></label>
                    <Field as='select' id='initiative' name='initiative' className='form-select form-select-sm'>
                        {Configs.initiativeDropdownOptions.map(option => {
                        return (
                            <option key={option.value} value={option.value}>
                            {option.key}
                            </option>
                        )
                        })}
                    </Field>
                    <ErrorMessage component={(props)=>{return <div className='error lh-sm'>{props.children}</div>}} name='initiative' />
                    </div>
              </div>

              <div className="col-sm-6">
                <div >
                    <label htmlFor='measurableActivities' className='form-label fw-semibold'>Measurable Activity<span className="error">*</span></label>
                    <Field as='select' id='measurableActivities' name='measurableActivities' className='form-select form-select-sm'>
                        {Configs.measurableActivityDropdownOptions.map(option => {
                        return (
                            <option key={option.value} value={option.value}>
                            {option.key}
                            </option>
                        )
                        })}
                    </Field>
                    <ErrorMessage component={(props)=>{return <div className='error lh-sm'>{props.children}</div>}} name='measurableActivities' />
                    </div>
              </div>

              <div className="col-sm-6">
                <div>
                    <label htmlFor='date' className="fw-semibold form-label">Date<span className="error">*</span>
                    </label>
                    <div className="col-sm-4"></div>
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
                    <ErrorMessage component={(props)=>{return <div className='error lh-sm'>{props.children}</div>}} name='date' />
                    </div>
              </div>

              <div className="col-sm-12">
                <div >
                <label htmlFor="implementations" className='fw-semibold form-label'>Implementation<span className="error">*</span></label>
                <Field as='textarea' id='implementations' name='implementations'  className='form-control' style={{height: 50}}/>
                <ErrorMessage component={(props)=>{return <div className='error lh-sm'>{props.children}</div>}} name='implementations' />
                </div>
              </div>

              <div className="col-sm-12">
                <div >
                <label htmlFor="comments" className='fw-semibold form-label'>Comment</label>
                <Field as='textarea' id='comments' name='comments'  className='form-control' style={{height: 50}}/>
                <ErrorMessage component={(props)=>{return <div className='error lh-sm'>{props.children}</div>}} name='comments' />
                </div>
              </div>

              <div className="col-sm-6">
                <div >
                <label htmlFor='stakeholders' className=' fw-semibold form-label'>Stakeholders</label>
                <Field id='stakeholders' name='stakeholders' className='form-control form-control-sm' />
                <ErrorMessage component={(props)=>{return <div className='error lh-sm'>{props.children}</div>}} name='stakeholders' />
                </div>
              </div>

              <div className="col-sm-6">
                <div>
                <label htmlFor='evidence' className="fw-semibold form-label">Evidence<span className="error">*</span></label>
                <Field
                    type="file"
                    id='evidence'
                    name='evidence'
                    className="form-control form-control-sm"
                />
                <ErrorMessage component={(props)=>{return <div className='error lh-sm'>{props.children}</div>}} name='evidence' />
                </div>
              </div>

              <div className="col-sm-12"></div>

              <div>
                <button
                  type="cancel"
                  disabled={formik.isSubmitting}
                  className="btn btn-danger btn-sm"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                  className="btn btn-primary btn-sm"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AddActivityForm;
