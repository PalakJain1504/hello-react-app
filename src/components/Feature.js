import React from 'react';

const Feature = ({ imgSrc, title, description }) => {
  return (
    <div className="feature">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Feature;