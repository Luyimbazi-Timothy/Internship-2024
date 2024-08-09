import React, { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

const TableComponent = ({ data, onRowClick }) => {
  const [tableData, setTableData] = useState(data)

  useEffect(() => {
    setTableData(data)
  }, [data])
// const loggedinid =localstorage.get("loggedInId");
  const columns = useMemo(() => [
    {
      accessorKey: 'measurableActivity.period',
      header: 'Period',
      size: 20,
    },
    {
      accessorKey: 'measurableActivity.perspective',
      header: 'Perspective',
      size: 70,
    },
    {
      accessorKey: 'measurableActivity.ssMartaObjectives',
      header: 'SSMartaObjectives',
      size: 150,
    },
    {
      accessorKey: 'measurableActivity.initiative',
      header: 'Initiative',
      size: 150,
    },

    {
      accessorKey: 'measurableActivity.activity',
      header: 'Measurable Activity',
      size: 200,
    },

  ], []);

  const table = useMaterialReactTable({
    columns,
    data: tableData,
    initialState: { density: 'compact' },
    muiTableBodyRowProps: ({ row }) => ({
      onClick: (event) => {
        const measurableActivityId=row.original.id
        onRowClick(measurableActivityId,row.id);
      },
      sx: {
        cursor: 'pointer',
      },
    }),
  });

  return (
    <>
      <MaterialReactTable table={table} />
    </>
  );
};

export default TableComponent;
