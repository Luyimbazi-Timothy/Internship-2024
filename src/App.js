// src/App.js
import React, { useState, useEffect } from 'react';
import TableComponent from './Components/TableComponent';
import DetailPage from './Components/DetailPage';
import fetchData from './services/DataService';

function App() {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
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

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="App">
      <h1>My Table Data</h1>
      {selectedRow === null ? (
        <TableComponent data={data} onRowClick={handleRowClick} />
      ) : (
        <DetailPage data={data[selectedRow]} onBack={() => setSelectedRow(null)} />
      )}
    </div>
  );
}

export default App;
