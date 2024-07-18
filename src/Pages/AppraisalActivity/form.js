import { Formik, Form } from 'formik'
import FormikControl from './formikControl'
import validationSchema from './schema'

const initialValues = {
  period: '',
  perspective: '',
  ssmarta_objectives: '',
  initiative: '',
  measurable_activities: '',
  implementation:'',
  date:'',
  comment:'',
  stakeholders:'',
  evidence:''
}

const quarterDropdownOptions = [
    { key: 'Select a quarter', value: '' },
    { key: 'Q1', value: 'quarter1' },
    { key: 'Q2', value: 'quarter2' },
    { key: 'Q3', value: 'quarter3' },
    { key: 'Q4', value: 'quarter4' }
  ]

const perspectiveDropdownOptions = [
    { key: 'Select a perspective', value: '' },
    { key: 'Organisation', value: 'organisation' },
    { key: 'Business', value: 'business' },
    { key: 'Financial', value: 'financial' },
    { key: 'Client', value: 'client' }
  ]

const ssmartaObjectiveDropdownOptions = [
    { key: 'Select an objective', value: '' },
    { key: 'SO1', value: 'so1' },
    { key: 'SO2', value: 'so2' },
    { key: 'SO3', value: 'so3' },
    { key: 'SO4', value: 'so4' }
  ]  

const initiativeDropdownOptions = [
    { key: 'Select an initiative', value: '' },
    { key: 'I1', value: 'i1' },
    { key: 'I2', value: 'i2' },
    { key: 'I3', value: 'i3' },
    { key: 'I4', value: 'i4' }
  ] 
 
const measurableActivityDropdownOptions = [
    { key: 'Select a measurable activity', value: '' },
    { key: 'MA1', value: 'ma1' },
    { key: 'MA2', value: 'ma2' },
    { key: 'MA3', value: 'ma3' },
    { key: 'MA4', value: 'ma4' }
  ] 


const onSubmit = (values, onSubmitProps)  => {
    console.log('Form data', values)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
} 



  
function AddActivityForm() {


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
            name='ssmarta_objectives'
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
            label='Measureable Activities'
            name='measurable_activities'
            options={measurableActivityDropdownOptions}
          />

      <FormikControl
            control='input'
            type='text'
            label='Implementation'
            name='implementation'
          />
      <FormikControl
            control='date'
            label='Date'
            name='date'
          />

      <FormikControl
            control='textarea'
            label='Comment'
            name='comment'
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
        
      <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>
        Submit
        </button>
    </Form>
        )}
    </Formik>
  )
}

export default AddActivityForm