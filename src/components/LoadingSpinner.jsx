import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="center-message">
      <div>
        <div className="spinner"></div>
        <p style={{ marginTop: '1rem' }}>Loading posts...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;