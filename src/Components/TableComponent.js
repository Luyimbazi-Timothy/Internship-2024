// src/components/TableComponent.js
import React from 'react';

const TableComponent = ({ data, onRowClick }) => {
  return (
    <table border="1">
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
        {data.map((row, index) => (
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
              {row.evidence.map((img, i) => (
                <img key={i} src={img} alt={`Evidence ${i + 1}`} style={{ width: '50px', height: '50px', marginRight: '5px' }} />
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
