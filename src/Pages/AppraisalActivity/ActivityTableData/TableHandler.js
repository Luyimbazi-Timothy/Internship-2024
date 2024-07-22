import React, { useState, useEffect } from 'react';
import TableComponent from './TableComponent';
import AddActivityForm from '../AppraisalActivity/form';
import fetchData from '../../services/DataService';
import { useNavigate } from 'react-router-dom';

function TableHandler() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    getData();
  }, []);

  const handleRowClick = (index) => {
    navigateTo(data[index]);
  };

  const navigateTo = (rowData) => {
    navigate('/appraisal-details', { state: { data: rowData } });
  };

  const handleFormSubmit = (newData) => {
    setData((prevData) => [...prevData, newData]);
    setShowForm(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className='mt-1'>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4>Appraisal Record Preview</h4>
        <button className='btn btn-primary mb-1' onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Show Table' : 'Add New'}
        </button>
      </div>
      {showForm ? (
        <AddActivityForm onSubmit={handleFormSubmit} />
      ) : (
        <TableComponent data={data} onRowClick={handleRowClick} />
      )}
    </div>
  );
}

export default TableHandler;
