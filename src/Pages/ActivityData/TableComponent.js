import React, { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { format } from 'date-fns';

// Function to flatten the nested data
const flattenData = (data) => {
  return data.flatMap(item => {
    const { initiative } = item;
    return initiative.initiativeDetails.measurableActivities.map((activity, index) => ({
      period: item.period,
      perspective: item.perspective,
      ssMartaObjectives: item.ssMartaObjectives,
      initiative: initiative.title,
      measurableActivities: activity,
      implementations: initiative.initiativeDetails.implementations[index] || '',
      comments: initiative.initiativeDetails.comments[index] || '',
      stakeholders: initiative.initiativeDetails.stakeholders[index] || '',
      evidence: initiative.initiativeDetails.evidence[index] || '',
      date: format(new Date(item.date), 'yyyy-MM-dd'), // format the date
    }));
  });
};

const TableComponent = ({ data, onRowClick }) => {
  const processedData = useMemo(() => flattenData(data), [data]);

  const columns = useMemo(() => [
    {
      accessorKey: 'period',
      header: 'Period',
      size: 20,
    },
    {
      accessorKey: 'perspective',
      header: 'Perspective',
      size: 70,
    },
    {
      accessorKey: 'ssMartaObjectives',
      header: 'SSMartaObjectives',
      size: 150,
    },
    {
      accessorKey: 'initiative',
      header: 'Initiative',
      size: 150,
    },
    {
      accessorKey: 'measurableActivities',
      header: 'Measurable Activities',
      size: 200,
    },
    
    {
      accessorKey: 'comments',
      header: 'Comments',
      size: 130,
    },
    {
      accessorKey: 'date',
      header: 'Date',
      size: 50,
    },
  ], []);

  const table = useMaterialReactTable({
    columns,
    data: processedData,
    // enableDensityToggle: false,
    initialState: { density: 'compact' },
  });
  console.log(processedData);
  return (
    <>
      <MaterialReactTable  table={table} />
    </>
  );
};

export default TableComponent;
