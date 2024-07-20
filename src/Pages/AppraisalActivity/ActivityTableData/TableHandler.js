// src/components/TableHandler.js
import React, { useState, useEffect } from "react";
import TableComponent from "./TableComponent";
import DetailPage from "./DetailPage";
import AddActivityForm from "../AddActivity/ActivityForm";
import fetchData from "../../../services/DataService";

function TableHandler() {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
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
    setSelectedRow(index);
  };

  const handleFormSubmit = (newData) => {
    setData((prevData) => [...prevData, newData]);
    setShowForm(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="mt-1">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4>Quarter Records Table</h4>
        <button
          className="btn btn-primary mb-1"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Show Table" : "Add New"}
        </button>
      </div>
      {selectedRow !== null ? (
        <DetailPage
          data={data[selectedRow]}
          onBack={() => setSelectedRow(null)}
        />
      ) : showForm ? (
        <AddActivityForm onSubmit={handleFormSubmit} />
      ) : (
        <TableComponent data={data} onRowClick={handleRowClick} />
      )}
    </div>
  );
}

export default TableHandler;
