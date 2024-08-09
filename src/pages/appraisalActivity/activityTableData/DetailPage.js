import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Button, Box, TextField } from '@mui/material';
import { FaArrowLeft } from 'react-icons/fa';
import { MaterialReactTable } from 'material-react-table';
import { Card } from 'react-bootstrap';
import AddNewInitiativeDetailsModal from './AddNewInitiativeDetailsModal';
import Swal from 'sweetalert2';
import urlConfig from '../../../services/Urls';
import axios from 'axios';

const DetailPage = () => {
  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [tableData, setTableData] = useState([]);
  const [editData, setEditData] = useState(null); // State to hold data for editing

  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data;
  const measurableActivityId = location.state?.activityId;

  useEffect(() => {
    if (measurableActivityId) {
      async function fetchData() {
        try {
          const urlEndpoint = urlConfig.measurableActivityImplementationsEndpoint + measurableActivityId;
          const response = await axios.get(urlEndpoint);
          const implementations = response.data;
          console.log(implementations);
          setTableData(implementations.map((implementation) => ({
            id: implementation.implementationId,
            date: implementation.date,
            description: implementation.description,
            comments: implementation.comment,
            stakeholders: implementation.stakeholder,
            evidence: implementation.evidenceFileName,
          })));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    }

  }, [measurableActivityId, refresh]);

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
        const urlEndpoint = urlConfig.deleteAnImplementationEndpoint + implementationId;
        try {
          const response = await axios.delete(urlEndpoint);
          console.log(response.data);
          setTableData(prevData => prevData.filter(item => item.id !== implementationId));
          Swal.fire({
            title: "Deleted!",
            text: "Implementation activity deleted successfully.",
            icon: "success"
          });
        } catch (error) {
          console.error("Error deleting implementation:", error);
          Swal.fire({
            title: "Error!",
            text: "There was a problem deleting the implementation.",
            icon: "error"
          });
        }
      }
    });
  };

  const displaySuccessMessage = () => {
    Swal.fire({
      position: 'top',
      text: 'Record Saved Successfully',
      icon: 'success',
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 2000
    });
  };

  const handleSave = () => {
    handleClose();
    displaySuccessMessage();
    setEditData(null); // Reset edit data
  };

  const handleEdit = (row) => {
    setEditData(row.original);
    handleShow();
  };

  if (!data) {
    return <Container><p>No data available</p></Container>;
  }

  const columns = [
    { header: 'Date', accessorKey: 'date', size: 50 },
    { header: 'Implementations', accessorKey: 'description' },
    { header: 'Comments', accessorKey: 'comments' },
    { header: 'Stakeholders', accessorKey: 'stakeholders' },
    { header: 'Evidence', accessorKey: 'evidence' },
    {
      header: 'Action',
      accessorKey: 'action',
      Cell: ({ cell, row, table }) => (
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
            onClick={() => {
              const implementationId = row.original.id;
              confirmDelete(implementationId);
            }}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  const CustomEditModal = ({ row, onClose, onSave }) => {
    const [editValues, setEditValues] = useState({
      date: row?.date || '',
      description: row?.description || '',
      comments: row?.comments || '',
      stakeholders: row?.stakeholders || '',
      evidence: row?.evidence || null,
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditValues({
        ...editValues,
        [name]: value,
      });
    };

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setEditValues({
        ...editValues,
        evidence: file,
      });
    };

    const handleSaveClick = () => {
      onSave(editValues);
      onClose();
    };

    return (
      <Box>
        <TextField
          label="Date"
          name="date"
          value={editValues.date}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Description"
          name="description"
          value={editValues.description}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Comments"
          name="comments"
          value={editValues.comments}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Stakeholders"
          name="stakeholders"
          value={editValues.stakeholders}
          onChange={handleInputChange}
          fullWidth
        />
        <input
          type="file"
          name="evidence"
          onChange={handleFileChange}
          fullWidth
        />
        <Button onClick={handleSaveClick}>Save</Button>
        <Button onClick={onClose}>Cancel</Button>
      </Box>
    );
  };

  return (
    <Card variant="outlined" style={{ padding: '16px', margin: '16px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className='mb-1'>
        <h3>Activity:<span className='ms-2 text-primary'>{data.measurableActivity.activity}</span></h3>
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
      <div className='mb-4'>
        <div className='my-1' style={{ marginBottom: '16px' }}>
          <div className='border-1'>
            <div>
              <span className='me-2'>Period:</span>
              <span className="fw-bold">{data.measurableActivity.period}</span>
            </div>
            <div>
              <span className='me-2'>Perspective:</span>
              <span className="fw-bold">{data.measurableActivity.perspective}</span>
            </div>
            <div>
              <span className='me-2'>SSMARTA Objectives: </span>
              <span className="fw-bold">{data.measurableActivity.ssMartaObjectives}</span>
            </div>
            <div>
              <span className='me-2'>Initiative:</span>
              <span className="fw-bold">{data.measurableActivity.initiative}</span>
            </div>
          </div>
        </div>
      </div>

      <Card.Header>
        <h4>Measurable Activity Implementations</h4>
      </Card.Header>
      <div className="d-flex justify-content-end align-items-end">
        <Button variant="contained" className="custom-blue-button mb-2 mt-1" onClick={handleShow}>Add Implementation</Button>
      </div>

      <AddNewInitiativeDetailsModal
        refresh={setRefresh}
        displaySuccessMessage={displaySuccessMessage}
        measurableActivity={data.measurableActivity.activity}
        MeasurableActivityId={data.id}
        show={show}
        handleClose={handleClose}
        initialData={editData} // Pass edit data to modal
      />
      <MaterialReactTable
        columns={columns}
        data={tableData}
      />

      {editData && (
        <CustomEditModal
          row={editData}
          onClose={handleClose}
          onSave={handleSave}
        />
      )}
    </Card>
  );
};

export default DetailPage;
