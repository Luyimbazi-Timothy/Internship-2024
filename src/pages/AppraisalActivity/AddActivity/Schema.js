import * as Yup from 'yup'

export const validationSchema = Yup.object({
    period: Yup.string().required('This is a required field.'),
    perspective: Yup.string().required('This is a required field.'),
    ssMartaObjectives: Yup.string().required('This is a required field.'),
    initiative: Yup.string().required('This is a required field.'),
    measurableActivities: Yup.string().required('This is a required field.'),
    date: Yup.date().required('This is a required field.'),
  })

export const controlPanelValidationSchema = Yup.object({
    content: Yup.string().required('Required*')
  })