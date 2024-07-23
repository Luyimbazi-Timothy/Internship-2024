import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Button, Box } from '@mui/material';
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

  console.log(data);

  const tableData = data.measurableActivity.implementations.map((implementation) => ({
    id: implementation.id,
    date: implementation.date,
    description: implementation.description,
    comments: implementation.comment,
    stakeholders: implementation.stakeholder.join(', '),
    evidence: implementation.evidence,
    action: implementation.id,
  }));

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
        <h2>Activity Preview</h2>
        <Button
          variant="contained"
          startIcon={<FaArrowLeft />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>

      <Card.Header>Contract Defaults</Card.Header>
      <div className='mb-4'>
        <div className='my-1' style={{ marginBottom: '16px' }}>
          <div>
            <h6>
              Measurable Activity:<span className='ms-2' style={{color:"red"}}>{data.measurableActivity.activity}</span>
            </h6>
          </div>
          <div className='border-1'>
            <h6>
              <span className='me-2'>Period:</span> <span>{data.measurableActivity.period}</span>
            </h6>
            <h6>
              <span className='me-2' >Perspective:</span><span>{data.measurableActivity.perspective}</span>
            </h6>
            <h6>
              <span className='me-2' >SSMARTA Objectives: </span><span>{data.measurableActivity.ssMartaObjectives}</span>
            </h6>
            <h6>
              <span className='me-2'>Initiative:</span><span>{data.measurableActivity.initiative}</span>
            </h6>
          </div>
        </div>
      </div>
      <Card.Header>Measurable Activity Implementations</Card.Header>

      <div className="d-flex justify-content-end align-items-end">
        <Button variant="contained" className="custom-blue-button mb-2 mt-2" onClick={handleShow}>+ New Record</Button>
      </div>
      <AddNewInitiativeDetailsModal measurableActivity={data.measurableActivity.activity} show={show} handleClose={handleClose} />
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
