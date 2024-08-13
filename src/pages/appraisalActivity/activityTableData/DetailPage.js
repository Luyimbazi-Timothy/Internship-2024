import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Button, Box } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa";
import { MaterialReactTable } from "material-react-table";
import { Card, Stack } from "react-bootstrap";
import AddNewInitiativeDetailsModal from "./AddNewInitiativeDetailsModal"; // Or replace with CustomEditModal if applicable
import Swal from "sweetalert2";
import urlConfig from "../../../services/Urls";
import axios from "axios";
import {
  FaRegFilePdf,
  FaFileWord,
  FaFilePowerpoint,
  FaFileAlt,
} from "react-icons/fa";

import { PiFilePngThin } from "react-icons/pi";
import { tableExportHeaders } from "../../../components/exportTableData/ExportTableData";

const DetailPage = () => {
  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [tableData, setTableData] = useState([]);
  const [editData, setEditData] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data;
  const measurableActivityId = location.state?.activityId;

  useEffect(() => {
    if (measurableActivityId) {
      async function fetchData() {
        try {
          const urlEndpoint =
            urlConfig.measurableActivityImplementationsEndpoint +
            measurableActivityId;
          const response = await axios.get(urlEndpoint);
          const implementations = response.data;
          setTableData(
            implementations.map((implementation) => ({
              id: implementation.implementationId,
              date: new Date(implementation.createdDate).toLocaleString(), // Convert to Date object first
              description: implementation.description,
              comments: implementation.comment,
              stakeholders: implementation.stakeholder,
              evidence: implementation.evidenceFileName,
            }))
          );
          setRefresh(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    }

    if (!refresh) {
      setEditData(null);
    }
  }, [measurableActivityId, refresh]);

  const columns = [
    { header: "Date", accessorKey: "date", size: 50 },
    { header: "Implementations", accessorKey: "description" },
    { header: "Comments", accessorKey: "comments" },
    { header: "Stakeholders", accessorKey: "stakeholders" },
    { header: "Evidence", accessorKey: "evidence" },
    {
      header: "Action",
      accessorKey: "action",
      Cell: ({ row }) => (
        <Box display="flex" gap={1}>
          <Button
            variant="outlined"
            color="info"
            size="small"
            onClick={() => handleEdit(row)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={() => confirmDelete(row.original.id)}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  const confirmDelete = async (implementationId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, continue!!",
      allowOutsideClick: false,
      allowEscapeKey: false,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const urlEndpoint =
          urlConfig.deleteAnImplementationEndpoint + implementationId;
        try {
          await axios.delete(urlEndpoint);
          setTableData((prevData) =>
            prevData.filter((item) => item.id !== implementationId)
          );
          Swal.fire({
            title: "Deleted!",
            text: "Implementation activity deleted successfully.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error deleting implementation:", error);
          Swal.fire({
            title: "Error!",
            text: "There was a problem deleting the implementation.",
            icon: "error",
          });
        }
      }
    });
  };

  const displaySuccessMessage = (type) => {
    if (type === "error") {
      Swal.fire({
        position: "top",
        text: "Error occurred.",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2000,
      });
    } else if (type === "success") {
      Swal.fire({
        position: "top",
        text: "Implementation added successfully",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2000,
      });
    } else {
      Swal.fire({
        position: "top",
        text: "Record Updated Successfully",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2000,
      });
    }
  };

  const handleEdit = (row) => {
    setEditData(row.original);
    handleShow();
  };

  if (!data) {
    return (
      <Container>
        <p>No data available</p>
      </Container>
    );
  }

  const getFileTypeIcon = (fileName) => {
    const fileExtension = fileName.split(".").pop().toLowerCase();

    switch (fileExtension) {
      case "png":
        return <PiFilePngThin color="orange" />;
      case "pdf":
        return <FaRegFilePdf color="red" />;
      case "doc":
      case "docx":
        return <FaFileWord color="blue" />;
      case "ppt":
      case "pptx":
        return <FaFilePowerpoint color="orange" />;
      default:
        return <FaFileAlt color="gray" />;
    }
  };

  const renderEvidence = (row) => {
    return (
      <div>
        <Stack direction="horizontal" gap={3}>
          <div>
            <strong>Evidence:</strong> {getFileTypeIcon(row.original.evidence)}{" "}
            {row.original.evidence}
          </div>
          <div>
            <strong>
              <Button
                className="btn btn-primary"
                onClick={() => {
                  downloadEvidence(row.original.id);
                }}
              >
                Download
              </Button>
            </strong>
          </div>
        </Stack>
      </div>
    );
  };

  const downloadEvidence = (implementationId) => {
    const urlEndpoint = urlConfig.downloadEvidenceEndpoint + implementationId;
    window.open(urlEndpoint, "_blank");
  };

  const TablefileName = data.measurableActivity.activity + "- Implementations";

  return (
    <Card variant="outlined" style={{ padding: "16px", margin: "16px 0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="mb-1"
      >
        <h3>
          Activity:
          <span className="ms-2 text-primary">
            {data.measurableActivity.activity}
          </span>
        </h3>
        <Button
          variant="contained"
          startIcon={<FaArrowLeft />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>

      <Card.Header>
        <h4>Contract Defaults</h4>
      </Card.Header>
      <div className="mb-4">
        <div className="my-1" style={{ marginBottom: "16px" }}>
          <div className="border-1">
            <div>
              <span className="me-2">Period:</span>
              <span className="fw-bold">{data.measurableActivity.period}</span>
            </div>
            <div>
              <span className="me-2">Perspective:</span>
              <span className="fw-bold">
                {data.measurableActivity.perspective}
              </span>
            </div>
            <div>
              <span className="me-2">SSMARTA Objectives: </span>
              <span className="fw-bold">
                {data.measurableActivity.ssMartaObjectives}
              </span>
            </div>
            <div>
              <span className="me-2">Initiative:</span>
              <span className="fw-bold">
                {data.measurableActivity.initiative}
              </span>
            </div>
          </div>
        </div>
      </div>

      <Card.Header>
        <h4>Measurable Activity Implementations</h4>
      </Card.Header>
      <div className="d-flex justify-content-end align-items-end">
        <Button
          variant="contained"
          className="custom-blue-button mb-2 mt-1"
          onClick={handleShow}
        >
          Add Implementation
        </Button>
      </div>

      <AddNewInitiativeDetailsModal
        setRefresh={setRefresh}
        displaySuccessMessage={displaySuccessMessage}
        measurableActivity={data.measurableActivity.activity}
        MeasurableActivityId={data.id}
        show={show}
        handleClose={handleClose}
        initialData={editData}
      />

      <MaterialReactTable
        columns={columns}
        data={tableData}
        renderDetailPanel={({ row }) => (
          <Box>
            <div>
              <strong>Description:</strong> {row.original.description}
            </div>
            <div>
              <strong>Comments:</strong> {row.original.comments}
            </div>
            <div>
              <strong>Stakeholders:</strong> {row.original.stakeholders}
            </div>
            {renderEvidence(row)}
          </Box>
        )}
        enableRowSelection={true}
        enableSubRowSelection={true}
        columnFilterDisplayMode="popover"
        paginationDisplayMode="pages"
        positionToolbarAlertBanner="bottom"
        renderTopToolbarCustomActions={({ table, fileName = TablefileName }) =>
          tableExportHeaders(table, columns, fileName)
        }
      />
    </Card>
  );
};

export default DetailPage;
