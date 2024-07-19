import React from 'react';

const DetailPage = ({ data, onBack }) => {
  // Destructure the data object for easier access
  const { period, perspective, ssMartaObjectives, initiative, date } = data;
  const { title, initiativeDetails } = initiative || {};
  const { measurableActivities, implementations, comments, stakeholders, evidence } = initiativeDetails || {};

  return (
    <div>
      <button onClick={onBack}>Back to Table</button>
      <h2>Detail Page</h2>
      <p><strong>Period:</strong> {period}</p>
      <p><strong>Perspective:</strong> {perspective}</p>
      <p><strong>SSMARTA Objectives:</strong> {ssMartaObjectives}</p>
      <p><strong>Initiative:</strong> {title}</p>
      <p><strong>Measurable Activities:</strong> {measurableActivities && measurableActivities.join(', ')}</p>
      <p><strong>Implementations:</strong> {implementations && implementations.join(', ')}</p>
      <p><strong>Comments:</strong> {comments && comments.join(', ')}</p>
      <p><strong>Stakeholders:</strong> {stakeholders && stakeholders.join(', ')}</p>
      <p><strong>Evidence:</strong></p>
      <div>
        {evidence && evidence.map((img, i) => {
          const imgName = img.split('/').pop().split('.')[0]; // Extract the file name without extension
          return (
            <a key={i} href={img} download={imgName}>
              {imgName}
            </a>
          );
        })}
      </div>
      <p><strong>Date:</strong> {date}</p>
    </div>
  );
};

export default DetailPage;
