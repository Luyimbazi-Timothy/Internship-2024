import React, { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

const TableComponent = ({ data, onRowClick }) => {
  const [tableData, setTableData] = useState(data)

  useEffect(() => {
    setTableData(data)
  }, [data])

  const columns = useMemo(() => [
    {
      accessorKey: 'id',
      header: 'ID',
      size: 20,
    },
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
        onRowClick(row.id);
      },
      sx: {
        cursor: 'pointer', //you might want to change the cursor too when adding an onClick
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
