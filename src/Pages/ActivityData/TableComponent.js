// src/components/TableComponent.js
import React from 'react';

const TableComponent = ({ data, onRowClick }) => {
  return (
    <table className='table table-bordered table-striped'>
      <thead>
        <tr>
          <th>PERIOD</th>
          <th>PERSPECTIVE</th>
          <th>SSMARTA OBJECTIVES</th>
          <th>INITIATIVE</th>
          <th>MEASURABLE ACTIVITIES</th>
          <th>IMPLEMENTATIONS</th>
          <th>COMMENTS</th>
          <th>STAKEHOLDERS</th>
          <th>EVIDENCE</th>
        </tr>
      </thead>
      <tbody> 
        {data.map((row, index) => { 
          console.log("DATA", data)
          console.log(`Row ${index + 1} evidence: `, row.evidence); // Debugging line
          return (
            <tr key={index} onClick={() => onRowClick(index)} style={{ cursor: 'pointer' }}>
              <td>{row.period}</td>
              <td>{row.perspective}</td>
              <td>{row.ssMartaObjectives}</td>
              <td>{row.initiative}</td>
              <td>{row.measurableActivities}</td>
              <td>{row.implementations}</td>
              <td>{row.comments}</td>
              <td>{row.stakeholders}</td>
              <td>
                {row.evidence.map((img, i) => {
                  const imgName = img.split('/').pop().split('.')[0]; // Extract the file name without extension
                  return <span key={i}>{imgName} </span>;
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
