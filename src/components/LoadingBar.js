import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const LoadingBar = ({ progress }) => {
  return (
    <div>
      <ProgressBar now={progress} label={`${progress}%`} />
    </div>
  );
};

export default LoadingBar;
