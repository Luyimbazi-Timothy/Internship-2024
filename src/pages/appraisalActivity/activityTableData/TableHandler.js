import React, { useState, useEffect } from 'react';
import TableComponent from './TableComponent';
import { Link } from 'react-router-dom';
import fetchData from '../../../services/DataService';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';



function TableHandler({ quartileFilter, toggleDashBoardBtnDisplay }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
        <Link to="/create-new-activity">
          <Button className='btn btn-primary mb-1'>
            Add New
          </Button>
        </Link>
      </div>
      <TableComponent data={filteredData} onRowClick={handleRowClick} />
    </div>
  );
}

export default TableHandler;