import React, { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { tableExportHeaders } from '../../../components/exportTableData/ExportTableData';

const TableComponent = ({ data, onRowClick }) => {
  const [tableData, setTableData] = useState(data);
  const firstItem = data[0];
  const [period, setPeriod] = useState('');


  useEffect(() => {
    setTableData(data);
    if (firstItem && firstItem.measurableActivity) {
      const periodValue = firstItem.measurableActivity.period;
      setPeriod(periodValue);
    }
  }, [data, firstItem]);

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

  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={tableData}
        enableRowSelection={true}
        enableSubRowSelection={true}
        columnFilterDisplayMode="popover"
        paginationDisplayMode="pages"
        positionToolbarAlertBanner="bottom"
        muiTableBodyRowProps={({ row }) => ({
          onClick: () => {
            const measurableActivityId = row.original.id;
            onRowClick(measurableActivityId, row.id);
          },
          sx: {
            cursor: 'pointer',
          },
        })}
        renderTopToolbarCustomActions={({ table, fileName = period }) => (
          tableExportHeaders(table, columns, fileName)
        )}
        initialState={{ density: 'compact' }}
      />
    </>
  );
};

export default TableComponent;
