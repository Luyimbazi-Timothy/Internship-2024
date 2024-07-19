// src/components/DetailPage.js
import React from 'react';

const DetailPage = ({ data, onCancel, onEdit,}) => {
  return (
    <div>
      
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
        {data.evidence.map((img, i) => {
          const imgName = img.split('/').pop().split('.')[0]; // Extract the file name without extension
          return (
            <a key={i} href={img} download={imgName}>
              {imgName}
            </a>
          );
        })}
      </div>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={() => {
        console.log("Edit button clicked with data:", data); // Add this line for debugging
        onEdit(data);
      }}>Edit</button>
    </div>
  );
};

export default DetailPage;
