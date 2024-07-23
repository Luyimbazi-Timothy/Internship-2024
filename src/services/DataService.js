
const fetchData = async () => {
  const tableData = [
    {
      id: 1,
      measurableActivity: {
        activity: "Develop E-tax",
        period: 'Q1',
        perspective: 'Financial',
        ssMartaObjectives: 'Increase Revenue',
        initiative: 'Develop tax collection applications',
        implementations: [
          {
            id: 2897,
            description: 'Implement tax collection feature',
            comment: 'comment 1',
            stakeholder: ['stakeholder 1', 'stakeholder 2'],
            evidence: 'evidence 1',
            date: '2024-01-15',
          },
          {
            id: 2898,
            description: 'Improve existing features',
            comment: 'comment 2',
            stakeholder: ['stakeholder 1', 'stakeholder 2'],
            evidence: 'evidence 2',
            date: '2024-01-15',
          },
        ],
      },
    },
    {
      id: 2,
      measurableActivity: {
        activity: "Develop Touchpoint",
        period: 'Q2',
        perspective: 'Operational',
        ssMartaObjectives: 'Enhance Efficiency',
        initiative: 'Optimize tax processing systems',
        implementations: [
          {
            id: 2899,
            description: 'Automate tax return process',
            comment: 'comment 3',
            stakeholder: ['stakeholder 3'],
            evidence: 'evidence 3',
            date: '2024-04-20',
          },
          {
            id: 2900,
            description: 'Automate tax calculation process',
            comment: 'Initial implementation phase showed a 20% increase in processing speed.',
            stakeholder: ['Manager 1', 'Manager 2'],
            evidence: 'Implementation report and process audit',
            date: '2024-04-20',
          },
        ],
      },
    },
    {
      id: 3,
      measurableActivity: {
        activity: "Develop Appraisal Requirements",
        period: 'Q4',
        perspective: 'Business',
        ssMartaObjectives: 'Increase Revenue',
        initiative: 'Colect requirements',
        implementations: [
          {
            id: 2897,
            description: 'Implement tax collection feature',
            comment: 'comment 1',
            stakeholder: ['stakeholder 1', 'stakeholder 2'],
            evidence: 'evidence 1',
            date: '2024-01-15',
          },
          {
            id: 2899,
            description: 'Improve existing features',
            comment: 'comment 2',
            stakeholder: ['stakeholder 1', 'stakeholder 2'],
            evidence: 'evidence 2',
            date: '2024-01-15',
          },
          {
            id: 2900,
            description: 'Optimize',
            comment: 'Difficult',
            stakeholder: ['stakeholder 1'],
            evidence: 'OptimizationReport',
            date: '2024-12-15',
          },
        ],
      },
    },
    {
      id: 4,
      measurableActivity: {
        activity: "Develop New Marketing Strategy",
        period: 'Q1',
        perspective: 'Marketing',
        ssMartaObjectives: 'Increase Brand Awareness',
        initiative: 'Create a new marketing plan',
        implementations: [
          {
            id: 2901,
            description: 'Market research',
            comment: 'Research on current market trends',
            stakeholder: ['stakeholder 4', 'stakeholder 5'],
            evidence: 'Market research report',
            date: '2024-02-01',
          },
          {
            id: 2902,
            description: 'Develop marketing campaign',
            comment: 'Plan for new marketing campaign',
            stakeholder: ['stakeholder 4', 'stakeholder 5'],
            evidence: 'Marketing plan document',
            date: '2024-02-10',
          },
        ],
      },
    },
    {
      id: 5,
      measurableActivity: {
        activity: "Enhance Customer Support",
        period: 'Q2',
        perspective: 'Customer Service',
        ssMartaObjectives: 'Improve Customer Satisfaction',
        initiative: 'Implement new support system',
        implementations: [
          {
            id: 2903,
            description: 'Research support systems',
            comment: 'Analyze different support systems',
            stakeholder: ['stakeholder 6'],
            evidence: 'Support system analysis',
            date: '2024-04-05',
          },
          {
            id: 2904,
            description: 'Deploy new support system',
            comment: 'Launch new support system',
            stakeholder: ['stakeholder 6', 'stakeholder 7'],
            evidence: 'Deployment report',
            date: '2024-04-15',
          },
        ],
      },
    },
    {
      id: 6,
      measurableActivity: {
        activity: "Improve IT Infrastructure",
        period: 'Q3',
        perspective: 'Technology',
        ssMartaObjectives: 'Increase System Efficiency',
        initiative: 'Upgrade IT systems',
        implementations: [
          {
            id: 2905,
            description: 'Server upgrades',
            comment: 'Upgrade servers to new versions',
            stakeholder: ['stakeholder 8'],
            evidence: 'Server upgrade report',
            date: '2024-07-01',
          },
          {
            id: 2906,
            description: 'Network optimization',
            comment: 'Optimize network performance',
            stakeholder: ['stakeholder 8', 'stakeholder 9'],
            evidence: 'Network optimization report',
            date: '2024-07-15',
          },
        ],
      },
    },
    {
      id: 7,
      measurableActivity: {
        activity: "Launch New Product Line",
        period: 'Q4',
        perspective: 'Product Development',
        ssMartaObjectives: 'Expand Product Portfolio',
        initiative: 'Develop and launch new products',
        implementations: [
          {
            id: 2907,
            description: 'Product design',
            comment: 'Design new products',
            stakeholder: ['stakeholder 10'],
            evidence: 'Product design document',
            date: '2024-10-01',
          },
          {
            id: 2908,
            description: 'Market testing',
            comment: 'Test products in the market',
            stakeholder: ['stakeholder 10', 'stakeholder 11'],
            evidence: 'Market testing report',
            date: '2024-10-20',
          },
        ],
      },
    },
    {
      id: 8,
      measurableActivity: {
        activity: "Improve Employee Training",
        period: 'Q1',
        perspective: 'HR',
        ssMartaObjectives: 'Enhance Employee Skills',
        initiative: 'Develop new training programs',
        implementations: [
          {
            id: 2909,
            description: 'Training needs analysis',
            comment: 'Identify training needs',
            stakeholder: ['stakeholder 12'],
            evidence: 'Training needs report',
            date: '2024-01-10',
          },
          {
            id: 2910,
            description: 'Develop training modules',
            comment: 'Create new training modules',
            stakeholder: ['stakeholder 12', 'stakeholder 13'],
            evidence: 'Training modules',
            date: '2024-01-25',
          },
        ],
      },
    },
    {
      id: 9,
      measurableActivity: {
        activity: "Optimize Supply Chain",
        period: 'Q2',
        perspective: 'Logistics',
        ssMartaObjectives: 'Reduce Costs',
        initiative: 'Streamline supply chain processes',
        implementations: [
          {
            id: 2911,
            description: 'Supplier analysis',
            comment: 'Evaluate current suppliers',
            stakeholder: ['stakeholder 14'],
            evidence: 'Supplier analysis report',
            date: '2024-05-01',
          },
          {
            id: 2912,
            description: 'Implement new processes',
            comment: 'Introduce new supply chain processes',
            stakeholder: ['stakeholder 14', 'stakeholder 15'],
            evidence: 'Process implementation report',
            date: '2024-05-20',
          },
        ],
      },
    },
    {
      id: 10,
      measurableActivity: {
        activity: "Expand International Operations",
        period: 'Q3',
        perspective: 'Business Development',
        ssMartaObjectives: 'Enter New Markets',
        initiative: 'Set up operations in new countries',
        implementations: [
          {
            id: 2913,
            description: 'Market research',
            comment: 'Research new markets',
            stakeholder: ['stakeholder 16'],
            evidence: 'Market research report',
            date: '2024-08-01',
          },
          {
            id: 2914,
            description: 'Establish offices',
            comment: 'Set up new offices',
            stakeholder: ['stakeholder 16', 'stakeholder 17'],
            evidence: 'Office setup report',
            date: '2024-08-20',
          },
        ],
      },
    },
    {
      id: 11,
      measurableActivity: {
        activity: "Develop Mobile Application",
        period: 'Q4',
        perspective: 'Technology',
        ssMartaObjectives: 'Enhance User Experience',
        initiative: 'Create a new mobile app',
        implementations: [
          {
            id: 2915,
            description: 'App design',
            comment: 'Design user-friendly app',
            stakeholder: ['stakeholder 18'],
            evidence: 'App design document',
            date: '2024-11-01',
          },
          {
            id: 2916,
            description: 'Beta testing',
            comment: 'Conduct beta testing',
            stakeholder: ['stakeholder 18', 'stakeholder 19'],
            evidence: 'Beta test report',
            date: '2024-11-20',
          },
        ],
      },
    },
    {
      id: 12,
      measurableActivity: {
        activity: "Increase Social Media Presence",
        period: 'Q1',
        perspective: 'Marketing',
        ssMartaObjectives: 'Boost Online Engagement',
        initiative: 'Develop social media strategy',
        implementations: [
          {
            id: 2917,
            description: 'Social media audit',
            comment: 'Audit current social media channels',
            stakeholder: ['stakeholder 20'],
            evidence: 'Audit report',
            date: '2024-01-05',
          },
          {
            id: 2918,
            description: 'Create content plan',
            comment: 'Plan for new content',
            stakeholder: ['stakeholder 20', 'stakeholder 21'],
            evidence: 'Content plan document',
            date: '2024-01-20',
          },
        ],
      },
    },
    {
      id: 13,
      measurableActivity: {
        activity: "Implement Sustainability Initiatives",
        period: 'Q2',
        perspective: 'Environmental',
        ssMartaObjectives: 'Reduce Carbon Footprint',
        initiative: 'Introduce green practices',
        implementations: [
          {
            id: 2919,
            description: 'Energy audit',
            comment: 'Conduct energy audit',
            stakeholder: ['stakeholder 22'],
            evidence: 'Energy audit report',
            date: '2024-04-01',
          },
          {
            id: 2920,
            description: 'Implement recycling program',
            comment: 'Launch recycling initiatives',
            stakeholder: ['stakeholder 22', 'stakeholder 23'],
            evidence: 'Recycling program report',
            date: '2024-04-15',
          },
        ],
      },
    },
  ];
  


  return tableData;
};

export default fetchData;




const obj_structure = [{
  id: 1,
  measurableActivities: {
    period: 'Q2',
    perspective: 'Operational',
    ssMartaObjectives: 'Enhance Efficiency',
    initiative: 'Optimize tax processing systems',
    implementations: [
      {
        id: 2897,
        description: 'Automate tax calculation process ',
        comment: 'Initial implementation phase showed a 20% increase in processing speed.',
        stakeholder: ['Manager 1', 'Manager 2'],
        evidence: 'Implementation report and process audit',
        date: '2024-04-20',
      },
      {
        id: 2898,
        description: 'Develop and deploy a new automated billing system .',
        comment: 'The new system is expected to reduce overdue invoices by 30%.',
        stakeholder: ['Billing Department', 'Accounting Team'],
        evidence: 'System deployment report and user feedback',
        date: '2024-07-15',
      },
    ],
  },
}];
