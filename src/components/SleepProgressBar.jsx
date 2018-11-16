import React from 'react';
import SleepFiller from './SleepFiller';

function SleepProgressBar({ percentage }) {
  const progressBarStyles = {
    height: '22px',
    width: '425px',
    borderRadius: '50px',
    backgroundColor: 'white'
  };
  return(
    <div style={progressBarStyles}>
      <SleepFiller percentage={percentage}/>
    </div>
  );
}

export default SleepProgressBar;
