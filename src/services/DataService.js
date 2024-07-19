
const fetchData = async () => {
  const tableData = [
    {
      period: 'Q1',
      perspective: 'Financial',
      ssMartaObjectives: 'Increase Revenue',
      initiative: {
        title: 'Develop tax collection applications',
        initiativeDetails: {
          measurableActivities: ['Implement tax collection feature', 'Improve existing features'],
          implementations: ['Implementation 1', 'Implementation 2'],
          comments: ['comment 1', 'comment 2'],
          stakeholders: ['stakeholder 1', 'stakeholder 2'],
          evidence: ['evidence 1', 'evidence 2'],
        },
      },
      date: '2024-01-15',
    },
    {
      period: 'Q2',
      perspective: 'Operational',
      ssMartaObjectives: 'Enhance Efficiency',
      initiative: {
        title: 'Optimize tax processing systems',
        initiativeDetails: {
          measurableActivities: ['Automate tax return process'],
          implementations: ['Implementation 3'],
          comments: ['comment 3', 'comment 4'],
          stakeholders: ['stakeholder 3'],
          evidence: ['evidence 3'],
        },
      },
      date: '2024-04-20',
    },
  ];
  
  return tableData;
};

export default fetchData;
