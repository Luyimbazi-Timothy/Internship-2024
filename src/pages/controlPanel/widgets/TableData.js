import { useMemo, React, useContext } from "react";
import { MaterialReactTable, MRT_ActionMenuItem } from "material-react-table";
import { Edit, Delete } from "@mui/icons-material";
import { Context } from "../ControlPanel";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

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
        size: 150,
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
        enableRowActions
        renderRowActionMenuItems={({ row, table }) => [
          // eslint-disable-next-line react/jsx-pascal-case
          <MRT_ActionMenuItem
            icon={<Edit />}
            key="edit"
            label="Edit"
            onClick={() => handleEdit(row)}
            table={table}
          />,
          // eslint-disable-next-line react/jsx-pascal-case
          <MRT_ActionMenuItem
            icon={<Delete />}
            key="delete"
            label="Delete"
            onClick={() => handleDelete(row)}
            table={table}
          />,
        ]}
      />
    </>
  );
}

export default TableData;
