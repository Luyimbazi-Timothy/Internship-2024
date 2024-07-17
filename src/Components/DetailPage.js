// src/components/DetailPage.js
import React from 'react';

const DetailPage = ({ data, onBack }) => {
  return (
    <div>
      <button onClick={onBack}>Back to Table</button>
      <h2>Detail Page</h2>
      <p><strong>Period:</strong> {data.period}</p>
      <p><strong>Perspective:</strong> {data.perspective}</p>
      <p><strong>SSMARTA Objectives:</strong> {data.ssMartaObjectives}</p>
      <p><strong>Initiative:</strong> {data.initiative}</p>
      <p><strong>Measurable Activities:</strong> {data.measurableActivities}</p>
      <p><strong>Implementations:</strong> {data.implementations}</p>
      <p><strong>Comments:</strong> {data.comments}</p>
      <p><strong>Stakeholders:</strong> {data.stakeholders}</p>
      <p><strong>Evidence:</strong></p>
      <div>
        {data.evidence.map((img, i) => (
          <img key={i} src={img} alt={`Evidence ${i + 1}`} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
