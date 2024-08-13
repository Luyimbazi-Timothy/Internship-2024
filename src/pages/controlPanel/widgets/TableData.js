import { useMemo, React, useContext } from "react";
import { MaterialReactTable } from "material-react-table";
import { Edit, Delete } from "@mui/icons-material";
import { Context } from "../ControlPanel";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { tableExportHeaders } from '../../../components/exportTableData/ExportTableData';

function TableData({ handleAdd, addBtnLabel }) {
  const {
    columnHeader,
    tableData,
    setFormOpen,
    setEditData,
    setIsPreview,
    setRowToDelete,
    setAlertOpen,
  } = useContext(Context);

  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        accessorKey: "field",
        header: columnHeader,
        size: 650,
      },
      {
        id: 'actions', // Custom column for actions
        header: 'Actions',
        size: 40,
        Cell: ({ row, table }) => (
          <Box display="flex">
            <Button
              variant="contained"
              color="primary"
              size="small"
              className="me-2"
              startIcon={<Edit />}
              onClick={() => handleEdit(row)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              startIcon={<Delete />}
              onClick={() => handleDelete(row)}
            >
              Delete
            </Button>
          </Box>
        ),
      },
     
    ],
    [columnHeader]
  );

  const handleEdit = (row) => {
    setFormOpen(true);
    setIsPreview(true);
    setEditData(row.original);
    console.log("Original Data", row.original);
  };

  const handleDelete = (row) => {
    setEditData(row.original);
    setRowToDelete(row);
    setAlertOpen(true);
  };

  const handleToDashboardNavigation = () => {
    navigate("/dashboard");
  };

  const tableName = "My " + addBtnLabel;

  return (
    <>
      <Box display="flex" justifyContent="flex-end" width="100%">
        <Button
          onClick={handleToDashboardNavigation}
          variant="contained"
          color="secondary"
          startIcon={<ArrowBackIcon />}
        >
          Back to Dashboard
        </Button>
      </Box>
      <br />
      <Box display="flex" justifyContent="flex-end" width="100%">
        <Button onClick={handleAdd} variant="contained" endIcon={<AddIcon />}>
          Add {addBtnLabel}
        </Button>
      </Box>
      <br />
      <MaterialReactTable
        columns={columns}
        data={tableData}
        // enableRowActions
        enableRowSelection={true}
        columnFilterDisplayMode="popover"
        paginationDisplayMode="pages"
        positionToolbarAlertBanner="bottom"
        renderTopToolbarCustomActions={({ table, fileName = tableName }) => (
          tableExportHeaders(table, columns, fileName)
        )}
      />
    </>
  );
}

export default TableData;
