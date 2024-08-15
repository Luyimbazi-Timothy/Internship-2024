// utils/exportTableData.js

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import { Box, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export const exportTableData = (columns, rows, fileName = 'tableRows.pdf') => {
  const doc = new jsPDF();

  const tableHeaders = columns.map((col) => col.header);
  const tableData = rows.map((row) =>
    columns.map((col) => {
      const accessorKey = col.accessorKey.split('.');
      let value = row.original;
      accessorKey.forEach((key) => {
        value = value ? value[key] : '';
      });
      return value || '';
    })
  );

  autoTable(doc, {
    head: [tableHeaders],
    body: tableData,
  });

  doc.save(fileName);
};


export const tableExportHeaders = (table, columns, fileName) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          padding: '8px',
          flexWrap: 'wrap',
        }}
      >
        <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          onClick={() =>
            exportTableData(columns, table.getPrePaginationRowModel().rows, fileName)
          }
          startIcon={<FileDownloadIcon />}
        >
          Export All Rows
        </Button>
        <Button
          disabled={table.getRowModel().rows.length === 0}
          onClick={() => exportTableData(columns, table.getRowModel().rows, fileName)}
          startIcon={<FileDownloadIcon />}
        >
          Export Page Rows
        </Button>
        <Button
          disabled={!table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()}
          onClick={() =>
            exportTableData(columns, table.getSelectedRowModel().rows, fileName)
          }
          startIcon={<FileDownloadIcon />}
        >
          Export Selected Rows
        </Button>
      </Box>
    </>
  )
}