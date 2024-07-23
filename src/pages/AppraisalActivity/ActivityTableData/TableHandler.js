import React, { useState, useEffect } from 'react';
import TableComponent from './TableComponent';
import AddActivityForm from '../AddActivity/ActivityForm';
import fetchData from '../../../services/DataService';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';

function TableHandler({ quartileFilter, toggleDashBoardBtnDisplay }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
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

  useEffect(() => {
    const filterData = () => {
      const filtered = data.filter(row => row.measurableActivity.period === quartileFilter);
      setFilteredData(filtered);
    };
    filterData();
  }, [quartileFilter, data]);

  const handleRowClick = (index) => {
    navigateTo(filteredData[index]);
  };

  const navigateTo = (rowData) => {
    navigate('/appraisal-details', { state: { data: rowData } });
  };

  const handleFormSubmit = (newData) => {
    setData((prevData) => [...prevData, newData]);
    setShowForm(false);
  };

  const handleButtonClick = () => {
    setShowForm(!showForm)
    toggleDashBoardBtnDisplay(showForm)
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
        {showForm ?null:null}
        <Button className='btn btn-primary mb-1' onClick={() => handleButtonClick()}>
          {showForm ?<FaArrowLeft />: 'Add New'}
        </Button>
      </div>
      {showForm ? (
        <AddActivityForm onSubmit={handleFormSubmit} />
      ) : (
        <TableComponent data={filteredData} onRowClick={handleRowClick} />
      )}
    </div>
  );
}

export default TableHandler;
