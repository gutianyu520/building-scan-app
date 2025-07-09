import React from 'react';

const ProgressBar = ({ percentage }) => {
  const validPercentage = Math.min(100, Math.max(0, percentage)); // Ensure percentage is between 0 and 100

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-filled"
        style={{ width: `${validPercentage}%` }}
        aria-valuenow={validPercentage}
        aria-valuemin="0"
        aria-valuemax="100"
        role="progressbar"
        aria-label="Progress"
      >
      </div>
    </div>
  );
};

export default ProgressBar;
