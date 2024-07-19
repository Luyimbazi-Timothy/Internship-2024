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
  ]

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
  
const Configs={
    quarterDropdownOptions,
    perspectiveDropdownOptions,
    ssmartaObjectiveDropdownOptions,
    initiativeDropdownOptions,
    measurableActivityDropdownOptions,
    initialValues
};

export default Configs;