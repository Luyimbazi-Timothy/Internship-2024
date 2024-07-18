import * as Yup from 'yup'

const validationSchema = Yup.object({
    period: Yup.string().required('Required*'),
    perspective: Yup.string().required('Required*'),
    ssmarta_objectives: Yup.string().required('Required*'),
    initiative: Yup.string().required('Required*'),
    measurable_activities: Yup.string().required('Required*'),
    implementation: Yup.string().required('Required*'),
    date: Yup.string().required('Required*'),
    comment: Yup.string(),
    stakeholders: Yup.string(),
    evidence: Yup.string(),
  })

export default validationSchema  