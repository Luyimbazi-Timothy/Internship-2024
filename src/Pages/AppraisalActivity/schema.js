import * as Yup from 'yup'

const validationSchema = Yup.object({
    period: Yup.string().required('Required'),
    perspective: Yup.string().required('Required'),
    ssMartaObjectives: Yup.string().required('Required'),
    initiative: Yup.string().required('Required'),
    measurableActivities: Yup.string().required('Required'),
    implementations: Yup.string().required('Required'),
    date: Yup.string().required('Required*'),
    comments: Yup.string(),
    stakeholders: Yup.string(),
    evidence: Yup.string(),
  })

export default validationSchema  