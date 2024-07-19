import * as Yup from 'yup'

const validationSchema = Yup.object({
    period: Yup.string().required('This is a required field.'),
    perspective: Yup.string().required('This is a required field.'),
    ssMartaObjectives: Yup.string().required('This is a required field.'),
    initiative: Yup.string().required('This is a required field.'),
    measurableActivities: Yup.string().required('This is a required field.'),
    implementations: Yup.string().required('This is a required field.'),
    date: Yup.date().required('This is a required field.'),
    comments: Yup.string(),
    stakeholders: Yup.string(),
    evidence: Yup.mixed().required('This is a required field.')
  })

export default validationSchema  