// src/components/AddActivityForm.js
import { Formik, Form } from 'formik';
import FormikControl from './formikControl';
import validationSchema from './schema';

const initialValues = {
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
  { key: 'Q1', value: 'quarter1' },
  { key: 'Q2', value: 'quarter2' },
  { key: 'Q3', value: 'quarter3' },
  { key: 'Q4', value: 'quarter4' }
];

const perspectiveDropdownOptions = [
  { key: 'Select a perspective', value: '' },
  { key: 'Organisation', value: 'organisation' },
  { key: 'Business', value: 'business' },
  { key: 'Financial', value: 'financial' },
  { key: 'Client', value: 'client' }
];

const ssmartaObjectiveDropdownOptions = [
  { key: 'Select an objective', value: '' },
  { key: 'SO1', value: 'so1' },
  { key: 'SO2', value: 'so2' },
  { key: 'SO3', value: 'so3' },
  { key: 'SO4', value: 'so4' }
];

const initiativeDropdownOptions = [
  { key: 'Select an initiative', value: '' },
  { key: 'I1', value: 'i1' },
  { key: 'I2', value: 'i2' },
  { key: 'I3', value: 'i3' },
  { key: 'I4', value: 'i4' }
];

const measurableActivityDropdownOptions = [
  { key: 'Select a measurable activity', value: '' },
  { key: 'MA1', value: 'ma1' },
  { key: 'MA2', value: 'ma2' },
  { key: 'MA3', value: 'ma3' },
  { key: 'MA4', value: 'ma4' }
];


function AddActivityForm ({onSubmit}) {
  return (
    <Formik
      initialValues={initialValues}
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
          <div className='container-sm border'>
          <div className="row g-3">
          <p></p>
          <p className='text-center fw-semibold label'>APPRAISAL FORM</p>

          <div className='col-sm-6'>
          <FormikControl
            control='select'
            label='Period'
            name='period'
            options={quarterDropdownOptions}
          />
          </div>

          <div className='col-sm-6'>
          <FormikControl
            control='select'
            label='Perspective'
            name='perspective'
            options={perspectiveDropdownOptions}
          />
          </div>

          <div className='col-sm-6'>
          <FormikControl
            control='select'
            label='Ssmarta Objectives'
            name='ssMartaObjectives'
            options={ssmartaObjectiveDropdownOptions}
          />
          </div>

          <div className='col-sm-6'>
          <FormikControl
            control='select'
            label='Initiative'
            name='initiative'
            options={initiativeDropdownOptions}
          />
          </div>

          <div className='col-sm-6'>
          <FormikControl
            control='select'
            label='Measurable Activities'
            name='measurableActivities'
            options={measurableActivityDropdownOptions}
          />
          </div>

          <div className='col-sm-6'>
          <FormikControl
            control='date'
            label='Date'
            name='date'
          />
          </div>

          <div className='col-sm-12'>
          <FormikControl
            control='textarea'
            label='Implementation'
            name='implementations'
          />
          </div>
          
          <div className='col-sm-12'>
          <FormikControl
            control='unrequiredTextArea'
            label='Comment'
            name='comments'
          />
          </div>

          <div className='col-sm-6'>
          <FormikControl
            control='unrequiredInput'
            type='text'
            label='Stakeholders'
            name='stakeholders'
          />
          </div>

          <div className='col-sm-6'>
          <FormikControl
            control='upload'
            label='Evidence'
            name='evidence'
          />
          </div>

          <div className='col-sm-12'>
          </div>


        <div>
        < button type='cancel'disabled={formik.isSubmitting} className='btn btn-danger btn-sm'>
        Cancel
        </button> 

        <button type='submit' disabled={!formik.isValid || formik.isSubmitting} className='btn btn-primary btn-sm'>
        Submit
        </button>
        </div> 
        </div>

      </div>
        </Form>
      )}
    </Formik>
  )
}

export default AddActivityForm;
