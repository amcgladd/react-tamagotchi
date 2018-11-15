import React from 'react';
import SleepFiller from './SleepFiller';

function SleepProgressBar({ percentage }) {
  const progressBarStyles = {
    height: '20px',
    width: '350px',
    borderRadius: '50px',
    border: 'black solid 1px'
  }
  return(
    <div style={progressBarStyles}>
      <SleepFiller percentage={percentage}/>
    </div>
  );
}

export default SleepProgressBar;
