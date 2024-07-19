import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import FormikControl from './formikControl';
import validationSchema from './schema';

const defaultInitialValues = {
  period: '',
  perspective: '',
  ssMartaObjectives: '',
  initiative: '',
  measurableActivities: '',
  implementations: '',
  date: '',
  comments: '',
  stakeholders: '',
  evidence: ''
}; 

const quarterDropdownOptions = [
  
  { key: 'Select a quarter', value: '' },
  { key: 'Q1', value: '2024 Q1' },
  { key: 'Q2', value: '2024 Q2' },
  { key: 'Q3', value: '2024 Q3' },
  { key: 'Q4', value: '2024 Q4' }

];

const perspectiveDropdownOptions = [
  { key: 'Select a perspective', value: '' },
  { key: 'Financial', value: 'Financial' },
  { key: 'Customer', value: 'Customer' },
  { key: 'Internal', value: 'Internal' },
  { key: 'Learning and Growth', value: 'Learning and Growth' }
];

const ssmartaObjectiveDropdownOptions = [
  { key: 'Select an objective', value: '' },
  { key: 'Increase Revenue', value: 'Increase Revenue' },
  { key: 'Enhance Customer Satisfaction', value: 'Enhance Customer Satisfaction' }
];

const initiativeDropdownOptions = [
  { key: 'Select an initiative', value: '' },
  { key: 'Expand Market', value: 'Expand Market' },
  { key: 'Improve Service Quality', value: 'Improve Service Quality' }
];

const measurableActivityDropdownOptions = [
  { key: 'Select a measurable activity', value: '' },
  { key: 'Increase sales by 10%', value: 'Increase sales by 10%' },
  { key: 'Reduce complaints by 20%', value: 'Reduce complaints by 20%' }
];

const AddActivityForm = ({ initialValues = defaultInitialValues, onSubmit, onCancel }) => {
  useEffect(() => {
    console.log("Initial values in form:", initialValues); // Debugging log
  }, [initialValues]);

  const formatEvidence = (evidence) => {
    if (Array.isArray(evidence)) {
      return evidence.join(', ');
    }
    return evidence;
  };

  return (
    <Formik
      initialValues={{ ...initialValues, evidence: formatEvidence(initialValues.evidence) }}
      validationSchema={validationSchema}
      onSubmit={(values, onSubmitProps) => {
        const formData = {
          ...values,
          evidence: values.evidence.split(',').map(item => item.trim()), // Convert evidence back to an array
          date: new Date(values.date).toISOString() // Ensure date is a string
        };
        console.log('Form Data:', formData); // Debugging log
        onSubmit(formData);
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
      }}
      validateOnChange={true}
      enableReinitialize
    >
      {formik => (
        <Form>
          <FormikControl
            control='select'
            label='Period'
            name='period'
            options={quarterDropdownOptions}
          />

          <FormikControl
            control='select'
            label='Perspective'
            name='perspective'
            options={perspectiveDropdownOptions}
          />

          <FormikControl
            control='select'
            label='Ssmarta Objectives'
            name='ssMartaObjectives'
            options={ssmartaObjectiveDropdownOptions}
          />

          <FormikControl
            control='select'
            label='Initiative'
            name='initiative'
            options={initiativeDropdownOptions}
          />

          <FormikControl
            control='select'
            label='Measurable Activities'
            name='measurableActivities'
            options={measurableActivityDropdownOptions}
          />

          <FormikControl
            control='input'
            type='text'
            label='Implementation'
            name='implementations'
          />
          <FormikControl
            control='date'
            label='Date'
            name='date'
          />

          <FormikControl
            control='textarea'
            label='Comment'
            name='comments'
          />

          <FormikControl
            control='input'
            type='text'
            label='Stakeholders'
            name='stakeholders'
          />

          <FormikControl
            control='input'
            type='text'
            label='Evidence'
            name='evidence'
          />

          <button onClick={onCancel}>Cancel</button>
          <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>
            Submit
          </button>
         
        </Form>
      )}
    </Formik>
  );
};

export default AddActivityForm;
