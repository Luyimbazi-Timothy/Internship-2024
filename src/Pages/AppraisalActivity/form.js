// src/components/AddActivityForm.js
import { Formik, Form } from 'formik';
import FormikControl from './formikControl';
import validationSchema from './schema';
import Configs from '../../CommonConfigs/Configs';

function AddActivityForm () {
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
    
    const onSubmit = (values, onSubmitProps)  => {
        const formData = {
          ...values,
          evidence: values.evidence.split(',').map(item => item.trim()), // Assuming evidence is a comma-separated string
          date: new Date(values.date).toISOString() // Ensure date is a string
        }
        console.log('Form Data:', formData) // Debug the form data
        onSubmit(formData)
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()
      
    } 
    
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
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
            options={Configs.quarterDropdownOptions}
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
            control='input'
            type='text'
            label='Implementation'
            name='implementations'
          />
          </div>
          
          <div className='col-sm-12'>
          <FormikControl
            control='textarea'
            label='Comment'
            name='comments'
          />
          </div>

          <div className='col-sm-6'>
          <FormikControl
            control='input'
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
        < button type='cancel' disabled={formik.isSubmitting} className='btn btn-danger btn-sm'>
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
