import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Button, TextField, Box } from '@mui/material';
import { FaArrowLeft } from 'react-icons/fa';
import { MaterialReactTable } from 'material-react-table';
import { Card } from 'react-bootstrap';
import AddNewInitiativeDetailsModal from './AddNewInitiativeDetailsModal';

const DetailPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data;

  if (!data) {
    return <Container><p>No data available</p></Container>;
  }

  const { period, perspective, ssMartaObjectives, initiative, date } = data;
  const { title, initiativeDetails } = initiative || {};
  const { measurableActivities, implementations, comments, stakeholders, evidence } = initiativeDetails || {};

  const tableData = measurableActivities.map((measurableActivity, index) => ({
    date,
    measurableActivities: measurableActivity || '',
    implementations: implementations[index] || '',
    comments: comments[index] || '',
    stakeholders: stakeholders[index] || '',
    evidence: evidence[index] || '',
    action: index,
  }));

  const columns = [
    { header: 'Date', accessorKey: 'date', size: 50 },
    { header: 'Measurable Activities', accessorKey: 'measurableActivities' },
    { header: 'Implementations', accessorKey: 'implementations' },
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
            onClick={() => {
              table.setEditingRow(row);
            }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={() => {
              // Implement delete functionality
              console.log("Delete action for row:", row.original);
            }}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Card variant="outlined" style={{ padding: '16px', margin: '16px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Detail Page</h2>
        <Button
          variant="contained"
          startIcon={<FaArrowLeft />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>
      <Card.Header>Contract Defaults</Card.Header>
      <div className='d-flex justify-content-around' style={{ marginBottom: '16px' }}>
        <TextField
          label="Period"
          disabled
          value={period}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          margin="normal"
          sx={{
            '& .MuiInputLabel-root': {
              color: 'black',
            },
            '& .MuiInputBase-input': {
              color: 'black',
            },
          }}
        />
        <TextField
          label="Perspective"
          value={perspective}
          disabled
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          margin="dense"
          sx={{
            '& .MuiInputLabel-root': {
              color: 'black',
            },
            '& .MuiInputBase-input': {
              color: 'black',
            },
          }}
        />
        <TextField
          label="SSMARTA Objectives"
          value={ssMartaObjectives}
          disabled
          InputProps={{
            readOnly: true,
          }}
          sx={{
            '& .MuiInputLabel-root': {
              color: 'black',
            },
            '& .MuiInputBase-input': {
              color: 'black',
            },
          }}
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Initiative"
          value={title}
          disabled
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          margin="normal"
          sx={{
            '& .MuiInputLabel-root': {
              color: 'black',
            },
            '& .MuiInputBase-input': {
              color: 'black',
            },
          }}
        />
      </div>
      <Card.Header>Contract Defaults</Card.Header>

      <div className="d-flex justify-content-end align-items-end">
        <Button variant="contained" className="custom-blue-button mb-2 mt-2" onClick={handleShow}>+ New Record</Button>
      </div>
      <AddNewInitiativeDetailsModal show={show} handleClose={handleClose} />
      <MaterialReactTable
        columns={columns}
        data={tableData}
        editDisplayMode={'modal'}
        createDisplayMode={'modal'}
      />
    </Card>
  );
};

export default DetailPage;
