// src/components/TableHandler.js
import React, { useState, useEffect } from 'react';
import TableComponent from './TableComponent';
import DetailPage from './DetailPage';
import AddActivityForm from '../AppraisalActivity/form'; // Ensure this path is correct
import fetchData from '../../services/DataService';

const defaultInitialValues = {
  period: '',
  perspective: '',
  ssMartaObjectives: '',
  initiative: '',
  measurableActivities: '',
  implementations: '',
  date: '',
  comments: '',
  stakeholders: '',
  evidence: ''
};

const TableHandler = () => {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formInitialValues, setFormInitialValues] = useState(defaultInitialValues);

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

  const handleFormSubmit = (newData) => {
    if (formInitialValues && formInitialValues !== defaultInitialValues) {
      setData(prevData => prevData.map(item => (item === formInitialValues ? newData : item)));
    } else {
      setData(prevData => [...prevData, newData]);
    }
    setShowForm(false);
    setFormInitialValues(defaultInitialValues);
    setSelectedRow(null); // Ensure DetailPage is hidden
  };

  const handleCancel = () => {
    setShowForm(false);
    setSelectedRow(null);
    setFormInitialValues(defaultInitialValues);
  };

  const handleEdit = (dataToEdit) => {
    console.log("Editing data:", dataToEdit); // Debugging log
    setFormInitialValues(dataToEdit);
    setShowForm(true);
  };

  useEffect(() => {
    console.log("Show Form updated:", showForm); // Debugging log
  }, [showForm]);

  useEffect(() => {
    console.log("Current form initial values:", formInitialValues); // Debugging log
  }, [formInitialValues]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Dashboard</h2>
        <button onClick={() => {
          setFormInitialValues(defaultInitialValues);
          setShowForm(true);
          setSelectedRow(null); // Ensure DetailPage is hidden
        }}>
          Add New
        </button>
      </div>
      {selectedRow !== null && !showForm ? (
        <DetailPage data={data[selectedRow]} onBack={() => setSelectedRow(null)} onEdit={handleEdit} onCancel={handleCancel} />
      ) : showForm ? (
        <AddActivityForm initialValues={formInitialValues} onSubmit={handleFormSubmit} onCancel={handleCancel}/>
      ) : (
        <TableComponent data={data} onRowClick={handleRowClick} />
      )}
    </div>
  );
}

export default TableHandler;
