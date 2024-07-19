import * as Yup from 'yup'

const validationSchema = Yup.object({
    period: Yup.string().required('Required*'),
    perspective: Yup.string().required('Required*'),
    ssMartaObjectives: Yup.string().required('Required*'),
    initiative: Yup.string().required('Required*'),
    measurableActivities: Yup.string().required('Required*'),
    implementations: Yup.string().required('Required*'),
    date: Yup.date().required('Required*'),
    comments: Yup.string(),
    stakeholders: Yup.string(),
    evidence: Yup.mixed().required('Required*')
  })

export default validationSchema  