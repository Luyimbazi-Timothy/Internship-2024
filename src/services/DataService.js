// src/services/dataService.js
import cow1 from '../photos/cow1.jpg';
import cow2 from '../photos/cow2.jpg';
import goat1 from '../photos/goat1.jpg';
import goat2 from '../photos/goat2.jpg';
import goat3 from '../photos/goat3.jpg';
import cow3 from '../photos/cow3.jpg';

const fetchData = async () => {
  const tableData = [
    {
      period: '2024 Q1',
      perspective: 'Financial',
      ssMartaObjectives: 'Increase Revenue',
      initiative: 'Expand Market',
      measurableActivities: 'Increase sales by 10%',
      implementations: 'Implemented new sales strategies',
      comments: 'Quarterly goals met',
      stakeholders: 'Sales team, Marketing', 
      evidence: [cow1, goat2],
    },
    {
      period: '2024 Q2',
      perspective: 'Customer',
      ssMartaObjectives: 'Enhance Customer Satisfaction',
      initiative: 'Improve Service Quality',
      measurableActivities: 'Reduce complaints by 20%',
      implementations: 'Conducted customer feedback surveys',
      comments: 'Positive feedback received',
      stakeholders: 'Customer support, Quality assurance',
      evidence: [cow1, goat2],
    },
  ];
  return tableData;
};

export default fetchData;
