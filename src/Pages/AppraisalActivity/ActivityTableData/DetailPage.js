import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Button, TextField, Box } from '@mui/material';
import { FaArrowLeft } from 'react-icons/fa';
import { MaterialReactTable } from 'material-react-table';
import { Card } from 'react-bootstrap';

const DetailPage = () => {
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
      Cell: ({ cell }) => (
        <Box display="flex" gap={1}>
          <Button variant="outlined" color="info" size="small">
            Edit
          </Button>
          <Button variant="outlined" color="error" size="small">
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
      <div style={{ marginBottom: '16px' }}>
        <TextField
          label="Period"
          value={period}
          fullWidth
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Perspective"
          value={perspective}
          fullWidth
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="SSMARTA Objectives"
          value={ssMartaObjectives}
          fullWidth
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Initiative"
          value={title}
          fullWidth
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          margin="normal"
        />
      </div>
      <div className="d-flex justify-content-end align-items-end">
  <Button variant="primary" className="custom-blue-button mb-2">Add</Button>
</div>

      <MaterialReactTable
        columns={columns}
        data={tableData}
        editable
      />
    </Card>
  );
};

export default DetailPage;
